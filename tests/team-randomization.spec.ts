import { test, expect } from "@playwright/test";

test.describe("Team Page Randomization", () => {
  test("should render team members without visual glitches on page load", async ({
    page,
  }) => {
    // Navigate to team page
    await page.goto("/team");

    // Wait for the page to be fully loaded
    await page.waitForLoadState("networkidle");

    // Check that the hero section is visible
    await expect(page.locator("h1")).toContainText("Meet the Team");

    // Check that team member cards are visible
    await expect(page.locator(".bg-white.rounded-lg.shadow-md")).toHaveCount(
      24
    );

    // Verify that all team member images or initials are displayed
    const teamCards = page.locator(".bg-white.rounded-lg.shadow-md");
    const cardCount = await teamCards.count();

    for (let i = 0; i < cardCount; i++) {
      const card = teamCards.nth(i);
      // Each card should have either an image or initials fallback
      const hasImage = await card
        .locator("img")
        .isVisible()
        .catch(() => false);
      const hasInitials = await card
        .locator("div.bg-gradient-to-br")
        .isVisible()
        .catch(() => false);

      expect(hasImage || hasInitials).toBe(true);
    }

    // Verify no hydration errors in console
    const logs = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        logs.push(msg.text());
      }
    });

    // Reload the page to check for hydration consistency
    await page.reload();
    await page.waitForLoadState("networkidle");

    // Check that no hydration errors occurred
    const hydrationErrors = logs.filter(
      (log) =>
        log.includes("hydration") ||
        log.includes("Hydration") ||
        log.includes("server and client")
    );

    expect(hydrationErrors).toHaveLength(0);
  });

  test("should maintain consistent order on page refreshes within the same minute", async ({
    page,
  }) => {
    // Get the order of team members on first load
    await page.goto("/team");
    await page.waitForLoadState("networkidle");

    const firstLoadNames = await page
      .locator(".bg-white.rounded-lg.shadow-md h3")
      .allTextContents();

    // Refresh the page multiple times and verify order stays the same within the same minute
    for (let i = 0; i < 2; i++) {
      await page.reload();
      await page.waitForLoadState("networkidle");

      const currentNames = await page
        .locator(".bg-white.rounded-lg.shadow-md h3")
        .allTextContents();
      expect(currentNames).toEqual(firstLoadNames);
    }
  });

  test("should display all team sections properly", async ({ page }) => {
    await page.goto("/team");
    await page.waitForLoadState("networkidle");

    // Check that both organizing team and CFP board sections are present
    const sectionHeadings = await page.locator("h2.text-3xl").allTextContents();
    expect(sectionHeadings).toContain("Organizing Team");
    expect(sectionHeadings).toContain("CFP Review Board");
  });
});

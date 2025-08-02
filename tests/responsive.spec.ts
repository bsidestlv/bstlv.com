import { test, expect } from '@playwright/test';

test.describe('Responsive Design Tests', () => {
  const pages = [
    { name: 'Homepage', url: '/' },
    { name: 'Team Page', url: '/team' },
    { name: 'Volunteers Page', url: '/volunteers' },
    { name: 'Code of Conduct', url: '/code-of-conduct' }
  ];

  test.describe('Desktop View (1920x1080)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
    });

    for (const pageInfo of pages) {
      test(`${pageInfo.name} should display correctly on desktop`, async ({ page }) => {
        await page.goto(pageInfo.url);
        
        // Check page loads successfully
        await expect(page).toHaveTitle(/BSidesTLV 2025/);
        
        // Check logo is visible
        const logo = page.locator('img[alt="BSidesTLV 2025"]');
        await expect(logo).toBeVisible();
        
        // Check desktop navigation is visible
        const desktopNav = page.locator('nav.hidden.md\\:flex');
        await expect(desktopNav).toBeVisible();
        
        // Check mobile menu button is hidden
        const mobileButton = page.locator('button[aria-label="Toggle navigation menu"]');
        await expect(mobileButton).not.toBeVisible();
        
        // Take screenshot
        await page.screenshot({ path: `tests/screenshots/desktop-${pageInfo.name.toLowerCase().replace(/\s+/g, '-')}.png`, fullPage: true });
      });
    }
  });

  test.describe('Mobile View (375x667)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
    });

    for (const pageInfo of pages) {
      test(`${pageInfo.name} should display correctly on mobile`, async ({ page }) => {
        await page.goto(pageInfo.url);
        
        // Check page loads successfully
        await expect(page).toHaveTitle(/BSidesTLV 2025/);
        
        // Check logo is visible and scaled appropriately
        const logo = page.locator('img[alt="BSidesTLV 2025"]');
        await expect(logo).toBeVisible();
        
        // Check mobile menu button is visible
        const mobileButton = page.locator('button[aria-label="Toggle navigation menu"]');
        await expect(mobileButton).toBeVisible();
        
        // Check desktop navigation is hidden
        const desktopNav = page.locator('nav.hidden.md\\:flex');
        await expect(desktopNav).not.toBeVisible();
        
        // Test mobile menu functionality
        await mobileButton.click();
        const mobileMenu = page.locator('div.md\\:hidden .flex.flex-col');
        await expect(mobileMenu).toBeVisible();
        
        // Close mobile menu
        await mobileButton.click();
        await expect(mobileMenu).not.toBeVisible();
        
        // Take screenshot
        await page.screenshot({ path: `tests/screenshots/mobile-${pageInfo.name.toLowerCase().replace(/\s+/g, '-')}.png`, fullPage: true });
      });
    }
  });

  test.describe('Tablet View (768x1024)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
    });

    for (const pageInfo of pages) {
      test(`${pageInfo.name} should display correctly on tablet`, async ({ page }) => {
        await page.goto(pageInfo.url);
        
        // Check page loads successfully
        await expect(page).toHaveTitle(/BSidesTLV 2025/);
        
        // Check logo is visible
        const logo = page.locator('img[alt="BSidesTLV 2025"]');
        await expect(logo).toBeVisible();
        
        // Check desktop navigation is visible (md: breakpoint is 768px)
        const desktopNav = page.locator('nav.hidden.md\\:flex');
        await expect(desktopNav).toBeVisible();
        
        // Check mobile menu button is hidden
        const mobileButton = page.locator('button[aria-label="Toggle navigation menu"]');
        await expect(mobileButton).not.toBeVisible();
        
        // Take screenshot
        await page.screenshot({ path: `tests/screenshots/tablet-${pageInfo.name.toLowerCase().replace(/\s+/g, '-')}.png`, fullPage: true });
      });
    }
  });

  test.describe('Homepage Components Visibility', () => {
    test('all major homepage components should be visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('/');
      
      // Hero section
      const heroTitle = page.locator('h1:has-text("BSidesTLV 2025")');
      await expect(heroTitle).toBeVisible();
      
      // Postponement notice
      const postponementNotice = page.locator('text=BSidesTLV 2025 – Postponed');
      await expect(postponementNotice).toBeVisible();
      
      // Statistics section
      const statsSection = page.locator('text=1700+');
      await expect(statsSection).toBeVisible();
      
      // Community section
      const communitySection = page.locator('text=Join Our Community');
      await expect(communitySection).toBeVisible();
      
      // Footer
      const footer = page.locator('text=Thank you and stay safe, The BSidesTLV 2025 Team');
      await expect(footer).toBeVisible();
    });

    test('all major homepage components should be visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      
      // Hero section (should be responsive)
      const heroTitle = page.locator('h1:has-text("BSidesTLV 2025")');
      await expect(heroTitle).toBeVisible();
      
      // Postponement notice
      const postponementNotice = page.locator('text=BSidesTLV 2025 – Postponed');
      await expect(postponementNotice).toBeVisible();
      
      // Statistics section (should stack on mobile)
      const statsSection = page.locator('text=1700+');
      await expect(statsSection).toBeVisible();
      
      // Community section
      const communitySection = page.locator('text=Join Our Community');
      await expect(communitySection).toBeVisible();
      
      // Footer
      const footer = page.locator('text=Thank you and stay safe, The BSidesTLV 2025 Team');
      await expect(footer).toBeVisible();
    });
  });
});
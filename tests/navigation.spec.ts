import { test, expect } from '@playwright/test';

test.describe('BSidesTLV Navigation', () => {
  test('navigation should be visible on desktop', async ({ page }) => {
    await page.goto('/');
    
    // Check if navigation exists
    const nav = page.locator('nav.hidden.md\\:flex');
    await expect(nav).toBeVisible();
    
    // Check all navigation links are present and visible
    const navLinks = [
      { text: 'Home', href: '/' },
      { text: 'Speakers', href: '/speakers' },
      { text: 'Agenda', href: '/agenda' },
      { text: 'Sponsors', href: '/sponsors' },
      { text: 'Team', href: '/team' },
      { text: 'CFP', href: '/cfp' }
    ];
    
    for (const link of navLinks) {
      const linkElement = nav.locator(`a[href="${link.href}"]`);
      await expect(linkElement).toBeVisible();
      await expect(linkElement).toHaveText(link.text);
    }
  });

  test('mobile menu button should be visible on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if mobile menu button is visible
    const menuButton = page.locator('button[aria-label="Toggle navigation menu"]');
    await expect(menuButton).toBeVisible();
    
    // Check that desktop navigation is hidden on mobile
    const desktopNav = page.locator('nav.hidden.md\\:flex');
    await expect(desktopNav).not.toBeVisible();
  });

  test('mobile menu should open and close correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const menuButton = page.locator('button[aria-label="Toggle navigation menu"]');
    
    // Initially, mobile menu should not be visible
    const mobileMenu = page.locator('div.md\\:hidden .flex.flex-col');
    await expect(mobileMenu).not.toBeVisible();
    
    // Click menu button to open
    await menuButton.click();
    await expect(mobileMenu).toBeVisible();
    
    // Check all mobile navigation links are present
    const navLinks = [
      { text: 'Home', href: '/' },
      { text: 'Speakers', href: '/speakers' },
      { text: 'Agenda', href: '/agenda' },
      { text: 'Sponsors', href: '/sponsors' },
      { text: 'Team', href: '/team' },
      { text: 'CFP', href: '/cfp' }
    ];
    
    for (const link of navLinks) {
      const linkElement = mobileMenu.locator(`a[href="${link.href}"]`);
      await expect(linkElement).toBeVisible();
      await expect(linkElement).toHaveText(link.text);
    }
    
    // Click menu button to close
    await menuButton.click();
    await expect(mobileMenu).not.toBeVisible();
  });

  test('clicking mobile nav link should close menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const menuButton = page.locator('button[aria-label="Toggle navigation menu"]');
    const mobileMenu = page.locator('div.md\\:hidden .flex.flex-col');
    
    // Open menu
    await menuButton.click();
    await expect(mobileMenu).toBeVisible();
    
    // Click on Team link
    const teamLink = mobileMenu.locator('a[href="/team"]');
    await teamLink.click();
    
    // Menu should close after clicking
    await expect(mobileMenu).not.toBeVisible();
  });
});
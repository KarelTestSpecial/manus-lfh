
import { test, expect } from '@playwright/test';

test('Immune System page has content and is fully visible', async ({ page }) => {
  await page.goto('http://localhost:5173/manus-lfh/defense-systems/immune-system');

  // Wait for the page to be fully loaded
  await page.waitForLoadState('networkidle');

  // Check for the main heading
  await expect(page.locator('h1:has-text("The Immune System")')).toBeVisible();

  // Check for section headings
  await expect(page.locator('h2:has-text("Key Components of the Immune System")')).toBeVisible();
  await expect(page.locator('h2:has-text("Factors That Weaken Immunity")')).toBeVisible();
  await expect(page.locator('h2:has-text("Ways to Support a Healthy Immune System")')).toBeVisible();

  // Take a screenshot of the entire page
  await page.screenshot({ path: '/home/jules/verification/immune_system.png', fullPage: true });
});

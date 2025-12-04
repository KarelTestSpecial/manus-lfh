import { test, expect } from '@playwright/test';

test('Defense Systems page has content and in-page navigation works', async ({ page }) => {
  // Navigate to the Defense Systems page
  await page.goto('http://localhost:5173/manus-lfh/#/defense-systems');

  // Check for the main heading
  await expect(page.locator('h1:has-text("Defense Systems")')).toBeVisible();

  // Check for section headings
  await expect(page.locator('h2:has-text("The Immune System")')).toBeVisible();
  await expect(page.locator('h2:has-text("Detoxification")')).toBeVisible();
  await expect(page.locator('h2:has-text("Antioxidant Defense")')).toBeVisible();
  await expect(page.locator('h2:has-text("Cell Repair and Regeneration")')).toBeVisible();
  await expect(page.locator('h2:has-text("Microbiome Balance")')).toBeVisible();

  // Test in-page scrolling
  await page.locator('a[href="#immune-system"]').click();
  await page.waitForTimeout(1000); // Wait for smooth scroll
  await expect(page.locator('#immune-system h2')).toBeInViewport();
});

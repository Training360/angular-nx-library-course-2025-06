import { test, expect } from '@playwright/test';

test('has navigation', async ({ page }) => {
  await page.goto('/');

  // Expect nav to contain a substring.
  expect(await page.locator('nav a.navbar-brand').innerText()).toContain(
    'Government App'
  );
});

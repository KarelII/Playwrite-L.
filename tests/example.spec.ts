import { test, expect } from '../src/fixtures';

test('has title Strength Training & Muscle Building', async ({ page, utils }) => {
  await utils.goToHomepage();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Strength Training & Muscle Building/);
});

test('menu "home button" works', async ({ page, utils, app }) => {
  await utils.goToHomepage();

  await app.stronglifts.menuBar.programs.click();
  await app.stronglifts.menuBar.programs.stronglifts5x5.click();

  await expect(page).toHaveTitle(/Stronglifts 5×5: The Complete Workout Guide/);

  await app.stronglifts.menuBar.homeButton.click();
  await expect(page).toHaveTitle(/Strength Training & Muscle Building/);
});
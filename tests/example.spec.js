// @ts-check
const { test, expect } = require('../src/fixtures');

test('has title Strength Training & Muscle Building', async ({ page, utils }) => {
  //await page.goto('https://stronglifts.com/');
  await utils.goToHomepage();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Strength Training & Muscle Building/);
});

test('menu "home button" works', async ({ page, utils, objectRepository }) => {
  await utils.goToHomepage();

  await objectRepository.menuBar.programs.click();
  await objectRepository.menuBar.programs.stronglifts5x5.click();

  await expect(page).toHaveTitle(/Stronglifts 5×5: The Complete Workout Guide/);

  await objectRepository.menuBar.homeButton.click();
  await expect(page).toHaveTitle(/Strength Training & Muscle Building/);
});

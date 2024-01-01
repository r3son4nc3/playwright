import { test, expect } from "@playwright/test";

test("Add new customer", async ({ page }) => {
  await page.goto('https://material-kit-pro-react.devias.io/dashboard/customers');
  await page.goto('https://material-kit-pro-react.devias.io/auth/jwt/login?returnTo=%2Fdashboard%2Fcustomers');
  
  await page.getByRole("button", { name: "Consent" }).click();
  await page.getByRole("button", { name: "Add" }).click();
  await page.getByLabel("Full name *").click();
  await page.getByLabel("Full name *").fill("Alex Garcia");
  await page.getByLabel("Email address *").click();
  await page.getByLabel("Email address *").fill("alexgarcia@mail.com");

  await page.getByRole("button", { name: "Save" }).click();

  await page
    .locator("div")
    .filter({ hasText: "Customer created" })
    .nth(3)
    .click();
});

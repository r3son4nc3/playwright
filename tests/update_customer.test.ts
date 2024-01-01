import { test, expect } from "@playwright/test";

test("Update customer", async ({ page }) => {
  await page.goto('https://material-kit-pro-react.devias.io/dashboard/customers');
  await page.goto('https://material-kit-pro-react.devias.io/auth/jwt/login?returnTo=%2Fdashboard%2Fcustomers');
  
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByRole("button", { name: "Consent" }).click();
  await page.getByRole("link", { name: "Carson Darrin" }).click();
  await page.getByRole("main").getByRole("link", { name: "Edit" }).click();
  await page.getByLabel("Full name *").click();

  await page.getByLabel("Full name *").fill("Barry Sheppard");
  await expect(page.getByRole("button", { name: "Update" })).toBeVisible();
  await page.getByRole("button", { name: "Update" }).click();

  await page
    .locator("div")
    .filter({ hasText: "Customer updated" })
    .nth(3)
    .focus({ timeout: 1000 });
});

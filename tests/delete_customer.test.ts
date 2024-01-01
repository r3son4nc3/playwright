import { test, expect } from "@playwright/test";

test("Delete customer", async ({ page }) => {
  await page.goto('https://material-kit-pro-react.devias.io/dashboard/customers');
  await page.goto('https://material-kit-pro-react.devias.io/auth/jwt/login?returnTo=%2Fdashboard%2Fcustomers');
  

  await page.getByRole("button", { name: "Log In" }).click();
  await page
    .getByRole("row", { name: "Carson Darrin carson.darrin@" })
    .getByRole("checkbox")
    .check();

  await page.getByRole("button", { name: "Delete" }).click();
});

import { test, expect } from "@playwright/test";

console.log("Test case: delete customer");

test("test", async ({ page }) => {
  await page.goto(
    "https://material-kit-pro-react.devias.io/dashboard/customers"
  );
  await page.goto(
    "https://material-kit-pro-react.devias.io/auth/amplify/login?returnTo=%2Fdashboard%2Fcustomers"
  );

  await page.getByRole("button", { name: "Log In" }).click();
  await page
    .getByRole("row", { name: "Carson Darrin carson.darrin@" })
    .getByRole("checkbox")
    .check();

  await page.getByRole("button", { name: "Delete" }).click();
});

import { test, expect } from "@playwright/test";

test("View customers", async ({ page }) => {
  await page.goto(
    "https://material-kit-pro-react.devias.io/dashboard/customers"
  );
  await page.goto(
    "https://material-kit-pro-react.devias.io/auth/amplify/login?returnTo=%2Fdashboard%2Fcustomers"
  );
  await page.getByRole("button", { name: "Log In" }).click();

  const element = await page.waitForSelector(".MuiContainer-maxWidthXl");
  
  const isVisible = await element.isVisible();

  if (!isVisible) {
    console.log("The element is not visible.");
  }
});

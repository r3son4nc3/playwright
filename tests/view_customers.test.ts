import { test, expect } from "@playwright/test";

console.log("Test case: view customers");

test("test", async ({ page }) => {
  await page.goto(
    "https://material-kit-pro-react.devias.io/dashboard/customers"
  );
  await page.goto(
    "https://material-kit-pro-react.devias.io/auth/amplify/login?returnTo=%2Fdashboard%2Fcustomers"
  );
  await page.getByRole("button", { name: "Log In" }).click();

  const element = await page.waitForSelector(".MuiContainer-maxWidthXl");
  //const elementText = await element.textContent(); commented for not shown in github actions console
  const isVisible = await element.isVisible();

  //console.log("Element text:", elementText); commented for not shown in github actions console

  if (isVisible) {
    console.log("The element is visible.");
  } else {
    console.log("The element is not visible.");
  }
});

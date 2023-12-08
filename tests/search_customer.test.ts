import { test, expect } from "@playwright/test";

console.log("Test case: search customer");

test("test", async ({ page }) => {
  await page.goto(
    "https://material-kit-pro-react.devias.io/dashboard/customers"
  );
  await page.goto(
    "https://material-kit-pro-react.devias.io/auth/amplify/login?returnTo=%2Fdashboard%2Fcustomers"
  );
  await page.getByRole("button", { name: "Log In" }).click();

  const element = await page.waitForSelector(".css-1wjjt5j");
  const elementText = await element.textContent();

  const namesArray = elementText?.split(/[,\s]+/);
  const firstName = namesArray && namesArray?.length > 0 ? namesArray[0] : "No customer was found";

  console.log("Value from Element text:", firstName);

  await expect(page.getByPlaceholder("Search customers")).toBeVisible();

  page.getByPlaceholder("Search customers").fill(firstName);
  page.getByPlaceholder("Search customers").press("Enter");

  await expect(page.locator("tbody")).toContainText(firstName);
});

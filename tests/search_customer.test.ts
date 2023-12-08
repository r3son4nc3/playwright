import { test, expect } from "@playwright/test";


test("Search customer", async ({ page }) => {
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

  //console.log("Value from Element text:", firstName); //commented to not shown in git actions 

  await expect(page.getByPlaceholder("Search customers")).toBeVisible();

  await page.getByPlaceholder("Search customers").fill(firstName);
  await page.getByPlaceholder("Search customers").press("Enter");

  await expect(page.locator("tbody")).toContainText(firstName);
});

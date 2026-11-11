import { test, expect } from "../fixtures/test";

test.describe("Shopping journey", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("sorts products by ascending price", async ({ inventoryPage }) => {
    await inventoryPage.sortByPriceLowToHigh();
    await inventoryPage.expectFirstProduct("Sauce Labs Onesie");
  });

  test("adds an item to cart and removes it", async ({ inventoryPage, cartPage, page }) => {
    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await expect(page.getByTestId("shopping-cart-badge")).toHaveText("1");
    await inventoryPage.openCart();
    await cartPage.expectProduct("Sauce Labs Backpack");
    await cartPage.removeProduct("Sauce Labs Backpack");
    await cartPage.expectEmpty();
  });

  test("completes checkout and verifies confirmation", async ({ inventoryPage, cartPage, checkoutPage }) => {
    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await inventoryPage.openCart();
    await cartPage.checkout();
    await checkoutPage.completeCustomerInformation("Kundan", "QA", "533001");
    await checkoutPage.finishOrder();
    await checkoutPage.expectOrderComplete();
  });

  test("requires customer information before continuing checkout", async ({ inventoryPage, cartPage, checkoutPage }) => {
    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await inventoryPage.openCart();
    await cartPage.checkout();
    await checkoutPage.continueWithoutInformation();
    await checkoutPage.expectRequiredFieldError("Error: First Name is required");
  });
});

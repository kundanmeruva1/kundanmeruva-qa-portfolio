import { expect, type Page } from "@playwright/test";

export class CartPage {
  constructor(private readonly page: Page) {}

  async expectProduct(productName: string) {
    await expect(this.page.locator('[data-test="inventory-item"]').filter({ hasText: productName })).toBeVisible();
  }

  async removeProduct(productName: string) {
    const item = this.page.locator('[data-test="inventory-item"]').filter({ hasText: productName });
    await item.getByRole("button", { name: "Remove" }).click();
  }

  async checkout() {
    await this.page.getByTestId("checkout").click();
  }

  async expectEmpty() {
    await expect(this.page.getByTestId("cart-list")).toBeEmpty();
  }
}

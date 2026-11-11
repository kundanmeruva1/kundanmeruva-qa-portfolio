import { expect, type Page } from "@playwright/test";

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async expectLoaded() {
    await expect(this.page.getByTestId("title")).toHaveText("Products");
    await expect(this.page.getByTestId("inventory-item")).toHaveCount(6);
  }

  async addProductToCart(productName: string) {
    const item = this.page.locator('[data-test="inventory-item"]').filter({ hasText: productName });
    await item.getByRole("button", { name: "Add to cart" }).click();
  }

  async sortByPriceLowToHigh() {
    await this.page.getByTestId("product-sort-container").selectOption("lohi");
  }

  async expectFirstProduct(name: string) {
    await expect(this.page.getByTestId("inventory-item-name").first()).toHaveText(name);
  }

  async openCart() {
    await this.page.getByTestId("shopping-cart-link").click();
  }
}

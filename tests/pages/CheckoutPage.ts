import { expect, type Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async completeCustomerInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.getByTestId("firstName").fill(firstName);
    await this.page.getByTestId("lastName").fill(lastName);
    await this.page.getByTestId("postalCode").fill(postalCode);
    await this.page.getByTestId("continue").click();
  }

  async continueWithoutInformation() {
    await this.page.getByTestId("continue").click();
  }

  async finishOrder() {
    await this.page.getByTestId("finish").click();
  }

  async expectRequiredFieldError(message: string) {
    await expect(this.page.getByTestId("error")).toContainText(message);
  }

  async expectOrderComplete() {
    await expect(this.page.getByTestId("complete-header")).toHaveText("Thank you for your order!");
  }
}

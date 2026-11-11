import { test } from "../fixtures/test";

const credentials = {
  username: "standard_user",
  password: "secret_sauce"
};

test.describe("Authentication", () => {
  test("allows a valid user to sign in", async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.login(credentials.username, credentials.password);
    await inventoryPage.expectLoaded();
  });

  test("shows a useful message for invalid credentials", async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(credentials.username, "incorrect-password");
    await loginPage.expectLoginError("Username and password do not match");
  });
});

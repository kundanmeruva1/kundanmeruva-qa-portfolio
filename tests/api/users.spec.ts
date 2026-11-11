import { test, expect } from "@playwright/test";

test("GET /users/1 returns required identity and address fields", async ({ request }) => {
  const response = await request.get("/users/1");
  expect(response.ok()).toBeTruthy();

  const user = await response.json();
  expect(user).toMatchObject({
    id: 1,
    name: expect.any(String),
    username: expect.any(String),
    email: expect.stringMatching(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    address: {
      street: expect.any(String),
      city: expect.any(String),
      zipcode: expect.any(String),
      geo: {
        lat: expect.any(String),
        lng: expect.any(String)
      }
    }
  });
});

import { test, expect } from "@playwright/test";

// TEMPLATE ONLY: set API_BASE_URL to an authorized test environment before enabling.
// Never point sample tests at systems you do not own or have permission to test.
test.skip(!process.env.API_BASE_URL, "Set API_BASE_URL to an authorized test environment.");

test("example API response has an expected shape", async ({ request }) => {
  const baseURL = process.env.API_BASE_URL!;
  const response = await request.get(`${baseURL}/health`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty("status");
});
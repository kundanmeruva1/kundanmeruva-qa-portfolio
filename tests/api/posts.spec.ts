import { test, expect } from "@playwright/test";

test.describe("Posts API contract", () => {
  test("GET /posts/1 returns a valid post representation", async ({ request }) => {
    const response = await request.get("/posts/1");

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/json");

    const post = await response.json();
    expect(post).toMatchObject({
      userId: expect.any(Number),
      id: 1,
      title: expect.any(String),
      body: expect.any(String)
    });
    expect(post.title.length).toBeGreaterThan(0);
  });

  test("GET /posts/0 returns not found", async ({ request }) => {
    const response = await request.get("/posts/0");
    expect(response.status()).toBe(404);
  });

  test("POST /posts accepts a valid create payload", async ({ request }) => {
    const payload = {
      title: "QA API contract example",
      body: "Created by a Playwright API test",
      userId: 7
    };

    const response = await request.post("/posts", { data: payload });
    expect(response.status()).toBe(201);

    const created = await response.json();
    expect(created).toMatchObject({
      ...payload,
      id: expect.any(Number)
    });
  });
});

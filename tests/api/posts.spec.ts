import { test, expect } from "@playwright/test";
import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true });
const postSchema = {
  type: "object",
  required: ["userId", "id", "title", "body"],
  properties: {
    userId: { type: "integer" },
    id: { type: "integer" },
    title: { type: "string", minLength: 1 },
    body: { type: "string", minLength: 1 }
  },
  additionalProperties: true
};
const validatePost = ajv.compile(postSchema);

test.describe("Posts API contract", () => {
  test("GET /posts/1 returns a schema-valid post representation", async ({ request }) => {
    const response = await request.get("/posts/1");

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/json");

    const post = await response.json();
    expect(validatePost(post), JSON.stringify(validatePost.errors)).toBeTruthy();
    expect(post.id).toBe(1);
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
    expect(validatePost(created), JSON.stringify(validatePost.errors)).toBeTruthy();
  });
});

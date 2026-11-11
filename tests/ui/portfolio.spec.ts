import { test, expect } from "@playwright/test";

test("portfolio home presents QA engineering focus", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Kundan \| QA Engineer/);
  await expect(page.getByRole("heading", { name: /Building confidence into every release/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Explore my work/i })).toHaveAttribute("href", "#work");
});

test("main navigation links to portfolio sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Skills" })).toHaveAttribute("href", "#skills");
  await expect(page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
});
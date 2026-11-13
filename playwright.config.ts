import { defineConfig, devices } from "@playwright/test";

const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  workers: isCI ? 2 : undefined,
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["junit", { outputFile: "test-results/junit.xml" }]
  ],
  outputDir: "test-results",
  use: {
    // Sauce Demo exposes its stable test selectors through data-test.
    testIdAttribute: "data-test",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  projects: [
    {
      name: "portfolio",
      testMatch: /ui\/.*\.spec\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "http://127.0.0.1:4173"
      }
    },
    {
      name: "e2e",
      testMatch: /e2e\/.*\.spec\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.E2E_BASE_URL ?? "https://www.saucedemo.com"
      }
    },
    {
      name: "api",
      testMatch: /api\/.*\.spec\.ts/,
      use: {
        baseURL: process.env.API_BASE_URL ?? "https://jsonplaceholder.typicode.com"
      }
    }
  ],
  webServer: {
    command: "python3 -m http.server 4173 --directory .",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !isCI,
    timeout: 30_000
  }
});

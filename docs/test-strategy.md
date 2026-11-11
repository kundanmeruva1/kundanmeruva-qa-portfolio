# Test Strategy — Demo E-commerce Application

## 1. Objective
Demonstrate a risk-based, layered test approach for the public Sauce Demo training application. The goal is to protect important shopping journeys and provide actionable feedback.

## 2. Scope

**In scope**
- Authentication: valid and invalid credentials
- Product inventory rendering and price sorting
- Cart add/remove behavior
- Checkout required-field validation
- Successful checkout confirmation
- API representation checks against JSONPlaceholder

**Out of scope**
- Payment-provider integration, real transactions, refunds, shipping integrations
- Production security, load, accessibility certification, and browser/device coverage beyond configured Chromium
- Durable persistence for JSONPlaceholder POST requests (the service simulates writes)

## 3. Test levels

| Level | Purpose | Example |
|---|---|---|
| UI / E2E | Validate critical user journeys | Login → add item → checkout |
| API | Validate service response contracts | Status, headers, required fields, data types |
| Database | Document persistence and relationship checks | Order total and order-item consistency SQL |
| CI | Run repeatable checks on code changes | GitHub Actions matrix |

## 4. Test design
- Use equivalence partitioning for valid and invalid login/customer inputs.
- Use boundary thinking for required checkout fields and empty cart state.
- Prioritize end-to-end happy paths plus high-value negative paths.
- Assert user-visible outcomes and meaningful response fields, not implementation details.
- Keep tests isolated; each scenario starts from a known state.
- Prefer stable test IDs and page objects for maintainability.

## 5. Entry and exit criteria

**Entry:** target demo service is reachable; dependencies and Chromium are installed; no required credentials beyond the public demo account.

**Exit:** all blocking scenarios pass or failures are triaged with reproducible evidence. A green CI run is evidence for this configured suite only, not proof that the application is defect-free.

## 6. Test data and environment
- UI target: Sauce Demo (https://www.saucedemo.com)
- UI demo account: standard_user / secret_sauce (public training credentials)
- API target: JSONPlaceholder (https://jsonplaceholder.typicode.com)
- No real customer data, secrets, or production endpoints are used.

## 7. Risks and mitigations
- **External demo outage / rate limiting:** keep targets configurable and distinguish environment failures from product defects.
- **UI changes:** centralize selectors in page objects and use accessible or test-ID locators.
- **Flaky timing:** rely on Playwright auto-waiting; avoid fixed sleeps.
- **False confidence:** keep scope and exclusions explicit; inspect traces and reports for failures.
- **Sensitive data leakage:** use synthetic values and never commit tokens or private data.

## 8. Reporting
CI uploads the HTML report, JUnit XML, and failure diagnostics as artifacts. Review failed traces and screenshots before filing a defect. Report actual run counts and pass rates only from a specific run.

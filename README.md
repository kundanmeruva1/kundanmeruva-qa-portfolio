# Kundan — QA Engineer Portfolio

A responsive, static portfolio focused on Playwright automation, API testing, database validation, and CI/CD.

## Portfolio focus

- **UI automation:** Playwright and TypeScript
- **API testing:** Postman and Playwright APIRequestContext
- **Database validation:** SQL and MongoDB
- **CI/CD:** Git, GitHub, and GitHub Actions

> Accuracy note: the code samples in this repository are starter examples. They are not presented as client engagements, production-system tests, employment history, certifications, or measured achievements.

## Run locally

The site is static. Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Run the portfolio smoke test

Requires Node.js 20+ and Python 3.

```bash
npm install
npx playwright install --with-deps chromium
npm test
```

The UI smoke test serves this static portfolio locally and checks basic page content and navigation.

## Repository layout

- `index.html`, `styles.css`, `script.js` — portfolio website
- `tests/ui/` — runnable Playwright smoke test for this portfolio
- `tests/api/` — API testing template; configure a permitted test endpoint before use
- `examples/database/` — illustrative SQL validation queries
- `.github/workflows/` — GitHub Actions workflow

## Publish with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then save.
4. Wait for the Pages deployment. The site URL will appear in the Pages settings and usually follows `https://kundanmeruva1.github.io/kundanmeruva-qa-portfolio/`.

No build step or secrets are required for the static site.

## Personalize before sharing

Add only details you are comfortable making public, such as a professional email address, LinkedIn profile, or specific project links. Do not add confidential client information, credentials, tokens, or private test data.
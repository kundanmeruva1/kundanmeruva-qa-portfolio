# Risk Assessment

| Risk | Likelihood | Impact | Priority | Test / mitigation |
|---|---|---|---|---|
| User cannot authenticate with valid credentials | Medium | High | High | Positive login E2E |
| Invalid credentials are accepted | Low | High | High | Negative login E2E |
| Product price ordering is incorrect | Medium | Medium | Medium | Ascending-price sort assertion |
| Cart loses or duplicates selected items | Medium | High | High | Add/remove and badge assertions |
| Checkout accepts missing mandatory data | Medium | High | High | Required-field validation |
| Checkout does not confirm a completed order | Low | High | High | End-to-end confirmation assertion |
| API returns incomplete or malformed post data | Medium | Medium | Medium | Required-field and type assertions |
| External demo service is unavailable | Medium | Medium | Medium | Separate environment outage from product defect |
| CI silently omits a test suite | Low | High | High | Matrix job per project and visible workflow status |

## Prioritization model
- **High:** could block a critical journey, compromise correctness, or create a misleading release signal.
- **Medium:** degrades a key feature but has a workaround or limited scope.
- **Low:** cosmetic or low-impact behavior.

Priorities are qualitative examples for this demo project, not measured production risk.

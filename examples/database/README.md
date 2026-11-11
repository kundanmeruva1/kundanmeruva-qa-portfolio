# Database validation examples

These are illustrative query patterns, not results from a real database.

For MongoDB, equivalent checks can be performed with aggregation pipelines:

- Duplicate keys: `$group` by the business key, then `$match` groups with `count > 1`.
- Required fields: `$match` documents where required fields are missing or null.
- Fixture verification: filter by a dedicated test-run identifier and compare expected counts.

Use a dedicated test database and synthetic test data. Keep credentials in a secret manager or CI secrets; never commit them.
-- Illustrative SQL validation patterns.
-- Replace table and column names with those from an authorized test database.
-- Run read-only checks first; do not execute against production without approval.

-- Check for duplicate business keys.
SELECT business_key, COUNT(*) AS duplicate_count
FROM sample_records
GROUP BY business_key
HAVING COUNT(*) > 1;

-- Check required values are populated.
SELECT COUNT(*) AS missing_required_values
FROM sample_records
WHERE business_key IS NULL
   OR created_at IS NULL;

-- Compare expected and actual row counts for a known test fixture.
SELECT COUNT(*) AS actual_fixture_rows
FROM sample_records
WHERE test_run_id = 'REPLACE_WITH_TEST_RUN_ID';

-- MongoDB equivalent patterns are described in README.md in this folder.
# Database Validation Examples

These SQL examples are illustrative patterns for a hypothetical e-commerce schema. They are not connected to Sauce Demo or a live database.

## Example schema assumptions
- orders(order_id, customer_id, status, total_amount)
- order_items(order_item_id, order_id, product_id, quantity, unit_price)
- customers(customer_id, email)

The SQL file demonstrates orphan checks, order-total reconciliation, duplicate customer keys, and invalid quantities. Adapt identifiers to an authorized test database before running. Use synthetic data and read-only access where possible.

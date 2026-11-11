-- Illustrative SQL validation patterns for a hypothetical e-commerce schema.
-- Assumed tables:
-- orders(order_id, customer_id, status, total_amount)
-- order_items(order_item_id, order_id, product_id, quantity, unit_price)
-- customers(customer_id, email)
-- Not connected to Sauce Demo or any live database. Adapt before use.

-- 1. Detect order items without a parent order.
SELECT oi.order_item_id, oi.order_id
FROM order_items AS oi
LEFT JOIN orders AS o ON o.order_id = oi.order_id
WHERE o.order_id IS NULL;

-- 2. Reconcile each order total with its item subtotal.
SELECT
  o.order_id,
  o.total_amount,
  COALESCE(SUM(oi.quantity * oi.unit_price), 0) AS calculated_total
FROM orders AS o
LEFT JOIN order_items AS oi ON oi.order_id = o.order_id
GROUP BY o.order_id, o.total_amount
HAVING ABS(o.total_amount - COALESCE(SUM(oi.quantity * oi.unit_price), 0)) > 0.01;

-- 3. Find duplicate customer emails (case-insensitive).
SELECT LOWER(email) AS normalized_email, COUNT(*) AS duplicate_count
FROM customers
WHERE email IS NOT NULL
GROUP BY LOWER(email)
HAVING COUNT(*) > 1;

-- 4. Find invalid quantities or prices.
SELECT order_item_id, quantity, unit_price
FROM order_items
WHERE quantity <= 0 OR unit_price < 0;

-- 5. Find orders with no line items.
SELECT o.order_id
FROM orders AS o
LEFT JOIN order_items AS oi ON oi.order_id = o.order_id
WHERE oi.order_item_id IS NULL;

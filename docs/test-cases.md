# Test Scenarios

| ID | Area | Scenario | Expected result | Automation |
|---|---|---|---|---|
| AUTH-001 | Login | Sign in with standard demo credentials | Inventory page is displayed | Automated |
| AUTH-002 | Login | Sign in with incorrect password | Clear authentication error is displayed | Automated |
| INV-001 | Inventory | Open inventory | Six demo products are visible | Automated |
| INV-002 | Inventory | Sort by price, low to high | Lowest-priced item appears first | Automated |
| CART-001 | Cart | Add a backpack | Cart badge increments and item appears | Automated |
| CART-002 | Cart | Remove an item | Cart becomes empty | Automated |
| CHK-001 | Checkout | Complete checkout with required details | Order confirmation is displayed | Automated |
| CHK-002 | Checkout | Continue with required details empty | First-name validation error is displayed | Automated |
| API-001 | Posts | Retrieve post 1 | 200 and required fields/types are returned | Automated |
| API-002 | Posts | Retrieve post 0 | 404 is returned | Automated |
| API-003 | Posts | Submit valid create payload | 201 and submitted representation are returned | Automated |
| API-004 | Users | Retrieve user 1 | Identity and nested address fields are present | Automated |

## Exploratory test ideas
- Try keyboard-only navigation through login, inventory, cart, and checkout.
- Check behavior after browser refresh at each checkout stage.
- Investigate empty cart, multiple items, and repeated add/remove actions.
- Check unusual but syntactically valid customer names and postal codes.
- Compare API behavior for missing, null, and unexpected fields.
- Inspect accessibility names and focus order for key controls.

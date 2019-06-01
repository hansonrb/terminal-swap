# TERMINAL.CO Test Project

Here is the assignment, please return by Monday. Quality over speed but both is better.

* Create a FE for uniswap's user data, which displays a list of users using cursor-based pagination and infinite-scroll (rows are loaded while scrolling down the list).
* Show in each row at least the user ID and the ETH Balance
* Clicking on a user row should show a list of his/her eth transactions (Bonus points if it shows token txs)
* Load data using graphql (Apollo) from https://thegraph.com/explorer/subgraph/graphprotocol/uniswap
* Display a "Transfer ETH button". When you click it, it shows `from ID` and `to ID` input. When you fill them (using any IDs of users loaded in the list) it will trigger a mutation. This mutation does not have to reach any remote endpoint, but has to modify Apollo's internal cache to represent the eth change in the UI, adding it to the `to ID` user and substracting it from the `from ID` user, and adding it as an item to the txs list of the affected users.
* First priority is performance, second is architecture/maintainability and last one is visual design.
* Bonus: Use Material UI

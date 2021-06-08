# Learn Vaniall Redux 

# Three Core Concepts 
Cake shop 

Entities 
Shop - Stores cakes on a shelf 
Shopkeeper - at the front of the store
Customer - At the store entrance 

Activities 
Customer - Buy a cake 
Shopkeeper - Remove a cake from the shelf 

| Cake shop scenario | Redux | Purpose |
| ------------------ | ----- | ------- |
| Shop | store | Holds the state of your applicaiton |
| Intention to BUY_CAKE | Action | Describes what happened |
| Shopkeeper | Reducer | Ties the store and actions together |


A store that holds the state of your application 
An action that describes the changes tin the state of the application 
A reducer which actually carries out the state transion depending on the action



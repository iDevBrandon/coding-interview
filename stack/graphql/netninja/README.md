# GraphQL by Net Ninja

## Reference

<https://www.youtube.com/watch?v=5199E50O7SI&ab_channel=freeCodeCamp.org>

## What is GraphQL?

- GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.

in REST API

Endpoints :

pokemonsite.com/api/pokemon
pokemonsite.com/api/pokemon/123

Over fetching:

Getting bakc more data than we need

in GraphQL, we use single endpoint

mygrpahqlsite.com/graphql

```graphql

Query {
  pokemon {
    id,
    name,
    type
  }
}
```

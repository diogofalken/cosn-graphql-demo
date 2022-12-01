# COSN GraphQL Demo

## Requirements

- [Docker Engine](https://docs.docker.com/engine/)

- [Docker Compose](https://docs.docker.com/compose/)

## Start app

```bash
docker-compose up
# OR
docker-compose up --remove-orphans --build
```

Backend server listens on http://0.0.0.0:4000.

Frontend listens on http://0.0.0.0:3000.

## Exercises

### Part 1 (Backend)

Use http://0.0.0.0:4000/graphql for this part.

1. Fetch all users.

2. Create a user.

3. Add name field to Users and re-do exercise 1.

4. Add argument to filter users by id.

5. Fetch a single user.

**Hint:** There's auto complete on the playground.

### Part 2 (Frontend)

Use http://0.0.0.0:3000

1. Populate the "REST" table using REST endpoints.

2. Populate the "GraphQL" table using the GraphQL endpoint.

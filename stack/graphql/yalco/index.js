const database = require("./database");
const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    teams: [Team]
    team(id: Int): Team
    equipments: [Equipment]
    supplies: [Supply]
  }
  type Mutation {
    deleteEquipment(id: String): Equipment
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
    supplies: [Supply]
  }
  type Equipment {
    id: String
    userd_by: String
    count: Int
    new_or_used: String
  }
  type Supply {
    id: String
    team: String
  }
`;
const resolvers = {
  Query: {
    teams: (parent, args, context, info) =>
      database.teams.map((team) => {
        team.supplies = database.supplies.filter((supply) => {
          return supply.team === team.id;
        });
        return team;
      }),
    equipments: () => database.equipments,
    supplies: () => database.supplies,
  },
  Mutation: {
    deleteEquipment: (parent, args, context, info) => {
        const deleted = database.equipments
            .filter((equipment) => {
                return equipment.id === args.id
            })[0]
        database.equipments = database.equipments
            .filter((equipment) => {
                return equipment.id !== args.id
            })
        return deleted
    }
}
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

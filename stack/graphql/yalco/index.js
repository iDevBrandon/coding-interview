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
    insertEquipment(
      id: String
      used_by: String
      count: Int
      new_or_used: String
    ): Equipment
    deleteEquipment(id: String): Equipment
    updateEquipment(
      id: String
      used_by: String
      count: Int
      new_or_used: String
    ): Equipment
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
    used_by: String
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
    insertEquipment: (parent, args, context, info) => {
      database.equipments.push(args);
      return args;
    },
    deleteEquipment: (parent, args, context, info) => {
      const deleted = database.equipments.filter((equipment) => {
        return equipment.id === args.id;
      })[0];
      database.equipments = database.equipments.filter((equipment) => {
        return equipment.id !== args.id;
      });
      return deleted;
    },
    updateEquipment: (parent, args, context, info) => {
      return database.equipments
        .filter((equipment) => {
          return equipment.id === args.id;
        })
        .map((equipment) => {
          Object.assign(equipment, args);
          return equipment;
        })[0];
    },
  },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

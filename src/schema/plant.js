import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    plants: [Plant!]
    plant(id: ID!): Plant!
  }

  extend type Mutation {
    createPlant(
      name: String
      type: String
      description: String
    ): Plant!

    updatePlant(
        id: ID!
        name: String
        type: String
        description: String
    ): Plant!
    deletePlant(id: ID!): Boolean!
  }

  type Plant {
    id: ID!
    name: String
    type: String
    description: String
  }
`;

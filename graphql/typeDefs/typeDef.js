import { gql } from "apollo-server";

const typeDef = gql`
  scalar Obje
  type User @key(fields: "id") {
    id: ID!
    name: String!
    age: Int!
    cities: [City]
    address: [Address]
    todo: TodoList
  }

  type Address {
    id: ID!
    flatNo: Int!
    street: String!
    user: User
    city: City
  }

  type City {
    id: ID!
    name: String!
    zip: Int!
    state: String!
    users: [User]
  }

  extend type TodoList @key(fields: "id") {
    id: ID! @external
  }

  type Query {
    getUsers(id: ID): [User]
    getAddress(id: ID): [Address]
    getCity(id: ID): [City]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  input CreateUserInput {
    name: String!
    age: Int!
    address: CreateAddressInput
    city: CreateCityInput
  }

  input CreateAddressInput {
    flatNo: Int!
    street: String!
  }

  input CreateCityInput {
    name: String!
    zip: Int!
    state: String
  }
`;

export default typeDef;

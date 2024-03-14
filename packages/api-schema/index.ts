import gql from 'gql-tag';

const DateTimeType = gql`
  """
  A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.
  """
  scalar DateTime
`;

const UserRoleType = gql`
  enum UserRole {
    admin
    user
  }
`;

const UserTypeType = gql`
  type User {
    authId: ID!
    avatarUrl: String!
    createdAt: DateTime!
    credit: Float!
    email: String!
    id: ID!
    name: String!
    role: UserRole!
  }
`;

const UserWhereAuthIdInputType = gql`
  input UserWhereAuthIdInput {
    authId: ID!
  }
`;

const QueryType = gql`
  type Query {
    findUser(where: UserWhereAuthIdInput!): User
  }
`;

export const typeDefs = [DateTimeType, UserRoleType, UserTypeType, UserWhereAuthIdInputType, QueryType];

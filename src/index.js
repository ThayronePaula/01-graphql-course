import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer( {
  typeDefs: gql`
  type Query {
    name: String
    id: ID
    age:Int
    avarege: Float
    marriage: Boolean!
    arrayString: [String!]!
  }
  `,
  resolvers: {
    Query: {
      name: async() => 'my name',
      id: async () => 1,
      age: async () => '24',
      avarege: async () => 454.848,
      marriage: async () => false ,
      arrayString: async () => [],

    }
  }
});

server.listen( 4003 ).then( ({url}) => {
  console.log(`Server listening on url ${url}`);
})


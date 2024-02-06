import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello: () => "Hello World!",
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function start(req: any, res: any) {
  await apolloServer.start();
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}

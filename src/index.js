import { GraphQLServer } from 'graphql-yoga';

//set up the type definations(Schema)
// location
// bio

const typeDefs = `
type Query {
    hello:String!
    man:String!
    bio:String!
    location:String!
}
`;

const resolvers = {
  Query: {
    hello() {
      return 'hello world';
    },
    man() {
      return 'man';
    },
    bio() {
      return 'I am Emmanuel mwangi maina.A senior frontend developer with over 3 years working exprience';
    },
    location() {
      return 'I come from Nairobi Kenya but currently living in Boston USA';
    },
  },
};
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log('running on port 4000');
});

//setup the resolvers(functions to be called)

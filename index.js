const {ApolloServer} = require('apollo-server');
const gql = require('graphql_tag');

const typeDefs = gql`
    type Query{
        direBonjour: String! 
    }
`
const resolvers = {
    Query:{
        sayHi:() => 'Bonjour Tout le monde'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({ port:5000})
    .then(res => {
        console.log(`Server running at ${res.url}`);
    });
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const mySchema = new GraphQLSchema({
    query: queryType
});

const queryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'world'
        }
    }
});

module.exports = mySchema;
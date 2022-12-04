import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GET_ALL_USERS } from './Queries/User'
import { CREATE_USER } from './Mutations/User';


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        // GET_ALL_USERS
        getAllUsers: GET_ALL_USERS
    }
})

const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        // CREATE_USER
        createUser: CREATE_USER,
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})
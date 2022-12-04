import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GET_ALL_USERS } from './Queries/User'
import { CREATE_USER, DELETE_USER, UPDATE_USER } from './Mutations/User';


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
        // UPDATE_USER
        updateUSer: UPDATE_USER,
        // DELETE_USER
        deleteUser: DELETE_USER
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})
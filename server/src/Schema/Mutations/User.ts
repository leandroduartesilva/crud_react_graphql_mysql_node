import { GraphQLString, GraphQLID } from 'graphql';
import { Users } from "../../Entities/Users";
import { UserType } from "../TypeDefs/User";


export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any){
        const { name, username, password } = args
        await Users.insert({name, username, password})

        return { name, username, password }

    }
}

export const UPDATE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any){
        const { id, name, username, password } = args
        await Users.update({id}, {name, username, password})

        return { id, name, username, password }
    }
}

export const DELETE_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any){
        const { id } = args
        await Users.delete({id})

        return { id }
    }
}
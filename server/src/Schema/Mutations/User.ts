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

        const user = await Users.findOne({
            where: {username: username}
        })

        if(!user){
            return await Users.insert({name, username, password})
        }else{
            throw new Error('User already exists')
        }
        //return { name, username, password }

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

export const UPDATE_USER_PASSWORD_BY_USERNAME = {
    type: UserType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent: any, args: any){
        const { username, oldPassword, newPassword } = args

        //@ts-ignore
        const user = await Users.findOne({ where: {username: username} })

        if(user?.password === oldPassword){
            return await Users.update({username: username}, {password: newPassword})
        }else{
            throw new Error("Old password isn't match with the current password")
        }
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
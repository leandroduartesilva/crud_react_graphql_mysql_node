import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { DataSource } from 'typeorm'
import { schema } from './Schema'
import { Users } from './Entities/Users'

const main = async () => {

    const AppDataSource = new DataSource({
        type: 'mysql',
        database: 'GraphqlCRUD',
        host: 'localhost',
        username: 'root',
        password: '',
        port: 3306,
        logging: true,
        synchronize: false,
        entities: [Users]
    })

    AppDataSource.initialize()
        .then(() => {
            console.log('Database connected')
        })
        .catch((err) => {
            console.log(err)
        })

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, () => {
        console.log("Server started on port 3001")
    })
}

main().catch((err) => {
  console.error(err)
})
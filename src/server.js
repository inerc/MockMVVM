import express from 'express';
import bodyParser from "body-parser"
import cors from 'cors'
import { typeDefs, resolvers } from './api/gql'
import { ApolloServer } from 'apollo-server-express'
import apiRest from './api/rest';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(cors())

apiRest(app)

app.listen({ port: 4000 }, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);

app.listen(3300, function(){
    console.log("Server is listening on port 3300");
});
const express = require('express')
const {ApolloServer} = require('apollo-server')
const {ShowsApi} = require('./showsApi')
const {schema: typeDefs} = require('./types')
const {resolvers} = require('./resolvers')

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    dataSources: ()=>{
        return {
            showsAPI: new ShowsApi()
        }
    }
})

server.listen().then(({url})=>console.log(`🚀 Server ready at ${url}`))


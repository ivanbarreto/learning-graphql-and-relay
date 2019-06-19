const { graphql } = require('graphql');
const readline = require('readline');
const graphqlHTTP = require('express-graphql');
const express = require('express');

const app = express();

const mySchema = require('./schema/main');

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const { MongoClient } = require('mongodb');
const assert = require('assert');

const MONGO_URL = 'mongodb://localhost:27017/test';

MongoClient.connect(MONGO_URL, (err, client) => {
  assert.equal(null, err);
  const db = client.db('test');
  console.log('Connected to MongoDB server');
    app.use('/graphql', graphqlHTTP({
        schema: mySchema,
        context: {db},
        graphiql: true
    }));
    app.listen(3000, () =>
        console.log('Running Express.js on port 3000')
    );
});
const express = require('express');
const graphqlHttp = require('express-graphql');
const {buildSchema} = require('graphql');
 
const app = express();
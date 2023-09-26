const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

const dbUrl = 'postgres://webadmin:ALCedi13704@node50291-kanathip.proen.app.ruk-com.cloud:11569/books'

const sequelize = new Sequelize(dbUrl);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
// export const sequelize = new Sequelize({
//   dialect: 'postgres',
//   host: config.dbHost,
//   port: Number(config.dbPort),
//   username: config.dbUser,
//   password: config.dbPassword,
//   database: config.dbName,
//   logging: false, 
// });
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: config_1.config.dbHost,
    port: Number(config_1.config.dbPort),
    username: config_1.config.dbUser,
    password: config_1.config.dbPassword,
    database: config_1.config.dbName,
    logging: false,
});

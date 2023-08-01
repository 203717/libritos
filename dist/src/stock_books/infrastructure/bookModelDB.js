"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
// Sequelize Book model
const sequelize_1 = require("sequelize");
const database_1 = require("../../config/database"); // Importa tu instancia de sequelize desde donde la configuraste
class BookModel extends sequelize_1.Model {
}
exports.BookModel = BookModel;
BookModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    author: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    tableName: 'books',
    sequelize: database_1.sequelize,
    timestamps: false,
});

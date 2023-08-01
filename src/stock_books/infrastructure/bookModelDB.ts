// Sequelize Book model
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database'; // Importa tu instancia de sequelize desde donde la configuraste

export class BookModel extends Model {
    public id!: number;
    public title!: string;
    public author!: string;
    public price!: number;
}

BookModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new DataTypes.STRING(255),
        allowNull: false,
    },
    author: {
        type: new DataTypes.STRING(255),
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    tableName: 'books',
    sequelize: sequelize, // this bit is important
    timestamps: false,
});

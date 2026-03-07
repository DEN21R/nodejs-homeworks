import sequelize from '../config/db.js'
import { DataTypes } from 'sequelize'

const Book = sequelize.define(
  'Book',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'books',
    timestamps: false,
  },
)
export default Book

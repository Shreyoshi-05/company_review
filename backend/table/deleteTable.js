import  { Sequelize, DataTypes } from 'sequelize';
import { db } from '../db/db.js';

export const deleteReview = db.deleteReview(
  'reviewTable',
  {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pros: {
      type: DataTypes.STRING,
      allowNull:false
    },
    cons: {
      type:DataTypes.STRING,
      allowNull:false
    }
  },
);
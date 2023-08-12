import { DataTypes } from "sequelize";
import { sequelize } from "../../config/sequelize.js";

export const Address = sequelize.define(
  "Address",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    flatNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

import { sequelize } from "../../config/sequelize.js";

export const UserCity = sequelize.define(
  "UserCity",
  {

  },
  {
    underscored: true,
  }
);

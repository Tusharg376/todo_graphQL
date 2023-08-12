import Sequelize from "sequelize";

export const sequelize = new Sequelize("user_data", "root", "Tushar.22@", {
  host: "localhost",
  dialect: "mysql",
  logging: (e) => {},
});

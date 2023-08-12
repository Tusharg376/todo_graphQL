import { Address, City, User, UserCity } from "./schema/index.js";

User.hasOne(Address);
User.belongsToMany(City, { through: UserCity });

export default User;

import { City, Address, User, UserCity } from "./schema/index.js";

City.hasOne(Address);
City.belongsToMany(User,{through : UserCity})

export default City;

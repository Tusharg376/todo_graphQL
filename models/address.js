import { User, Address, City } from './schema/index.js'

Address.belongsTo(User);
Address.belongsTo(City)

export default Address;

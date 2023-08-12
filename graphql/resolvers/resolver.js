import models from "../../models/index.js";
const { User, Address, City, UserCity } = models;
const resolvers = {
  Query: {
    getUsers: async (parent, { id }) => {
      const where = id ? { id: id } : {};
      const userData = await User.findAll({ where, raw: true });
      return userData.map((el) => ({
        ...el,
        todo: { __type: `TodoList`, id: el.id },
      }));
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      let { name, age, address, city } = args.input;

      const userData = await User.create({ name, age });
      const getCityData = await City.findOne({ where: { name: city.name } });
      if (getCityData) {
        await userData.addCity(getCityData);
        const addressData = await Address.create(address);
        await addressData.setUser(userData);
        await addressData.setCity(getCityData);
      } else {
        const cityData = await City.create(city);
        await userData.addCity(cityData);
        const addressData = await Address.create(address);
        await addressData.setUser(userData);
        await addressData.setCity(cityData);
      }
      return userData;
    },
  },
  User: {
    cities: async (parent) => {
      const t = await parent.getCities();
      return t;
    },
    address: async (parent) => {
      return Address.findAll({ where: { user_id: parent.id } });
    },
  },
};

export default resolvers;

// "input": {
//     "name": "gautam",
//     "age": 22,
//     "address": {"flatNo": 10,"street": "that one"},
//     "city":{"name": "Chandigarh","state":"Chandigarh","zip": 160001}
//   }

// query Query($id:ID) {
//   getUsers(id:$id) {
//     name
//     todo {
//       description
//     }
//   }
// }

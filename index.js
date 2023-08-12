import { ApolloServer } from "apollo-server";
import { sequelize } from "./config/sequelize.js";
import "./models/index.js";
import { buildFederatedSchema } from "@apollo/federation";
import resolvers from "./graphql/resolvers/resolver.js";
import typeDefs from "./graphql/typeDefs/typeDef.js";

const server = new ApolloServer({
  schema: buildFederatedSchema({ typeDefs, resolvers }),
});

try {
  await sequelize
    .sync({ alter: true })
    .then(() => {
      server.listen({ port: 3001 }).then(({ port }) => {
        console.log(`server running on port :- ${port}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
} catch {
  (err) => {
    console.log(err);
  };
}

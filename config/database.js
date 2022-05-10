// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "mongoose",
//       settings: {
//         host: env("DATABASE_HOST"),
//         srv: env.bool("DATABASE_SRV", true),
//         port: env.int("DATABASE_PORT", 27017),
//         database: env("DATABASE_NAME"),
//         username: env("DATABASE_USERNAME"),
//         password: env("DATABASE_PASSWORD"),
//       },
//       options: {
//         authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
//         ssl: env.bool("DATABASE_SSL", true),
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "holidaze.xzccf.mongodb.net"),
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "holidaze-api"),
        username: env("DATABASE_USERNAME", "Admin"),
        password: env("DATABASE_PASSWORD", "Admin123"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({

  // port: process.env.PORT,
  // dialect: 'mysql',
  // host: process.env.HOST,
  // username: process.env.USERNAME,
  // password: process.env.PASSWORD,
  // database: process.env.DATABASE,
  // timezone: process.env.TIMEZONE,

  // host: "68.178.171.26",
  // user: "remote",
  // password: "8FK1_AYV.$dq",
  // database: "dev_panel",
  // dialect: "mysql"

  dialect: 'mysql',
  host: '107.180.51.85',
  username: 'test-school',
  password: '1-zb{_%%eFZa',
  database: 'test-school',
  timezone: "+05:30",
});

module.exports = sequelize;



// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'mysql',
//   host: '107.180.51.85',
//   username: 'test-school',
//   password: '1-zb{_%%eFZa',
//   database: 'test-school',
//   // timezone: "+05:30",
// });

// module.exports = sequelize;





// import { Sequelize } from "sequelize";
// require("dotenv").config();


// const port = process.env.PORT;
// const host = process.env.DB_HOST;
// const dbName = process.env.DB_NAME;
// const dbUser = process.env.DB_USER;
// const dbPass = process.env.DB_PASS;


// const config = {
//   port: port
// }
// const sequelize = new Sequelize({
//   database: dbName,
//   username: dbUser,
//   host: host,
//   password: dbPass,
//   dialect: "mysql",
//   // dialectOptions: {
//   //   socketPath: "/var/run/mysqld/mysqld.sock",
//   // },
//   timezone: "+05:30",
// });

// export { transactiondb, sequelize, config };
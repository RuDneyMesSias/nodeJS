require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "port":process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": true,
    "define" : {
        timestamps: true,
        underscored: true,
    }
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "port":process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": true,
    "define" : {
        timestamps: true,
        underscored: true,
  }
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "port":process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": true,
    "define" : {
        timestamps: true,
        underscored: true,
  }
  }
}

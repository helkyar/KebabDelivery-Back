const mongoose = require("mongoose");

module.exports = class Manager {
  static clientParams = {
    host: process.env.DBHOST,
    name: process.env.DBNAME,
    port: process.env.DBPORT,
  };

  static querys = {
    save: "create",
  };

  static async connect() {
    const { host, port, name } = this.clientParams;
    await mongoose.connect(`mongodb://${host}:${port}/${name}`);
  }

  static async executeQuery(schema, params, query) {
    await this.connect();
    try {
      const user = await schema[query]({ params });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
};

const { MongoClient } = require("mongodb");

module.exports = class Manager {
  static clientParams = {
    host: process.env.DBHOST,
    name: process.env.DBNAME,
    port: process.env.DBPORT,
  };

  static async postManager() {
    const { host, name, port } = this.clientParams;
    const client = new MongoClient(`${host}:${port}/${name}`);
    try {
      await client.connect();
      //list databases
      listDatabases(client);
      console.log("Connected!");
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Check databases in mongodb [only for testing]
   * (!) Remove before production
   * @param {MongoClient} client
   */
  async listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
  }
};

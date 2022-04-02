const { Client } = require("pg");

module.exports = class Manager {
  static clientParams = {
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    name: process.env.DBNAME,
    pswd: process.env.DBPSWD,
    port: process.env.DBPORT,
  };

  static async executeQuery(Model, query, params) {
    let client = new Client(this.clientParams);
    try {
      client.connect();

      let data = params
        ? await client.query(query, params)
        : await client.query(query);

      return data.rows.map((e) => new Model(e));

      //Returns undefined to diferenciate from empty array (no data)
    } catch (error) {
      console.log("Query Error: ", query, error);
      return undefined;

      //Close connection
    } finally {
      client.end();
    }
  }
  static async executeMongoQuery(Model, query, params) {}
};

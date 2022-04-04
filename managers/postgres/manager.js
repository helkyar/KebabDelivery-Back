const { Client } = require("pg");

module.exports = class Manager {
  static clientParams = {
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    password: process.env.DBPSWD,
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

      //On error returns: "null"; to diferenciate from no data: "[]"
    } catch (error) {
      console.log("Query Error: ", query, error);
      return null;

      //Close connection
    } finally {
      client.end();
    }
  }
  static async executeMongoQuery(Model, query, params) {}
};

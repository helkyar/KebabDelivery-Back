const { Client } = require("pg");

module.exports = class Manager {
  // Connection _______________________________________________
  static clientParams = {
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    password: process.env.DBPSWD,
    port: process.env.DBPORT,
  };

  // Query creation _____________________________________________
  static createQuerys(table, columns, name = "username") {
    const updateQuery = columns.map((col, i) => `${col} = $${i + 1} `);
    const columnVariable = columns.map((c, i) => `$${i + 1}`);
    const next = columns.length + 1;

    return {
      find: `SELECT * FROM ${table} WHERE id=$1`,
      findAll: `SELECT * FROM ${table}`,
      findName: `SELECT * FROM ${table} WHERE ${name}=$1`,
      insert: `INSERT INTO ${table} (${columns}) VALUES (${columnVariable}) RETURNING *;`,
      update: `UPDATE ${table} SET ${updateQuery} WHERE id = $${next} RETURNING *;`,
      delete: `DELETE FROM ${table} WHERE id=$1`,
    };
  }

  // Query execution _____________________________________________
  static async executeQuery(Model, query, params) {
    let client = new Client(this.clientParams);
    try {
      client.connect();

      let data = params
        ? await client.query(query, params)
        : await client.query(query);

      return data.rows.map((e) => new Model(e).getObject());

      //On error returns: "null"; to diferenciate from no data: "[]"
    } catch (error) {
      console.log("Query Error: ", query, error);
      return null;

      //Close connection
    } finally {
      client.end();
    }
  }
};

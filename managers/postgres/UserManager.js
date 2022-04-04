let Manager = require("./Manager");
let User = require("./models/UserModel");

class UserManager extends Manager {
  static table = "users";
  static columns = ["username", "password"];

  // Query preparation __________________________________________________________________
  static queries = {
    getAllUsers: `SELECT * FROM ${this.table}`,
    getUser: `SELECT * FROM ${this.table} WHERE id=$1`,
    getUserlogin: `SELECT * FROM ${this.table} WHERE username=$1`,
    postUser: `INSERT INTO ${this.table} (${this.columns}) VALUES 
                (${this.columnsVariables()}) RETURNING *;`,
    patchUser: `UPDATE ${this.table} SET ${this.updateQuery()}
                  WHERE id = $${this.columns.length + 1} RETURNING *;`,
    deleteUser: `DELETE FROM ${this.table} WHERE id=$1`,
  };

  static updateQuery() {
    return this.columns.map((col, i) => `${col} = $${i + 1} `);
  }

  static columnsVariables() {
    return this.columns.map((c, i) => `$${i + 1}`);
  }

  // Query Execution _______________________________________________________________________
  static async find({ id }) {
    return await this.executeQuery(User, this.queries.getUser, [id]);
  }

  static async findName({ username }) {
    return await this.executeQuery(User, this.queries.getUserlogin, [username]);
  }

  static async findAll() {
    return await this.executeQuery(User, this.queries.getAllUsers);
  }

  static async create({ username, password }) {
    const params = [username, password];
    return await this.executeQuery(User, this.queries.postUser, params);
  }

  static async update({ id, username, password }) {
    const params = [username, password, id];
    return await this.executeQuery(User, this.queries.patchUser, params);
  }

  static async delete({ id }) {
    return await this.executeQuery(User, this.queries.deleteUser, [id]);
  }
}

module.exports = UserManager;

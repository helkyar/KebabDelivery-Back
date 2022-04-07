const Manager = require("./Manager");
const User = require("./models/UserModel");

class UserManager extends Manager {
  static table = "users";
  static columns = ["username", "password"];
  static queries = Manager.createQuerys(this.table, this.columns);

  // Query Execution _______________________________________________________________________
  static async findAll() {
    return await this.executeQuery(User, this.queries.findAll);
  }

  static async find({ id }) {
    return await this.executeQuery(User, this.queries.find, [id]);
  }

  static async findName({ username }) {
    return await this.executeQuery(User, this.queries.findName, [username]);
  }

  static async create({ username, password }) {
    const params = [username, password];
    return await this.executeQuery(User, this.queries.insert, params);
  }

  static async update({ id, username, password }) {
    const params = [username, password, id];
    return await this.executeQuery(User, this.queries.update, params);
  }

  static async delete({ id }) {
    return await this.executeQuery(User, this.queries.delete, [id]);
  }
}

module.exports = UserManager;

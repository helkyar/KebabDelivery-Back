let Manager = require("./Manager");
let Template = require("./models/TemplateModel");

class TemplateManager extends Manager {
  static table = "template";
  static columns = ["column1", "column2"];

  // Query preparation __________________________________________________________________
  static queries = {
    getAll: `SELECT * FROM ${this.table}`,
    getOne: `SELECT * FROM ${this.table} WHERE id=$1`,
    post: `INSERT INTO ${this.table} (${this.columns}) VALUES
                     (${this.columnsVariables()}) RETURNING *;`,
    patch: `UPDATE ${this.table} SET ${this.updateQuery()}
                      WHERE id = $${this.columns.length + 1} RETURNING *;`,
    delete: `DELETE FROM ${this.table} WHERE id=$1`,
  };

  static updateQuery() {
    return this.columns.map((col, i) => `${col} = $${i + 1} `);
  }

  static columnsVariables() {
    return this.columns.map((c, i) => `$${i + 1}`);
  }

  // Query Execution _______________________________________________________________________
  static async findAll() {
    return await this.executeQuery(Template, this.queries.getAll);
  }

  static async find({ id }) {
    return await this.executeQuery(Template, this.queries.getOne, [id]);
  }

  static async create({ column1, column2 }) {
    const params = [column1, column2];
    return await this.executeQuery(Template, this.queries.post, params);
  }

  static async update({ column1, column2 }, { id }) {
    const params = [column1, column2, id];
    return await this.executeQuery(Template, this.queries.patch, params);
  }

  static async delete({ id }) {
    return await this.executeQuery(Template, this.queries.delete, [id]);
  }
}

module.exports = TemplateManager;

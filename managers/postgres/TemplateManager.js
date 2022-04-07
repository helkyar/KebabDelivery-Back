const Manager = require("./Manager");
const Template = require("./models/TemplateModel");

class TemplateManager extends Manager {
  static table = "templates";
  static columns = ["column1", "column2"];
  static queries = Manager.createQuerys(this.table, this.columns);

  // Query Execution _______________________________________________________________________
  static async findAll() {
    return await this.executeQuery(Template, this.queries.findAll);
  }

  static async find({ id }) {
    return await this.executeQuery(Template, this.queries.find, [id]);
  }

  static async create({ column1, column2 }) {
    const params = [column1, column2];
    return await this.executeQuery(Template, this.queries.insert, params);
  }

  static async update({ column1, column2 }, { id }) {
    const params = [column1, column2, id];
    return await this.executeQuery(Template, this.queries.update, params);
  }

  static async delete({ id }) {
    return await this.executeQuery(Template, this.queries.delete, [id]);
  }
}

module.exports = TemplateManager;

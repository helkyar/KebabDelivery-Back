const Manager = require("./Manager");
const Template = require("./models/templateModel");

module.exports = class TemplateManager extends Manager {
  static async findAll() {
    return await this.executeQuery(Template, this.queries.findAll);
  }

  static async find({ id }) {
    return await this.executeQuery(Template, this.queries.find, [id]);
  }

  static async create(params) {
    return await this.executeQuery(Template, this.queries.insert, [params]);
  }

  static async update({ column1, column2 }, { id }) {
    const params = [{ column1, column2 }, { where: { id } }];
    return await this.executeQuery(Template, this.queries.update, params);
  }

  static async delete({ id }) {
    const params = { where: { id } };
    return await this.executeQuery(Template, this.queries.delete, [params]);
  }
};

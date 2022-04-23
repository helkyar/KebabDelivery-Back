const Sequelize = require("sequelize");

module.exports = class Manager {
  static clientParams = {
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    name: process.env.DBNAME,
    pswd: process.env.DBPSWD,
    port: process.env.DBPORT,
    dialect: "postgres",
  };

  static queries = {
    insert: "create",
    find: "findByPk",
    findAll: "findAll",
    findName: "findOne",
    update: "update",
    delete: "destroy",
  };

  static connect() {
    const { name, user, pswd, host, dialect } = this.clientParams;
    return new Sequelize(name, user, pswd, { host, dialect });
  }

  static async executeQuery(model, query, params) {
<<<<<<< HEAD
    await model.sync({ alter: true });
=======
    // (!) Erase once all models are definitive
    await model.sync({ alter: true });

>>>>>>> 1c1f7ec6b42c0a8a4bc1b15ddf71f9888bf9999f
    const sequelize = await this.connect();
    return await sequelize
      .sync()
      .then(async () =>
        query === this.queries.findAll
          ? await model[query]()
          : await model[query](...params)
      )
      // (!) Not all res have a get method (delelete, update)
      .then((res) => [res?.get({ plain: true })])
      .catch((error) => {
        console.log("Query Error: ", query, error);
        return null;
      });
  }
};

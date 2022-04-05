module.exports = class Template {
  #id;
  #column1;
  #column2;

  constructor({ id, column1, column2 }) {
    this.#id = id;
    this.#column1 = column1;
    this.#column2 = column2;
  }

  getObject() {
    return {
      id: this.#id,
      column1: this.#column1,
      column2: this.#column2,
    };
  }
};

// const { exception } = require("console");

module.exports = class ErrorException {
  constructor(errorMessage, args) {
    // super(err);
    this.error = errorMessage;
    for (const key in args) {
      if (key !== "error") {
        this[key] = args[key];
      }
    }
  }
};

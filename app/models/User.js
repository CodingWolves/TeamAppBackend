class User {
  constructor(details) {
    if (!details) details = {};
    this.email = details.email;
    this.name = details.name;
    this.password = details.password;
    this.degree = details.degree;
    this.institution = details.institution;
    this.image = details.image;
    this.interested = details.interested;
  }
}

module.exports.User = User;

class Group {
  constructor(id) {
    this.id = id;
    this.name = "";
    this.course = null;
    this.subject = "";
    this.studyTogether = false;

    this.where = "";
    this.institution = "";
    this.participantsNumber = 0;
    this.description = "";

    this.timeRanges = [];
    this.howLong = "";
    this.ownerId = "";
  }
}

module.exports.Group = Group;

class Group {
  constructor(id, name, courses, subject, studyTogether, where, institution, participantsNumber, description, timeRanges, howLong, ownerId) {
    this.id = id;
    this.name = name;
    this.course = courses;
    this.subject = subject;
    this.studyTogether = studyTogether;

    this.where = where;
    this.institution = institution;
    this.participantsNumber = participantsNumber;
    this.description = description;

    this.timeRanges = timeRanges;
    this.howLong = howLong;
    this.ownerId = ownerId;
  }
}

module.exports.Group = Group;

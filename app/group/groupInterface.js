class GroupInterface {
  constructor() {
    this.id = 0;
    this.subjectType = [];
    this.subject = "";
    this.institution = "";
    this.studyTogether = false;
    this.where = "";
    this.timeRanges = [];
    this.howLong = "";
    this.numberOfParticipants = 0;
    this.description = "";
    this.ownerId = 0;
	}
}

module.exports = GroupInterface;

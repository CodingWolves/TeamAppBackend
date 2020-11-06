const Joi = require("joi");
const {Group} = require("../models/Group.js");

/**
 *
 * @param {Group} group
 */
module.exports.addGroupValidation = (group) => {
  var schema = Joi.object({
    id: Joi.optional(),
    subjectType: Joi.optional(),
    subject: Joi.optional(),
    institution: Joi.optional(),
    studyTogether: Joi.optional(),
    where: Joi.optional(),
    timeRanges: Joi.optional(),
    howLong: Joi.optional(),
    numberOfParticipants: Joi.optional(),
    description: Joi.optional(),
    owner: Joi.optional(),
  });

  return schema.validate(group);
};

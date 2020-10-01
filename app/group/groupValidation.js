const Joi = require("joi");
const groupInterface = require("./GroupInterface.js");

/**
 *
 * @param {groupInterface} group
 */
module.exports.addGroupValidation = (group) => {
  var schema = Joi.object({
    subjectType: Joi.object().optional(),
    subject: Joi.object().optional(),
    institution: Joi.object().optional(),
    studyTogether: Joi.object().optional(),
    where: Joi.object().optional(),
    timeRanges: Joi.object().optional(),
    howLong: Joi.object().optional(),
    numberOfParticipants: Joi.object().optional(),
    description: Joi.object().optional(),
    owner: Joi.object().optional(),
  });

  return schema.validate(group);
};

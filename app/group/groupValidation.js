const Joi = require("joi");

module.exports.addGroupValidation = (group) => {
  var schema = Joi.object({
    name: Joi.string().min(3),
    leader: Joi.string().strip(),
		subject: Joi.string(),
  });

  return schema.validate(group);
};

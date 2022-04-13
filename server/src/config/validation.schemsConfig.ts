const Joi = require('joi');
/**
 * Envs validation schema
 * @returns object typeof joi object
 */
export const createValidationSchema = () =>
    Joi.object({
    PORT: Joi.number().required().messages({
        'string.base': `"PORT" should be a type of 'text'`,
        'string.empty': `"PORT" cannot be an empty field`,
        'string.min': `"PORT" should have a minimum length of {#limit}`,
        'any.required': `"PORT" is a required field`
    }),
    DB_USER: Joi.string().required(),
    DB_PASS: Joi.string().required(),
    DB_NAME: Joi.string().required(),
    DB_HOST: Joi.string().required(),
  });

const Joi = require('joi');

const { createUserSchema, updateUserSchema } = require('../schemas/user.schema');
const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const phone = Joi.string().max(10);
const email = Joi.string().email();
const password = Joi.string();
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: createUserSchema
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  updateUserSchema
});

const getCustomerSchema = Joi.object({
  id: id.required()
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };
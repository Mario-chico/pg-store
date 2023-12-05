const express = require('express');
const router = express.Router();

const CustomerService = require('../services/customers.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('../schemas/customers.schema');

const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.json(customers);
  } catch (error) {
    next(error)
  }
});

router.get('/:id', validatorHandler(getCustomerSchema, 'params'), async (req, res, next) => {
  try {
    const { id  } = req.params;
    const customers = await service.findOne(id);
    res.json(customers);
  } catch (error) {
    next(error)
  }
});

router.post('/', validatorHandler(createCustomerSchema, 'body'), async (req, res, next) => {
  try {
    const body = req.body;
    const newcustomer = await service.create(body);
    res.status(201).json(newcustomer);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validatorHandler(getCustomerSchema, 'params'), validatorHandler(updateCustomerSchema, 'body'), async (req, res, netx) => {
  try {
    const { id } = req.params;
    const body = req.body;
    res.status(201).json(await service.update(id, body));
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', validatorHandler(getCustomerSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    res.status(201).json(await service.delete(id));
    
  } catch (error) {
    next(error);
  }
});

module.exports = router;
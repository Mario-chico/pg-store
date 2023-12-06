const express = require('express');

const router = express.Router();

const validatorHandler = require('../middlewares/validator.handler');
const { createOrderSchema, getOrderSchema, addItemSchema } = require('../schemas/order.schema');

const OrderService = require('../services/order.service');
const service = new OrderService();

router.get('/', async (req, res, next) => {
  try {
    const rta = await service.find();
    res.status(200).json(rta);
  } catch (error) {
    next(error)
  }
});
router.get('/:id',validatorHandler(getOrderSchema, 'params'), async (req, res, next) => {
  try {
    const {id} = req.params;
    const rta = await service.findOne(id);
    res.status(200).json(rta);
  } catch (error) {
    next(error)
  }
});

router.post('/',validatorHandler(createOrderSchema, 'body'), async (req,res,next) => {
  try {
    const body = req.body;
    const newOrder = await service.create(body);
    res.status(201).json(newOrder);
  } catch (error) {
    next(error)
  }
});
router.post('/add-item',validatorHandler(addItemSchema, 'body'), async (req,res,next) => {
  try {
    const body = req.body;
    const newItem = await service.addItem(body);
    res.status(201).json(newItem);
  } catch (error) {
    next(error)
  }
});

module.exports = router;

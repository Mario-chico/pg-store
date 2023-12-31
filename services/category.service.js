const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CategoryService {

  constructor(){
  }

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    return await models.Category.findAll();
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products']
    });
    if(!category){
      throw boom.notFound('No existe tal categoria');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes)
    return rta;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id }
  }

}

module.exports = CategoryService;

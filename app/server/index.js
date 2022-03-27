const express = require('express');


const homeRouter = require('../routes/home.js');
const testRouter = require('../routes/test/test.js');
const productsRouter = require('../routes/products.js');
const usersRouter = require('../routes/users.js');
const categoriesRouter = require('../routes/categories.js');

function routersApi(app) {
  const router = express.Router()

  app.use('/api/v1', router)

  router.use('/home', homeRouter)
  router.use('/test', testRouter)
  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)
}

module.exports = routersApi

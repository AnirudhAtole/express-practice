const path = require('path');

const express = require('express');

const produtsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', produtsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', produtsController.postAddProduct);

module.exports = router;


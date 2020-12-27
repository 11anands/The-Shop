// ================= IMPORT =================
// Importing Core Node Modules
const path = require('path');

// Importing Third Party Modules
const express = require('express');

// Importing Project Files
const rootDir = require('../util/path');
const productController = require('../controllers/products');

// ================= CODE =================
// Initializing
const router = express.Router();


// Routing
// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

// Exporting 
exports.routes = router;

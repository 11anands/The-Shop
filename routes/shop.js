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
router.get('/', productController.getProducts);

// Exporting
module.exports = router;

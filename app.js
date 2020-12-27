// ================= IMPORT =================
// Importing Core Node Modules
const path = require('path');

// Importing Third Party Modules
const express = require('express');
const bodyParser = require('body-parser');

// Importing the Router Files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

// ================= CODE =================

// Initializing
const app = express();

// Setting up the view engine => EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Initializing the Router Files
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

// Setup for Error Message
app.use(errorController.get404);

// Create and Running the Server
app.listen(3000);

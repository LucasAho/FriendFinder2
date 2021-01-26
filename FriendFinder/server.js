// ==============================================================================
// DEPENDENCIES
// ==============================================================================
const express = require("express");

// Requiring our models for syncing
var db = require("./app/models");


// ==============================================================================
// EXPRESS CONFIG
// ==============================================================================

//Notifies node of created server
const app = express();

//Initial port
const PORT = process.env.PORT || 8080

//Init expresss for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));


// ================================================================================
// ROUTER
// ================================================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});


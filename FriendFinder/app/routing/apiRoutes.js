// ==============================================================================
// DEPENDENCIES
// ==============================================================================
const friendsData = require("../data/friends");
var db = require("./../models");
const dataController = require("../controllers/dataController");
// ======================================
// ROUTING
// ======================================
module.exports = function (app) {

    // GET route for getting all of the todos
    app.get("/api/surveyData", function (req, res) {

    });

    // POST route for saving a new todo. You can create a todo using the data on req.body
    app.post("/api/surveyData", function (req, res) {

    });

    // DELETE route for deleting surveyData. You can access the todo's id in req.params.id
    app.delete("/api/surveyData/:id", function (req, res) {

    });

    // PUT route for updating surveyData. The updated todo will be available in req.body
    app.put("/api/surveyData", function (req, res) {

    });
};





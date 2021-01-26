// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var path = require("path");

// ======================================
// ROUTING
// ======================================
module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //Survey page
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}

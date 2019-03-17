// ===============================================================================
// ROUTING
// ===============================================================================
var path = require("path");

//define here to avoid scope issues
var friends = [
    {
        name: "obiwankenobi",
        photo: " ",
        scores: []
    },
];



module.exports = function (app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    // Routes you to the JSON contained in the express server for the reserved tables

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });



    // Create New Characters - takes in JSON input
    app.post("/api/", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newCustomer = req.body;

        if (customers.length < 5) {
            // Using a RegEx Pattern to remove spaces from newCharacter
            // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
            // newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

            console.log(newCustomer.name + "is seated at a table.");

            customers.push(newCustomer);

            res.json(newCustomer);

        } else if (customers.length > 4) {
            console.log(newCustomer.name + "is on the waitlist");

            waitlist.push(newCustomer);

            res.json(newCustomer);
        }

    });

};

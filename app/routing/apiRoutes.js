// // ===============================================================================
// // ROUTING
// // ===============================================================================
// var path = require("path");

// //define here to avoid scope issues
// var friends = [
//     {
//         name: "obiwankenobi",
//         photo: " ",
//         scores: []
//     },
// ];

// module.exports = function (app) {

//     // API GET Requests
//     // Below code handles when users "visit" a page.
//     // In each of the below cases when a user visits a link
//     // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//     // ---------------------------------------------------------------------------
//     // Routes you to the JSON contained in the express server for the reserved tables

//     app.get("/api/friends", function (req, res) {
//         return res.json(friends);
//     });

//     // Create New Characters - takes in JSON input
//     app.post("/api/", function (req, res) {
//         // req.body hosts is equal to the JSON post sent from the user
//         // This works because of our body parsing middleware
//         var newCustomer = req.body;

//         if (customers.length < 5) {
//             // Using a RegEx Pattern to remove spaces from newCharacter
//             // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//             // newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

//             console.log(newCustomer.name + "is seated at a table.");

//             customers.push(newCustomer);

//             res.json(newCustomer);

//         } else if (customers.length > 4) {
//             console.log(newCustomer.name + "is on the waitlist");

//             waitlist.push(newCustomer);

//             res.json(newCustomer);
//         }

//     });

// };




///.........................


// ===============================================================================
// ROUTING
// ===============================================================================
var path = require("path");

//define here to avoid scope issues
var friends = [
    {
        route: "obiwankenobi",
        name: "Obi Wan Kenobi",
        photo: "https://cdn.vox-cdn.com/thumbor/YP3HK6voEMeWojSG9aGdJQMYlYY=/0x0:1300x650/1200x800/filters:focal(537x203:745x411)/cdn.vox-cdn.com/uploads/chorus_image/image/56242795/Obi_Wan.0.jpg",
        scores: [3, 3, 4, 5, 1, 2, 1, 3, 4, 5]
    },
];

module.exports = function (app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.get("/api/survey", function (req, res) {
        return res.json(friends);
    });

    // Create New Friend- takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware

        // Using a RegEx Pattern to remove spaces from newCharacter
        var routeName = newFriend;
        //.replace(/\s+/g, "").toLowerCase();
        console.log("route: " + routeName);
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

        //can get rid of this since the body is assigned below in the new variable
        // var newFriend = req.body;

        //previous examples have used a constructor, but you don't have this setup
        var newFriend = {
            route: routeName,
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        };
        //not sure what this will do if I just keep it here...

    
    res.status(204).end();
    console.log(newFriend.name + " has submitted their survey!");

    friends.push(newFriend);

    res.json(newFriend);

});

};

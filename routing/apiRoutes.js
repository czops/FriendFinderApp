// ===============================================================================
// ROUTING
// ===============================================================================
var path = require("path");

//define here to avoid scope issues
var friends = [
    {
        name: "obiwankenobi",
        photo: "https://cdn.vox-cdn.com/thumbor/YP3HK6voEMeWojSG9aGdJQMYlYY=/0x0:1300x650/1200x800/filters:focal(537x203:745x411)/cdn.vox-cdn.com/uploads/chorus_image/image/56242795/Obi_Wan.0.jpg",
        scores: [3,3,4,5,1,2,1,3,4,5]
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
        var newFriend = req.body;

            // Using a RegEx Pattern to remove spaces from newCharacter
            // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
            // newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

            console.log(newFriend.name + "Has submitted their survey!");

            friends.push(newFriend);

            res.json(newFriend);


    });

};

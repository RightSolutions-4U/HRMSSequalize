const express = require("express");
const router = express.Router();
const Country = require("../controllers/CountryCont.js")
// //router.get('/country', findAllCountry);
// Home page route.
// router.get("/country", function (req, res) {
//   res.send("Wiki home page");
// });

// router.route('/country').get(function (req, res) {
//     console.log("aaaa");
//     Country.findAllCountry({}, function (err, result) {
//         res.status(200).send({ result });
//     })
// });
router.get("/country", Country.findAllCountry);

   

router.route('/country').post(function (req, res) {
    Country.createCountry({}, function (err, result) {
        res.status(200).send({ result });
    })
});


module.exports = router;

// // Import express
// const express = require("express");
// // Import Org Controller
// // const Country = db.Country;
// const {findAllCountry} = require("../controllers/CountryCont.js")

// const router = express.Router();


// //router.get('/country', findAllCountry);
// router.route('/country').get(function (req, res) {
//     country.findAllCountry({}, function (err, result) {
//         res.status(200).send({ result });
//     })
// });
// // router.post('/Country', CountryCont.createCountry);
// // module.exports = router;
// exports.router = router;
// // export default router;
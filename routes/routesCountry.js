const Country = require("../models/country.js");

module.exports = () => {
    const country = require("../controllers/CountryCont.js");
  
    var router = require("express").Router();
  
    // // Create a new Tutorial
    // router.post("/api/country", Country.create);
    router.post('/country', function(req, res){
      country.createCountry
    });
  
    // Retrieve all Tutorials
    // router.get("/api/country", Country.findAll);
    router.route('/country').get(function (req, res) {
      country.findAllCountry({}, function (err, result) {
          res.status(200).send({ result });
      })
  });

    // router.get('/', function(req, res){
    //   Controller.findAll
    // });
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/country', router);
  };


// // Import express
// const express = require("express");
// // Import Org Controller
// // const Country = db.Country;
// const {findAllCountry} = require("../controllers/CountryCont.js")

// const router = express.Router();


// router.get('/Country', findAllCountry);
// // router.post('/Country', CountryCont.createCountry);
// // module.exports = router;
// exports.router = router;
// // export default router;
const db = require("../models");
const Country = db.Country;
const CountryService = require("../services/country-services");

let countryService = new CountryService();
exports.createCountry = (country) => {
    const result = async() => {
        const data = await CountryService.createCountry(country);
    };
        return result;
    };

    // exports.findAllCountry = (req, res) => {
    //     res.send("NOT IMPLEMENTED: Site Home Page");
    //   };

    async function findAllCountry ( req, res ) {
        try {
          console.log("in controller");
          const data = await countryService.findAllCountry();
          return res.send( data );
        } catch ( err ) {
          res.status( 500 ).send( err );
        }
      }  ;

      module.exports  = findAllCountry;
//   exports.findAllCountry = () => {
  
//     const result = async() => {
//         try {
//         console.log("in find all");
//         const data = await countryService.findAllCountry().then(console.log(data));
//         return(data);
//         }
//         catch(exception)
//         {
//             console.log(exception)
//         }
//     }
    
//   };

//const Country = require("../models/index")['country'];
// const Country = require("../models/index");
const Country = require('../models').country // access to your models

class CountryService { 
    
        async createCountry(country){
            try {
                return await Country.create(country);
            }
            catch(exception){
                console.log(exception);
            }
        }
        async findAllCountry(){
            try {
                console.log("I am here");
                return await Country.findAll();
            }
            catch(exception){
                console.log(exception);
            }
        }
}

module.exports = CountryService;
//result();
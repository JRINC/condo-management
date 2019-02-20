var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var apartmentSchema = new Schema({
    number: String,
    floor: String,
    aliquot: Number
});

var Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var apartmentSchema = new Schema({
    number: String,
    floor: String,
    aliquot: Number
},{collection:'apartment'});

var Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;
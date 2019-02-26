var mongoose = require('mongoose');
var person = require('./person');
var apartment = require('./apartment');

var Schema = mongoose.Schema;

var peopleApartmentSchema = new Schema({
	peopleid:{type:Schema.Types.ObjectId,ref:'People',required:true},
	apartmentid:{type:Schema.Types.ObjectId,ref:'Apartment',required:true}
},{collection:'peopleapartment'});

var PeopleApartment = mongoose.model('PeopleApartment', peopleApartmentSchema);

module.exports = PeopleApartment;




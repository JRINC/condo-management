var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var condominiumSchema = new Schema({
    name: String,
},{collection:'condominium'});

var Condominium = mongoose.model('Condominium', condominiumSchema);

module.exports = Condominium;




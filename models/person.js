var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    ci: String,
    phoneNumber1: String,
    phoneNumber2: String
},{collection:'people'});

personSchema.virtual('fullName').get(function () {
    return this.name.first + ' ' + this.name.last;
  }).set(function(v) {
    this.name.first = v.substr(0, v.indexOf(' '));
    this.name.last = v.substr(v.indexOf(' ') + 1);
  });

personSchema.set('toJSON', { virtuals: true });

var Person = mongoose.model('People', personSchema);

// var luis = new Person({ fullName: "Luis Hernandez"});
// console.log(luis.toObject());
// console.log(luis.toJSON());
// console.log(luis.fullName);
// console.log(luis.name.first);
// console.log(luis.name.last);

module.exports = Person;
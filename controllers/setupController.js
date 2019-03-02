var Condominium = require('../models/condominium');
var People = require('../models/person');
var Apartment = require('../models/apartment');
var PeopleApartment = require('../models/people_apartment');

module.exports = function(app) {
    
   app.get('/api/setupCondominiums', function(req, res) {
       
       // seed database
       var starterCondominiums = [
           {
               name: 'Nabor'
           }
       ];
       Condominium.create(starterCondominiums, function(err, results) {
           
           if (err)
               console.log(err);
           
           res.send(results);
       }); 
   });
    
   app.get('/api/setupPeople', function(req, res) {
       
       // seed database
       var starterPeople = [
           {
               fullName: 'Luis Hernandez',
               ci: '15666266',
               phoneNumber1: '584125458855',
               phoneNumber2: '589996665588',
               email: 'luis@teste.com'
           },
           {
               fullName: 'Giova Hernandez',
               ci: '16777888',
               phoneNumber1: '585555556699',
               phoneNumber2: '586699555555',
               email: 'giova@teste.com'
           },
           {
               fullName: 'Carmen Quintero',
               ci: '1225225',
               phoneNumber1: '588585859595',
               phoneNumber2: '585982199998',
               email: 'carmen@teste.com'
           }
       ];
       People.create(starterPeople, function(err, results) {
           
           if (err)
               console.log(err);
           
           res.send(results);
       }); 
   });

   app.get('/api/setupApartments', function(req, res) {
       
       // seed database
       var starterApartments = [
           {
               number: '01',
               floor: 'PB',
               aliquot: 3.8547
           },
           {
               number: '02',
               floor: 'PB',
               aliquot: 4.3478
           }
       ];
       Apartment.create(starterApartments, function(err, results) {
           
           if (err)
               console.log(err);
           
           res.send(results);
       }); 
   });

   app.get('/api/setupPeopleApartments', function(req, res) {
       
       // seed database
       var starterPeopleApartments = [
           {
               peopleid: '5c749e33c4ff930b374572a1',
               apartmentid: '5c749e40c4ff930b374572a2'
           },
           {
               peopleid: '5c749e33c4ff930b374572a0',
               apartmentid: '5c749e40c4ff930b374572a3'
           },
           {
               peopleid: '5c749e33c4ff930b3745729f',
               apartmentid: '5c749e40c4ff930b374572a3'
           }
       ];
       PeopleApartment.create(starterPeopleApartments, function(err, results) {
           
           if (err)
               console.log(err);
           
           res.send(results);
       }); 
   });
    
}
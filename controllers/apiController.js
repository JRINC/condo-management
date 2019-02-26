var Condominium = require('../models/condominium');

var bodyParser = require('body-parser');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/condominium/:id', function(req, res) {
       
       Condominium.findById({ _id: req.params.id }, function(err, condo) {
           if (err) throw err;
           
           res.send(condo.name);
       });
        
    });

}
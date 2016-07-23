var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subMedicine = new Schema({ 
            medid   : String,
            name    : String,
            qty     : String,
            totalcost : Number});

var schema = new Schema({
    patientid             : String,
    medicines       : [ subMedicine ],
    newmedicines    : [ subMedicine ]
});

module.exports = mongoose.model('Med2patients', schema);


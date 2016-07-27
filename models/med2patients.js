var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subMedicine = new Schema({ 
            medid   : String,
            name    : String,
            qty     : String,
            totalcost : Number});


var schema = new Schema({    
    url             : String,
    patientid       : String,
    name            : String,
    height          : Number,
    weight          : Number,
    profession      : String,    	    
    medicines       : [ subMedicine ],
    medtotalcost    : Number,
    newmedicines    : [ subMedicine ],
    newmedtotalcost : Number
    },
    {
        timestamps : true
    }
);

module.exports = mongoose.model('Actualmed2patients', schema);



var schema = new Schema({
    url             : String,
    patientid       : String,
    name            : String,
    height          : Number,
    weight          : Number,
    profession      : String,
    medicines       : [ subMedicine ],
    newmedicines    : [ subMedicine ]
});

module.exports = mongoose.model('Med2patients', schema);

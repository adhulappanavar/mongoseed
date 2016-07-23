//var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//ar cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Patients = require('./models/patients');
var Med2patients = require('./models/med2patients');

mongoose.connect('localhost:27017/advantage');

var patients = new Array();

//Mongo commands
 Patients.find()
        .exec(function(err, docs) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            patients = docs;
            //console.log(patients);
            for(var i=0;i<patients.length;i++)
{
        var med2patients = new Med2patients({
            patientid   : patients[i]._id,
            medicines : [],
            newmedicines : [],
           });
        //console.log ("med2patient record to be saved ...", med2patients);
        med2patients.save(function(err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
           // console.log(result);
        });
}
        });
//console.log(patients);


    Med2patients.findOne({"patientid" : "5789ee5c4b779cc738abf18a"})
        .exec(function(err, docs) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            console.log("Finding the patients", docs);
        });

//module.exports = app;
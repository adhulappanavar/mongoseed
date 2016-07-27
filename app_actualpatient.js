//var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//ar cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Actualpatients = require('./models/actualpatients');
var Med2patients = require('./models/med2patients');

//mongoose.connect('localhost:27017/advantage');
var opts = {"server" : "localhost", "port" :"27017", "db" : "aniladvantagedb//"};
//core.connect = function connect(opts) {
  mongoose.Promise = global.Promise;
  mongoose.connect(`mongodb://${opts.server}:${opts.port}/${opts.db}`);
//  return mongoose.connection;
//};


var actualpatients = new Array();

//Mongo commands
 Actualpatients.find()
        .exec(function(err, docs) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            actualpatients = docs;
            console.log(" List of patients ... ", actualpatients);


            for(var i=0;i<actualpatients.length;i++)
{
        var med2patients = new Med2patients({
            url : actualpatients[i].url,
            patientid   : actualpatients[i]._id,
            name : actualpatients[i].name,
            registrationNumber : actualpatients[i].registrationNumber,
            dob : actualpatients[i].dob,
            dateOfAdmission : actualpatients[i].dateOfAdmission,
            height : actualpatients[i].height,
            weight : actualpatients[i].weight,
            profession : actualpatients[i].profession,
            medicines : [],
            medtotalcost : 0,
            newmedicines : [],
            newmedtotalcost : 0
           });
        console.log ("med2patient record to be saved ...", med2patients);
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


    Med2patients.findOne({"patientid" : "5789ee5c4b779cc738abf191"})
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
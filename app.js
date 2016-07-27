//var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//ar cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Patients = require('./models/patients');
var Med2patients = require('./models/med2patients');

//mongoose.connect('localhost:27017/advantage');
var opts = {"server" : "localhost", "port" :"27017", "db" : "aniladvantagedb//"};
//core.connect = function connect(opts) {
  mongoose.Promise = global.Promise;
  mongoose.connect(`mongodb://${opts.server}:${opts.port}/${opts.db}`);
//  return mongoose.connection;
//};


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
            console.log(" List of patients ... ", patients);


            for(var i=0;i<patients.length;i++)
{
        var med2patients = new Med2patients({
            url : patients[i].url,
            patientid   : patients[i]._id,
            name : patients[i].name,
            height : patients[i].height,
            weight : patients[i].weight,
            profession : patients[i].profession,
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
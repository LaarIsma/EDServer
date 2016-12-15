'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Company Schema
 */
var CompanySchema = new Schema({
  name: String,
  projects:{
    name: String,
    milestones:String  
  },
  users:String    
});
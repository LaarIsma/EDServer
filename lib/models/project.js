'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Project Schema
 */
var ProjectSchema = new Schema({
  name: String,
  company_id:String,    
  users_id:{
    id_num:String,  
    role: {
        type: String,
        default: 'user'
    }
  } 
});
mongoose.model('Project', ProjectSchema);
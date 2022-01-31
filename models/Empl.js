const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EmpSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    departement:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }


})

mongoose.model('emp', EmpSchema)
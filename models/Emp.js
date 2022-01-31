const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EmpSchema = new Schema({
    EmpFName:{
        type:String,
        required:true
    },
    EmpLName:{
        type:String,
        required:true
    },
    empDep:{
        type:String,
        required:true
    },
    empStart:{
        type:Date,
        required:true
    },
    empTitle:{
        type:String,
        required:true
    },
    empSal:{
        type:Number,
        required:true
    }


})

mongoose.model('emp', EmpSchema)
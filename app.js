const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())



mongoose.connect('mongodb://localhost:27017/Week3Lab',{
    useNewURLParser:true
}).then(()=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err)
})

require('./models/Empl')

var Empl = mongoose.model('emp')


app.post('/saveEmpEntry', (req,res)=>{
    console.log(req.body)

    //create new entry for Emp
    new Empl(req.body).save().then(()=>{
        console.log("Data Saved")
        res.redirect("view.html")
    })
})

 app.get('/getData', (req,res)=>{
     Empl.find().then((emp)=>{
         res.json({emp})
     })
 })

 app.post('/deleteEmp', (req,res)=>{
    console.log("Employee deleted " + req.body._id + " " + req.body.EmpFName+ " " +req.body.EmpLName)
    Empl.findByIdAndDelete(req.body._id).exec()
    return res.redirect('/delete.html');
    
})


app.post('/updateEmpEntry', (req,res)=>{
   
    
    Emp.updateOne(req.body.EmpFName,req.body.EmpLName,req.body.empDep,req.body.empStart,req.body.empTitle,req.body.empSal, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
})


app.use(express.static(__dirname+"/views"))
app.listen(port,()=>{
    console.log('listening on port 3000')
})
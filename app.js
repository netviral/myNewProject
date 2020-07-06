const express=require("express");
const app=express();
const bodyParser=require('body-parser');

app.listen(3000);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

var tasks=[];

app.get("/",function(req,res){
   var date=new Date();
   options={
     day:"numeric",
     weekday:"long",
     month:"long",
   }
   var todaysDate=date.toLocaleDateString("en-US",options);
  res.render("index",{todaysDate:todaysDate,tasks:tasks});
});

app.post("/addItem",function(req,res){
var newItem=req.body.newItem;
tasks.push(newItem);
res.redirect("/");
});

app.post("/removeItem",function(req,res){
  var removedItemNumber= req.body.item;
     tasks.splice(removedItemNumber,1);
     res.redirect("/");
});

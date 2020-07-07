const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.listen(process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var tasks = [];
var worktasks = [];

app.get("/", function(req, res) {
  var date = new Date();
  options = {
    day: "numeric",
    weekday: "long",
    month: "long"
  }
  var todaysDate = date.toLocaleDateString("en-US", options);
  res.render("index", {
    listTitle: todaysDate,
    tasks: tasks
  });
});


app.get("/work", function(req, res) {
  res.render("index", {
    listTitle: "Work",
    tasks: worktasks
  });
});

app.post("/addItem", function(req, res) {
  var newItem = req.body.newItem;
  console.log(req.body);

  if (req.body.button ==="Work"){
    worktasks.push(newItem);
    res.redirect("/work");
  } else {
    tasks.push(newItem);
    res.redirect("/");
  }
});

app.post("/removeItem", function(req, res) {
  var removedItemNumber = req.body.item;
  if(req.body.rm=="Work"){
    worktasks.splice(removedItemNumber,1);
   res.redirect("/work");
  }
  else{
  tasks.splice(removedItemNumber, 1);
  res.redirect("/");
}

});

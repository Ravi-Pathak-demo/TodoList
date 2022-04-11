const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = ["Attack On Titan" , "Demon Slayer" , "Love is war"];
let studyItems = [];

app.get("/",function(req,res)
{
    let day = date.getDate();
    res.render("list",{listTitle : day, newItems : items});
    // var currentDay = today.getDay();
    // var day = "";
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("Error CurrentDay is "+ currentDay);
    //         break;
    // }
});

app.post("/",function(req,res)
{
    // console.log(req.body);
    var item = req.body.newItem;
    if(req.body.list === "Study")
    {
        studyItems.push(item);
        res.redirect("/study");
    }
    else
    {
        items.push(item);
    // console.log(item);
        res.redirect("/");
    }
});

app.get("/study",function(req,res)
{
    res.render("list",{listTitle : "Study Items", newItems : studyItems});
});

app.post("/study",function(req,res){
    let item = req.body.newItem;
    studyItems.push(item);
    res.redirect("/study");
});

app.get("/about",function(req,res)
{
    res.render("about");
});

app.listen(3000,function()
{
    console.log("server running");
});
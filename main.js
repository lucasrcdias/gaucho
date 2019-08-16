"use strict";

const ejs=require('ejs');
const fs=require('fs');

const data={
    version: "0.6.1",
    features: require('./features.json')
}

ejs.renderFile("./templates/index.ejs", data ,{}, (err, str)=>{
    if(err) throw err;
    fs.writeFileSync("index.html", str)
});

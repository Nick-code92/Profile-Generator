const generateHTML = require("./generateHTML");
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


var pdf = require('html-pdf');
var options = { format: 'Letter' };
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your gitHub Username?"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green","pink","blue","red"]

    },
    

];

inquirer
    .prompt(questions)
    .then(function({color,name}){
        const newPage = method.generateHTML(color)
        axios
        .get( `https://api.github.com/users/${name}`)
        .then(({data})=> console.log(data))
        
    });
   
  




function writeToFile(fileName, data) {

}

function init() {

    init();}



//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
//   await page.pdf({path: 'hn.pdf', format: 'A4'});

//   await browser.close();
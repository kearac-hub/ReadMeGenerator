const inquirer = require("inquirer");
const fs = require('fs');

function inquirer(){[
    {type:"input",
    message:"What is your project called?",
    name:"projectName"},
    {type:"input",
    message:"Please describe your project.",
    name:"projectDescription"},
    {type:"input",
    message:"Please tell me your project's installation instructions."},
    {type:"input",
    message:"Please describe the projects usage.",
    name:"projectUsage"},
    {type:"input",
    message:"Please tell me who else contributed to this project.",
    name:"projectContributors"},
    {type:"list",
    message:"Please chose a license for the project.",
    name:"projectLicenses"},
    {type:"input",
    message:"What is your github user name?",
    name:"githubName"},
    {type:"input",
    message:"What is your email address?",
    name:"userEmail"}
]};
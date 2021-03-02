const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

var userPrompts = inquirer.prompt([
    {
        type: "input",
        name: "usersName",
        message: "Hello, what is your name?"
    },
    {
        type: "input",
        name: "bio",
        message: "Write a bio about the experience you have and the position you're looking for."
    },
    {
        type: "input",
        name: "linkedin",
        message: "Leave a link to your LinkedIn so people can connect with you!"
    },
    {
        type: "input",
        name: "github",
        message: "Leave a link to your GitHub so that people can see your past work!"
    },
    {
        type: "input",
        name: "userImage",
        message: "Lastly, how about you leave an image address so people can identify you?"
    }
]);
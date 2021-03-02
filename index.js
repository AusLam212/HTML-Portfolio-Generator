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
        name: "location",
        message: "Where are you from?"
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

userPrompts.then(res => {
    const { userName, location, bio, linkedin, github, userImage } = res.data;

    if (userImage = "") {
        userImage = "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
    }

    const userPortfolio = /*html*/ `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>MOCK HTML</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4" style="text-align: center;">${userName}</h1>
            </div>
          </div>
        <div class="container">
            <section id="content" class="row">
                <div class="col-sm-12 col-md-6">
                    <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="User Picture" style="width: 100%; height: auto;"/>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row" id="location">
                        <div class="col-12">
                            <p>From: <em>L${location}</em></p>
                        </div>
                    </div>
                    <div class="row" id="bio">
                        <div class="col-12">
                            <p>${bio}</p>
                        </div>
                    </div>
                    <div class="row" id="linkedin">
                        <div class="col-12">
                            <p>Connect with me on <a href=${linkedin}><strong>LinkedIn</strong></a></p>
                        </div>
                    </div>
                    <div class="row" id="github">
                        <div class="col-12">
                            <p>Check out my work on <a href=${github}><strong>GitHub</strong></a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </body>
    </html>`

    writeFileAsync("Portfolio.html", userPortfolio);

})
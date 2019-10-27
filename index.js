const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const html_gen = require("./generateHTML");

inquirer
.prompt([
    {
    type: "input",
    message: "What is your Github username?",
    name: "username"
    },
    {
        type: "list",
        message: "Which of the below listed is your favorite colour?",
        name: "colour",
        choices: [
          "green",
          "blue",
          "pink",
          "red"
        ]
      }
])
.then(function({username, colour}){
    console.log(`queryurl is https://api.github.com/users/${username}`);
    let queryURL = `https://api.github.com/users/${username}`;
    axios.get(queryURL).then(function(response) {
        console.log(`photo link: ${response.data.avatar_url}`);
        console.log(`Username: ${response.data.login}`);
        console.log(`User location via Google Maps: ${response.data.location}`);
        console.log(`User GitHub profile: ${response.data.html_url}`);
        console.log(`User blog: ${response.data.blog}`);
        console.log(`User bio: ${response.data.bio}`);
        console.log(`Number of public repos: ${response.data.public_repos}`);
        console.log(`Number of followers: ${response.data.followers}`);
        console.log(`Number of users following: ${response.data.following}`);

        console.log(`${response.data}`)
      });
})

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

init();
}

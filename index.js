const generateHTML = require("./generateHTML");
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer")
 var pdf = require('html-pdf');

var options = { format: 'Letter' };
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your gitHub Username?"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green", "pink", "blue", "red"]

    }
];

inquirer
    .prompt(questions)
    .then(function ({ color, username }) {
        // const newPage = method.generateHTML(color)

        axios
            .get(`https://api.github.com/users/${username}`)
            .then(({ data }) => {
                console.log(data)
                let name = data.name
                let imgSrc = data.avatar_url
                let blog = data.blog
                let repos = data.public_repos
                let followers = data.followers
                let following = data.following
                let bio = data.bio
                let gitHub = data.html_url
                let location = data.location
                axios.get(`https://api.github.com/users/${username}/starred`)
                    .then(({ data }) => {
                        let star = data.length
                        let html = generateHTML(color, name, imgSrc, bio, gitHub, blog, repos, followers, following, star, location)

                        pdf.create(html, options).toFile('./HTML.pdf', function (err, res) {
                            if (err) return console.log(err);
                            console.log(res);
                        });
                    })

            });

    });



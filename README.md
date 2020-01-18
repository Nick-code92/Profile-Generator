# Profile-Generator
AS A product manager I WANT a developer profile generator, SO THAT I can easily prepare reports for stakeholders.
The user will be prompted for a favorite color, which will be used as the background color for cards.
given the developer has a GitHub profile , WHEN prompted for the developer's GitHub username and favorite color, THEN a PDF profile is generated

## About 
The PDF will be populated with the following:
* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

###  Functional, deployed application.

* The application generates a PDF resume from the user provided GitHub profile.
* The generated resume includes a bio image from the user's GitHub profile.
* The generated resume includes the user's location and a link to their GitHub profile.
* The generated resume includes the number of: public repositories, followers, GitHub stars and following count.
* The background color of the generated PDF matches the color that the user provides.

[Gif](./porfile-genrater.gif)

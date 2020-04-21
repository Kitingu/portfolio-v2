---
title: 'The Joy of having Joi, The most complete javascript input validation library'
date: 2019-07-10
info: 'Input validation in express js applications using Joi'
tags: ['Input Validation']
image:
---

![joi](featured-image.png)
Users of an application are always happy when the app is working properly and serving its purpose. Most of the users use applications for their own benefit and sometimes they mistakenly input erroneous data. However, some users intentionally input erroneous data to break the application. Software developers put in a lot of work trying to make sure that user input is clean and valid. This process is commonly known as input validation. Joi, an NPM(node package manager)package for input validation makes the work easy and saves developers from trying to reinvent the wheel.

### How to use Joi

Joi is quick and easy to use. I made a Github repository to ease the process for the guys following this tutorial. clone the repository using the command below.

git clone https://github.com/Kitingu/joitutorial.git

Open the cloned folder with a code editor of your choice. the app should contain the code below.

The code above is just a simple express js application for creating and fetching users.

To run the application, run `npm install` on your terminal to install dependencies, then run `node app.js` this will run the application on port 5000 as specified.

Now back to Joi, the schema is used to validate the input provided by the user. The validator takes input from the user and compares it against the set constraints. The constraints may include:

string(): specifies that the input can be any characters used to represent text.

alphanum(): this specifies that input can only include alphabetical or numeric characters

min(3): this method sets the minimum number of characters to 3

max(30): this method sets the minimum number of characters to 3

required(): this method states that the input field must be provided.\`

If the user input does not meet the set constraints, the app throws an error depending on the type of validation.

Example: If the user provides an invalid email, Joi throws an error notifying the user that the given email address is not valid.

![invalid email address](https://cdn-images-1.medium.com/max/800/1*gLXO4U--o3V2ZBXp0M6vYA.png)
invalid email address

If the user does not provide a required field, the validator sends a message specifying that the given field is required, as demonstrated below.

![missing required field](https://cdn-images-1.medium.com/max/800/1*nsQRUHb-yW-VWVy8lmot4Q.png)
missing required field

The user in the example above didn’t provide the first name field which was marked as required. This results in the application throwing an error that the field is required.

If the user provides the correct input and Joi is satisfied, the post endpoint creates a user object and save to our local database.

![create user after input validation.](https://cdn-images-1.medium.com/max/800/1*olQYOO6YTWLGKF6KCam-qw.png)
create user after input validation.

The examples above are just a drop in the ocean in regards to what Joi input validator can do. The tool is very helpful when validating user input since it makes sure that, the data that goes to the database is clean. I would recommend Joi validator to any javascript developer out there for making input validation easier.


# Medical Check-in

## Overview

It's very important that every person is aware of the medical conditions
surrounding them. Individuals should acknowledge the health status in their
current state.

Medical Check-in is a web app that allows registered users to enter certain information
of themselves such as: their gender, their age, their state, and their ethnicity and to choose
a disease that they are most interested in. Using their information (specifically their state and ethnicity), the site will be able to return a database that represents a search history from other users. The site will then tell
them how many cases of their interested disease occur in their designated state. It will also tell them
the number of cases that were representative of their ethnicity.

The site will also have an about page regarding facts about some medical conditions that the
site uses and then a third page in which the site will ask the user if
they have a site that they may like and will give them the option to add the
site to be stored for other users to view. When the site is submitted, the site will be added to a database.

The site also contains a summary page which allows the users to see a summary of how many male and female users
have used the app and the specific ethnicity of each user. The site will begin with a log-in/registration page
in which the user will have to enter credentials in order to access the site.


## Data Model


The application will use given information in order to render an answer.
The application will also use databases to have helpful sites for users
to access and have the option to add a helpful site.

* users will input information to receive data about a certain medical condition
* the site will also have an about page regarding a mini description.


An Example User:

```javascript
{
  databases:  extracts information from the database in response to queries
}
```

An Example List with Embedded Items:

```javascript
{
  gender: "Male" or "Female"
  age: "Number",
  ethnicity: "Latino/Hispanic" or "Caucasian" or "Asian" or "African American"
  type of disease: [
    { name: "Diabetes"},
    { name: "Asthma"},
  ],
}
```

/registration - page where user can either register or log in to access home

/home/check-in - page for entering information

/data/ - page for showing specific data regarding information user entered

/about - page for showing mini descriptions of certain medical conditions

/add a site - page showing a place where user can add useful sites

/summary - page where user can look at summary of search history

1. as a registered user, I can put in information about my age, gender, state, and ethnicity
2. as a registered user, I can receive information about certain medical issues in my state
3. as a registered user, I can read more about certain medical conditions and look at charts
4. as a registered user, I can look at sites which could help me learn more about certain medical conditions
5. as a registered user, I can add a site to the list of given sites to help others read up more about medical conditions

## Research Topics
* (2 points) Using Bootstrap.js
    * Will use this for front-end component library
* (2 points) Using less
    * Will use as an extension to CSS
* (5 points) Using authentication through Passport
    * Will use this for new users login and registration

9 points total out of 8 required points


1. Bootstrap.js: http://getbootstrap.com/
2. less: http://lesscss.org/
3. authentication: https://foureyes.github.io/csci-ua.0480-fall2017-003/slides/16/auth.html#/

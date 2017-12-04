
# Medical Check-in

## Overview

#Because it was difficult to find specific datasets for cancers (medical health records are not usually released)
#Modified goal for project

It's very important that every person is aware of the medical conditions
surrounding them. There are certain datasets in which specific medical conditions
are expressed in states.

Medical Check-in is a web app that allows users to enter certain information
of themselves such as: their gender, their age, their state, and their ethnicity.
Using this information, the site will be able to tell you about certain medical conditions
that occur in their designated state. It may also tell them to what specific ethnicity it affects
the most.

The site will also have an about page regarding facts about some medical conditions that the
site uses and then a third page in which the site will give a few helpful sites
that can give them more information about certain medical conditions stored in a
database. There will also be an option in which the site will ask the user if
they have a site that they may like and will give them the option to add the
site in the list. When the site is submitted, the site will be added to the list
with the site thanking the user.


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
  ethnicity: "Latino" or "White" or "Asian" or "African American"
  type of medical condition: [
    { name: "Diabetes"},
    { name: "Asthma"},
  ],
}
```

/home/check-in - page for entering information

/check-in/ - page for showing specific data regarding information user entered

/about - page for showing mini descriptions of certain medical conditions

/useful sites - page showing a database of sites which users can access

/add a site - page where user can add a site to the database of useful sites


1. as non-registered user, I can put in information about my age, gender, state, and ethnicity
2. as non-registered user, I can receive information about certain medical issues in my state
3. as non-registered user, I can read more about certain medical conditions and look at charts
4. as non-registered user, I can look at sites which could help me learn more about certain medical conditions
5. as non-registered user, I can add a site to the list of given sites to help others read up more about medical conditions

## Research Topics
* (2 points) Using Bootstrap.js
    * Will use this for front-end component library
* (2 points) Using less
    * Will use as an extension to CSS
* (3 points) nconf
    * Will use this for configuration management

10 points total out of 8 required points


1. Bootstrap.js: http://getbootstrap.com/
2. less: http://lesscss.org/
3. nconf:https://github.com/indexzero/nconf

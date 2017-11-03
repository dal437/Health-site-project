(___TODO__: your project name_)

# Medical Check-in

## Overview

(___TODO__: a brief one or two paragraph, high-level description of your project_)

It's very important that every person has a yearly medical check-up. However
several people believe that as long as they are feeling fine, then they are
completely healthy. Individuals who have a family history of a certain
disease, especially in cancer, have a higher probability of receiving
the genes that express that disease.

Medical Check-in is a web app that allows users to enter certain information
of themselves such as: their gender, their age, and their last medical check-up.
Using this information, the site will be able to tell you whether it's time
for a medical check-in or if they are fine to wait, but that they should definitely
remember to have a medical check-in. The site will focus on specific types
of cancers where there is more information regarding the age when certain
individuals receive this illness.

The site will also have an about page regarding facts about each cancer that the
site uses and then a third page in which the site will give a few helpful sites
that can give them more information about certain cancers stored in a
database. There will also be an option in which the site will ask the user if
they have a site that they may like and will give them the option to add the
site in the list. When the site is submitted, the site will be added to the list
with the site thanking the user.


## Data Model

(___TODO__: a description of your application's data and their relationships to each other_)

The application will use given information in order to render an answer.
The application will also use databases to have helpful sites for users
to access and have the option to add a helpful site.

* users will input information to receive data about a certain cancer
* the site will also have an about page regarding a mini description.

(___TODO__: sample documents_)

An Example User:

```javascript
{
  databases: // extracts information from the database in response to queries
}
```

An Example List with Embedded Items:

```javascript
{
  gender: "Male" or "Female"
  age: "Number",
  last medical check-in: "Date"
  type of cancer: [
    { name: "lung cancer"},
    { name: "colon cancer"},
  ],
}
```


## [Link to Commented First Draft Schema](db.js)

(___TODO__: create a first draft of your Schemas in db.js and link to it_)

## Wireframes

(___TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc._)

/home/check-in - page for entering information

/check-in/ - page for showing specific data regarding information user entered

/about - page for showing mini descriptions of certain cancers

/useful sites - page showing a database of sites which users can access

/add a site - page where user can add a site to the database of useful sites

## Site map

(___TODO__: draw out a site map that shows how pages are related to each other_)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(___TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://www.mongodb.com/download-center?jmp=docs&_ga=1.47552679.1838903181.1489282706#previous)_)

1. as non-registered user, I can put in information about my age, gender, and last date of medical check-in
2. as non-registered user, I can receive information about whether I should go in for a medical check-in
3. as non-registered user, I can read more about certain cancers and look at charts/statistics
4. as non-registered user, I can look at sites which could help me learn more about certain cancers
5. as non-registered user, I can add a site to the list of given sites to help others read up more about cancer
## Research Topics

(___TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed_)

* (3 points) Using Bootstrap.js
    * Will use this for front-end component library
* (4 points) Using bl.ocks.org
    * Will create a population chart indicating individuals with cancer/statistics (Harder than the other two)
* (3 points) D3 API Reference
    * Will use it for creating statistics and histograms

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit_)


## [Link to Initial Main Project File](app.js)

(___TODO__: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js_)

## Annotations / References Used

(___TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. Bootstrap.js: http://getbootstrap.com/
2. bl.ocks.org: https://bl.ocks.org/-/about
3. D3 API Reference: https://github.com/d3/d3/blob/master/API.md

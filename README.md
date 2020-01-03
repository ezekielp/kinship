
<p>
    <a href="http://kinship-app.herokuapp.com/"><img src="https://raw.githubusercontent.com/ezekielp/kinship-markdown-assets/master/markdown_assets/kinship-splash-gif.gif"></a>
</p>

# Kinship

### Table of contents
1. [Demo](#demo)
2. [Background and overview](#background)
3. [Functionality](#functionality)
4. [Technologies and technical challenges](#technologies)
5. [Future tasks](#future)
6. [Team](#team)

## <a name="background"></a> Background and overview

The Kinship app allows users to store and organize information about friends, family members, and social contacts. While current social media sites have some information one may want to access about a person, not everyone uses social media, making the information inaccessible, or the details you want to record may not exist online.

Maybe you want to remember the names of your new co-worker's three dogs; perhaps you can never recall which four universities your father attended; or maybe you want to write down the names of the seven different people you just met at a party. Kinship provides a clean, simple UI for doing this, and eventually will be available on mobile and be able to fill in available details about a person automatically from around the web using a scraping tool.

## <a name="demo"></a> Demo

Here is a live link to the app: http://kinship-app.herokuapp.com/

## <a name="functionality"></a> Functionality

* User authentication: Signup and login
* Friend profiles with 17 fact fields
* Home page with list of all friends and their essential info
* Search functionality for friend profiles
* Dashboard of useful information about friends (e.g., upcoming birthdays)

<p>
    <a href="http://kinship-app.herokuapp.com/"><img src="https://raw.githubusercontent.com/ezekielp/kinship-markdown-assets/master/markdown_assets/kinship_index_screenshot.png"></a>
</p>

## <a name="technologies"></a> Technologies and technical challenges

The app's core functionality uses the MERN stack of MongoDB, Express, React-Redux and Node.js. Over and above the main CRUD capabilities of the app, the main technical challenge we plan to tackle is scraping social media sites. We will likely use a Python library to parse HTML and CSS for this task.

### Back-end: MongoDB, Express, Axios, and Node.js

Our back-end uses the Node.js JavaScript runtime paired with the Express web framework, the Axios HTTP client, and the NoSQL database MongoDB. This combination of tools allows us to use JavaScript as our main development language on both the back-end and the front-end.

MongoDB also provides us helpful flexibility for our database structure. Users' friend profiles each have a different set of information fields, making a NoSQL structure well-suited to our app.

<p>
    <a href="http://kinship-app.herokuapp.com/"><img src="https://raw.githubusercontent.com/ezekielp/kinship-markdown-assets/master/markdown_assets/kinship_show_screenshot.png"></a>
</p>

### Front-end: React and Redux

We use React and Redux to handle our front-end UI components and state management. These two powerful libraries allowed us to quickly build out our core CRUD functionality.

Technical challenges:
* Building a dynamically changing dropdown menu and form for creating new friend profiles

### Web-scraping: Python tools

Scraping social media sites for information to pre-fill friend profiles will pose a particular challenge. We will need to research and learn how to use a scraping library, as well as study the structure of the social media sites we want to scrape, to complete this feature.

## <a name="future"></a> Future tasks

* Create categories to sort friend profiles
* Add photo upload capability to friend show page
* Add more dashboard features
    * "BFF" quick links, either determined by an LRU cache or by marking "favorites"
    * List the number of profiles in each category
    * Scrollable box of mini profile photos of all friends (a la Facebook)
* Implement a view-switch function for the friend profile index between "card" view and "list" view
* Add a user profile page with ability to make certain info fields shareable with other users (or the whole profile)
* Scraping of social media sites

## <a name="team"></a> Team

Tae Ha, Andrew Lee, Ezekiel (Zeke) Pfeifer, and Kenel Zhao
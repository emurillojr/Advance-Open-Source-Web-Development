In Node.js Create a server that will do the following:

When the user goes to http://localhost:3000/todo (Links to an external site.)Links to an external site. it will display the demo json file (todo.json or download itView in a new window) with the content-type as "application/json". Display the file as is.

When the user goes to http://localhost:3000/index (Links to an external site.)Links to an external site. it will display an html page that will have your name and three things you like in an ordered list. It can be about food, places you have visited etc. Add two links on the page after the list. One for the todo page and the other for the read-todo page.

Create a third page called http://localhost:3000/read-todo (Links to an external site.)Links to an external site.. it will display an html page that will make an AJAX(fetch) request to http://localhost:3000/todo (Links to an external site.)Links to an external site. to get the JSON contents. Then loop through the content to display it in the HTML.

Since there are three possible pages, have index be the default. If I go to http://localhost:3000/fake-page (Links to an external site.)Links to an external site. the index page should be shown.

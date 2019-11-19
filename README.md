# TEST FOR FULLSTACK POSITION

## NOTES BEFORE YOU START THE TEST
* You are allowed to open resources on internet, but not to use their code.
* You must write all the code of this test.
* This computer has Node.js, NPM and Sails.js installed already.
* You can use the IDE of your preference, this computer has WebStorm, Sublime 3, and Visual Studio Code installed already.
* You have two hours to finish all the requirements in the list below.
* This test is using a framework called Sails.js, you can check the documentation here: https://sailsjs.com/get-started

## TEST INSTRUCTIONS:
1) Working with Git:

	1. Create a branch with your full name.
	2. Commit and push your code at the end of the test.
	
2) Working with the Back-End:

	1. Create a new project with Sails.js, name this new project with your full name.
	2. Create a route called: "software/product/download", where "product" needs to be a variable that expects the name of a product.
	3. Create a controller/action for that route, and validate the name of the product that is in the URL (route):
		- If the name of the product contains the word "firewall" display the page.
		- If the name of the product does not contain the word "firewall", show a 404 page.

3) Working with the Front-End:

	1. HTML and CSS:
		- Create a view for the route you created. 
		- It should display a box perfectly centered in the page with the product name inside (title).
		- The box has to be 500x500 pixels and needs to be responsive.
		- Create a pink border for the box and white background, also add some white shadow.
		- The background of the page needs to have a radial gradient from pink to black.
		- Create a button under the title that says: "Update title".
   	g. Create an anchor under the button to: "www.zonealarm.com" with the text: "Add to cart".
   	h. Center all the content inside the box vertically and horizontally.

	2. Javascript (Vuejs):
		- Use Vue.js to change the title and link inside the box once the user press the button "Update title".
		- The text of the title has to change to: "ZoneAlarm Extreme".
		- href property of the anchor has to change to: "store.zonealarm.com".

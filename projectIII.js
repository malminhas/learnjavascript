// Project III
// -----------
// 

//import {Backend} from "./demo/backend.js"
const backend = require('./projectII-backend.js');

const API = new backend.Backend();
API.setBaseUrl("https://api.learnjavascript.online/demo/")

const jsdom = require("jsdom");

html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        #shopping-list {
            list-style: none;
            background-color: whitesmoke;
        }
        #shopping-list li {
            padding: 5px 15px;
        }
    </style>
</head>
<body>

    <div id="navbar">
        Logo
    </div>

    <div id="main">
        <h1>My shopping list</h1>
        <p>Enter the name of the item you wish to add to your shopping list!</p>

        <form id="add-item-form">
            <input type="text" id="item-name" placeholder="Add item">
            <input type="submit" value="Add to list">
        </form>
        <ul id="shopping-list"></ul>
    </div>

    <div id="footer">
        <a href="about.html" target="_blank" rel="noopener">About us</a>
        <a href="contact.html" target="_blank" rel="noopener">Contact us</a>
    </div>

</body>
</html>`
dom = new jsdom.JSDOM(html);
document = dom.window.document;

/**
 * @param {string} item
 */
const displayItem = item => {
    // display the item (string) in the shopping-list element
	console.log(`displayItem("${item}")`)
    const slist = document.querySelector("#shopping-list")
    slist.insertAdjacentHTML("beforeend",`<li class="item">${item}</div>`);
}

/**
 * @param {string} item
 */
const addItem = item => {
	// send the item (string) to the API
	// and display it in the shopping list 
	// You add as a new item to the end of the list
	console.log(`addItem(${item})`)
	API.post("shopping-list.json",{'item':item})
	.then(data => {
		//console.log(`result="${data.result}",message="${data.message}"`)
		displayItem(item)
        item = ""
	    });
    }

const initShoppingList = () => {
	const form = document.querySelector("#add-item-form")
	const food = document.querySelector("#item-name")

	// get list of existing items and display them
	console.log(`1. Getting list of existing items to display`)
	API.get("shopping-list.json")
	.then(data => {
		data.forEach(food => {
			displayItem(food.item)
		})
	});
	// call the addItem(item) method when a user submits the add-item-form
	console.log(`2. Adding additional items on submit`)
	form.addEventListener('submit', event => {
		event.preventDefault();
		addItem(food.value)
	});
}

initShoppingList();

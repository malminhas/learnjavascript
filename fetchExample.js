// From: https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
// You have to use an external module to provide support for the fetch API in node.
//    $ npm install node-fetch
// Then use as follows.
//

//node-fetch was converted to be a ESM only package in version 3.0.0-beta.10. 
//node-fetch is an ESM-only module - you are not able to import it with require.
//const fetch = require("node-fetch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const getCompletedChapters = () => {
    fetch("https://api.learnjavascript.online/demo/chapters/all.json")
    .then(response => response.json())
    .then(data => {
	    console.log("All chapters:")
	    console.log(data);  // dump everything
	    let cs = data.filter(chapter => chapter.is_completed === true);
	    displayCompletedChapters(cs);
	})
    }

function displayCompletedChapters(chapters){
    // do not modify this function
    console.log("Completed chapters:");
    console.log(chapters);
}

//sample usage
getCompletedChapters()
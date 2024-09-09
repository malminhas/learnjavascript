#!/usr/bin/env node
/*
promiseFlow1.js
===============
Getting URLs via promise in a v1 fashion highlighting some poor practices.
eg. promise chaining

Background reference is here:
http://www.christianalfoni.com/articles/2017_04_16_The-second-case-for-function-tree

*/

//node-fetch was converted to be a ESM only package in version 3.0.0-beta.10. 
//node-fetch is an ESM-only module - you are not able to import it with require.
//const fetch = require("node-fetch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// We create a factory that takes a url and returns a promise of fetching data
function get (url) {
	// fetch returns a promise
	return fetch(url)
		.then(data => data.text())
		.then(text => text.substring(300,400))
		.catch(error => {
			console.log(`Caught error ${error}`)
			throw new Error(error);
		})
	// If you wanted to avoid fetch even:
    //return new Promise(function (resolve, reject) {
	//    ajax.get(url, function (error, result) {
	//	    if (error) reject(error)
	//		else resolve(result)
	//	})
	//})
}

// ----------- VERSION 1 --------------

function startFlow (bananasUrl, applesUrl) {
	let bananasResult

    // BAD: running side effect from outer scope
    return get(bananasUrl)
    	// BAD: Not declarative cause need to assign to outer scope
      	.then(function (bananas) {
	    	// BAD: assigning to outer scope
      		bananasResult = bananas
	  		// BAD: running side effect from outer scope
	  		return get(applesUrl)
	  	})
      	// BAD: Not declarative cause need to get value from outer scope
      	.then(function (apples) {
			const fruitBasket = [bananasResult, apples]
			console.log(`Filled fruitBasket:`)
			fruitBasket.forEach(element => {
				console.log(`----------\n${element.substr(0,100)}`)
			})
    		return fruitBasket
		})
      	.catch(function (error) {
			console.log(`error: ${error}`)
		})
}

startFlow('https://en.m.wikipedia.org/wiki/Banana', 'https://en.m.wikipedia.org/wiki/Apple')
console.log(`Finished startFlow`)
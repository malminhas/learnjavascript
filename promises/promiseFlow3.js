#!/usr/bin/env node
/*
promiseFlow3.js
===============
Alternative version using async/await rather than promises.  
Note that async-await is not universally better than using 
1. By using await, calls can become too sequential and the total execution time 
can end up longer than the parallel version.  The way to parallelise is to revert 
to using promises as shown below with awaits on bananaPromise and applePromise.
2. Error handling is more complex with async-await with try-catch-throw logic 
as shown below.

Background reference is here:
https://hackernoon.com/javascript-async-await-the-good-part-pitfalls-and-how-to-use-9b759ca21cda

*/

const fetch = require('node-fetch');

// We create a factory that takes a url and returns a promise of fetching data
async function get(url) {
	// fetch returns a promise
	const data = await fetch(url)
	const text = await data.text()
	return text.substring(300,400)
}

// ----------- VERSION 3 --------------

async function getBananas(payload) {
	console.log(`getBananas(${payload.bananasUrl})`)
	try {
		const bananas = await get(payload.bananasUrl)
		console.log('getBananas: completed!')
		payload.bananas = bananas
		return payload
	}
	catch (error) {
		console.log(`CAUGHT error: "${error}"`)
		throw new Error(error)
	}
}

async function getApples(payload) {
	console.log(`getApples(${payload.applesUrl})`)
	try {
		const apples = await get(payload.applesUrl)
		console.log('getApples: completed!')
		payload.apples = apples
		return payload
	}
	catch (error) {
		console.log(`CAUGHT error: "${error}"`)
		throw new Error(error)
	}
}

function createBasket(payload){
	console.log('createBasket')
	payload.basket = [{bananas:payload.bananas},{apples:payload.apples}]
	return payload
}

function dumpBasket(payload){
	console.log('dumpBasket')
	console.log(payload.basket)
	return payload
}

async function startFlow() {
	let payload = {
		bananasUrl: 'https://en.m.wikipedia.org/wiki/Banana', 
		applesUrl:  'https://en.m.wikipedia.org/wiki/Apple'
	}
	console.log(payload)
	const bananasPromise = getBananas(payload)
	const applesPromise = getApples(payload)
	await bananasPromise
	await applesPromise
	createBasket(payload)
	return payload
}

startFlow()
	.then(payload => {
		dumpBasket(payload)
		console.log(`Finished chain`)
	})
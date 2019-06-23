#!/usr/bin/env node
/*
promiseFlow2.js
===============
Improved version by injecting a payload.  This prevents us from pointing to outer scope.

Background reference is here:
http://www.christianalfoni.com/articles/2017_04_16_The-second-case-for-function-tree

*/

const fetch = require('node-fetch');

// We create a factory that takes a url and returns a promise of fetching data
function get (url) {
	// fetch returns a promise
	return fetch(url)
		.then(data => data.text())
		.then(text => text.substring(300,400))
}

// ----------- VERSION 2 --------------

function getBananas(payload) {
	return get(payload.bananasUrl)
		.then(bananas => {
			payload.bananas = bananas
			return payload
		})
}

function getApples(payload) {
	return get(payload.applesUrl)
		.then(apples => {
			payload.apples = apples
			return payload
		})
}

function createBasket(payload){
	payload.basket = [{bananas:payload.bananas},{apples:payload.apples}]
	return payload
}

function dumpBasket(payload){
	console.log(payload.basket)
	return payload
}

function startFlow(payload) {
	return Promise.resolve(payload)
}

startFlow({
	bananasUrl: 'https://en.m.wikipedia.org/wiki/Banana', 
	applesUrl:  'https://en.m.wikipedia.org/wiki/Apple'
})
	.then(getBananas)
	.then(getApples)
	.then(createBasket)
	.then(dumpBasket)
	.catch(function (error) {
		console.log(`error: ${error}`)
	})
console.log(`Finished startFlow`)
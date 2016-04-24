"use strict";
/*
Title: Vtg Initializer
Description: Initializes the Vtg Object with global access following page loading
Created: 03 Feb 2015 18:30
Last Modified: 03 Feb 2015 18:30
Author: Vamtiger Immortalles
Email: vamtigerproject@gmail.com
*/

window.vtg = new Vtg();

vtg.postload({
	js: {
		element: "script",
		src: [
			"/Users/VAMTIGER/Documents/Books/Programming/Online/Library/jQuery/jquery-1.11.2.min.js",
			"/Users/VAMTIGER/Documents/Books/Programming/Online/Library/Bootstrap/bootstrap-3.3.2-dist/js/bootstrap.js",
			"/Users/VAMTIGER/Documents/Books/Programming/Online/Library/PrefixFree/prefixfree.min.js",
			"Assets/Scripts/Js/vamtigerCustom.js",
		],
	},
	complete: vtg.nothing,
});
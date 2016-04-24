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
			"https://code.jquery.com/jquery-1.11.2.min.js",
			"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js",
			"https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/VamtigerProject/Home/Home2/Assets/Scripts/Js/vamtigerCustomHosted.js",
		],
	},
	complete: vtg.nothing,
});
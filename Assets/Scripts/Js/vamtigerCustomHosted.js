"use strict";

vtg.responsiveMedia([
	{
		name: "phoneInHandResponsive",
		attribute: "src",
		url: "https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/VamtigerProject/Home/Home2/Assets/Images",
		resolution: {
			480: "vamtigerMarketingW480.png",
			768: "vamtigerMarketingW768.png",
			992: "vamtigerMarketingW992.png",
			1200: "vamtigerMarketingW1200.png",
			1500: "vamtigerMarketingW1500.png",
		},
	},
]);

$(".carousel").carousel({
	interval: 5000,
});
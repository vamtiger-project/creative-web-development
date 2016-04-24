"use strict";
/*
Title: Vamtiger Document Html
Description: Sets the html for the entire document of vamtiger.herokuapp.com
Created: 15 Feb 2015 05:24
Last Modified: 15 Feb 2015 05:24
Author: Vamtiger Immortalles
Email: vamtigerproject@gmail.com
*/

function documentHead() {/*
<head>
	<meta charset = "utf-8">
	<meta name = "viewport" content = "width=device-width, initial-scale=1.0">

	<!-- Document Title -->
	<title>
		Vamtiger
	</title>
	<link rel = "shortcut icon" type = "image/png" href = "https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/VamtigerProject/Home/Home1/Assets/Images/vamtigerProjectTitleIcon.png">

	<!-- Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet' type='text/css'>

	<!-- Style Sheets -->
	<link rel = "stylesheet" href = "https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/VamtigerProject/Home/Home2/Assets/Scripts/Css/vamtiger.css">
	<link rel = "stylesheet" href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

	<script src = "https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/Library/Js/vamtiger.js"></script>
	<script src = "https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/VamtigerProject/Home/Home2/Assets/Scripts/Js/vamtigerInitializerHosted.js"></script>
</head>
*/}

function documentBody() {/*
<body>
	<nav class = "navbar navbar-inverse navbar-fixed-top" role = "navigation">
		<section class = "navbar-header">
			<button type = "button" class = "navbar-toggle" data-toggle = "collapse" data-target = ".navbar-collapse">
				<span class = "sr-only">Toggle navigation</span>

				<span class = "icon-bar"></span>
				<span class = "icon-bar"></span>
				<span class = "icon-bar"></span>
			</button>

			<a href = "https://vamtiger.herokuapp.com" class = "navbar-brand" title = "Vamtiger">
				<figure>
					<img src = "https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/VamtigerProject/Home/Home2/Assets/Images/vamtigerProjectLogoWhiteMIn.svg" data-name = "vamtigerLogoNav">
				</figure>
			</a>
		</section>

		<nav class = "navbar-collapse collapse">
			<ul class = "nav navbar-nav">
				<li class = "active">
					<a href = "https://vamtiger.herokuapp.com" title = "Home page">Home</a>
				</li>
				<li>
					<a href = "https://vamtiger.herokuapp.com/underConstruction" title = "Browse all projects">Project</a>
				</li>
				<li>
					<a href = "https://vamtiger.herokuapp.com/underConstruction" title = "Contact Vamtiger">Contact</a>
				</li>
				<li class = "dropdown">
					<a href = "#" class = "dropdown-toggle" data-toggle = "dropdown" title = "Follow Vamtiger">Social<b class = "caret"></b></a>
					<ul class = "dropdown-menu">
						<li>
							<a href = "https://twitter.com/Vamtiger" target = "_blank">Twitter</a>
						</li>
						<li>
							<a href = "https://vamtiger.wordpress.com/" target = "_blank">Wordpress</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</nav>
	<!-- End of Navigation -->

	<section id = "mainCarousel" class = "carousel slide">
		<ol class = "carousel-indicators">
			<li data-target = "#mainCarousel" data-slide-to = "0" class = "active"></li>
			<li data-target = "#mainCarousel" data-slide-to = "1"></li>
			<li data-target = "#mainCarousel" data-slide-to = "2"></li>
	    </ol>

		<section class = "carousel-inner">
			<figure class = "item active">
				<section class = "container active">
					<section class = "carousel-caption">
						<h1>
							VAMTIGER
						</h1>

						<p>
							Advanced creative development
						</p>

						<p>
							<a href = "https://vamtiger.herokuapp.com/underConstruction" class = "btn btn-md btn-primary" data-button>Register</a>
						</p>
					</section>
				</section>
			</figure>

			<figure class = "item">
				<section class = "container active">
					<section class = "carousel-caption">
						<h1>
							INFORMATIVE
						</h1>

						<p>
							Free publications and online services
						</p>

						<p>
							<a href = "https://vamtiger.herokuapp.com/underConstruction" class = "btn btn-md btn-primary" data-button>Register</a>
						</p>
					</section>
				</section>
			</figure>

			<figure class = "item">
				<section class = "container active">
					<section class = "carousel-caption">
						<h1>
							FUN
						</h1>

						<p>
							Free online games and educational material
						</p>

						<p>
							<a href = "https://vamtiger.herokuapp.com/underConstruction" class = "btn btn-md btn-primary" data-button>Register</a>
						</p>
					</section>
				</section>
			</figure>
		</section>

		<a class = "left carousel-control" href = "#mainCarousel" data-slide = "prev"><span class = "glyphicon glyphicon-chevron-left"></span></a>

		<a class = "right carousel-control" href = "#mainCarousel" data-slide = "next"><span class = "glyphicon glyphicon-chevron-right"></span></a>
	</section>
	<!-- End of Carousel -->

	<article data-name = "intro-block">
		<section class = "container">
			<section class = "row">
				<figure class = "col-sm-3" data-justify = "responsiveCenter">
					<img src = "https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/VamtigerProject/Home/Home2/Assets/Images/vamtigerProjectLogoWhiteMIn.svg" class = "img-responsive padding-top" data-name = "vamtigerLogoIntro">
				</figure>

				<section class = "col-sm-8">
					<h1 data-justify = "responsiveCenter">
						Vamtiger <span data-name = "textMuted">&raquo; Creative Coding</span>
					</h1>

					<p class = "lead">
						Vamtiger is an African open-source web devolopment project, focusing on innovatively delivering free content through the creative implementation of the latest web technologies.
					</p>
				</section>
			</section>
		</section>
	</article>
	<!-- End of Intro Article -->

	<article class = "container" data-name = "vamtigerContent">
		<section class = "row">
			<hgroup class = "col-lg-12">
				<h2>
					Vamtiger Content
				</h2>

				<hr>
			</hgroup>
		</section>

		<section class = "row">
			<section class = "col-sm-6 col-md-3">
				<figure>
				</figure>

				<h3>
					Web Development
				</h3>

				<p>
					Vamtiger specializes in the creative exploitation of open-source web technologies to provide advanced development solutions for any online project.
				</p>

				<p data-justify = "responsiveCenter">
					<a href = "https://vamtiger.herokuapp.com/underConstruction" class = "btn btn-default">Read More</a>
				</p>
			</section>

			<section class = "col-sm-6 col-md-3">
				<figure>
				</figure>

				<h3>
					Universal Access
				</h3>

				<p>
					Our research-driven projects and online services are responsively designed to ensure that all our content is rendered consistently across the latest web browsers on all modern devices. 
				</p>

				<p data-justify = "responsiveCenter">
					<a href = "https://vamtiger.herokuapp.com/underConstruction" class = "btn btn-default">Read More</a>
				</p>
			</section>

			<section class = "col-sm-6 col-md-3">
				<figure>
				</figure>

				<h3>
					Learning
				</h3>

				<p>
					We enjoy generating free interactive content that is educationally and socially relevant to keep our users interested, informed and engaged.
				</p>

				<p data-justify = "responsiveCenter">
					<a href = "https://vamtiger.herokuapp.com/underConstruction" class = "btn btn-default">Read More</a>
				</p>
			</section>

			<section class = "col-sm-6 col-md-3">
				<figure>
				</figure>

				<h3>
					Fun
				</h3>

				<p>
					All users also have free access to our creatively-inspired online games for enjoyment from any location and on any device.
				</p>

				<p data-justify = "responsiveCenter">
					<a href = "https://vamtiger.herokuapp.com/underConstruction" class = "btn btn-default">Read More</a>
				</p>
			</section>
		</section>
	</article>
	<!-- End of Content Article -->

	<article data-name = "marketing">
		<section class = "container">
			<section class = "row">
				<figure class = "col-sm-5">
					<img src = "" class = "img-responsive" data-name = "phoneInHandResponsive">
				</figure>

				<section class = "col-sm-6" data-name = "marketingDescription">
					<h3 data-justify = "responsiveCenter">
						MOBILE FRIENDLY
					</h3>

					<hr data-name = "hr">

					<p >
						Vamtiger is cross-browser and multi-device compatible. So no matter whether you're on a desktop, tablet or mobile, access to our content is always right at your finger tips.
					</p>

					<p data-justify = "responsiveCenter">
						<a href = "https://vamtiger.herokuapp.com/underConstruction" class = "btn btn-md btn-primary" data-button>Register</a>
					</p>
				</section>
			</section>
		</section>
	</article>
	<!-- End of Marketing Article -->

	<article data-name = "info">
		<section class = "container">
			<section class = "row">
				<nav class = "col-md-5 tabbable">
					<ul class = "nav nav-tabs" data-name = "infoTab">
						<li class = "active">
							<a href = "#freeInfo" data-toggle = "tab">Free</a>
						</li>

						<li>
							<a href = "#empoweringInfo" data-toggle = "tab">Empowering</a>
						</li>

						<li>
							<a href = "#appealingInfo" data-toggle = "tab">Appealing</a>
						</li>
					</ul>
					<section class = "tab-content">
						<article id = "freeInfo" class = "tab-pane fade in active">
							<p>
								Vamtiger has risen to the challenge of innovatively implementing the latest open-source web technologies to ensure free accessibility to all users, without compromising the quality of it's content or online services.
							</p>
						</article>

						<article id = "empoweringInfo" class = "tab-pane fade in">
							<p>
								Vamtiger has many socially relevant information and services to educate and empower users on any device and any location, as well as providing an online platform for public engagement and communication.
							</p>
						</article>

						<article id = "appealingInfo" class = "tab-pane fade in">
							<p>
								Vamtiger has a responsive design structure to ensure that all it's creatively inspired content and richly interactive online applications are rendered consistently on the latest web browsers and across multliple devices.
							</p>
						</article>
					</section>
				</nav>

				<section class = "col-sm-7">
					<blockquote>
						<p>
							&ldquo;Vamtiger will completely revolutionize the means through which people empower themselves through technology. It has been built from the ground up to engage users in a manner consistent with the latest web standards. As a free source of online tools and information, it is invaluable. And as a creatively inspired multi-media interface, it is also uniquely appealing.&rdquo;
						</p>

						<small>
							Vamtiger Immortalles, <cite title = "Source title">Founder</cite>
						</small>
					</blockquote>
				</section>
			</section>
		</section>
	</article>
	<!-- End of Info Article -->

	<footer data-name = "footer" data-justify = "responsiveCenter">
		<section class = "container">
			<section class = "row">
				<address>
					Cape Town<br>
					South Africa<br>
					<a href = "mailto:vamtigerproject@gmail.com">vamtigerproject@gmail.com</a><br>
					+27 84 693 9403
				</address>

				<figure data-justify = "responsiveCenter">
					<img src = "https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/VamtigerProject/Home/Home2/Assets/Images/vamtigerProjectLogoFooterMin.svg" class = "img-responsive" data-name = "vamtigerLogoFooter">
					<figcaption>
						&copy; Vamtiger Inc. 2015
					</figcaption>
				</figure>
			</section>
		</section>
	</footer>
	<!-- End of Footer -->
</body>
*/}

function reloadScripts(currentScriptIndex) {
	var scripts = [];

	setScripts();
	loadScript();

	function setScripts() {
		var unloadedScripts = document.querySelectorAll("head > script");
		var unloadedScript;
		var index;

		for (index = 0; index < unloadedScripts.length; index ++) {
			unloadedScript = unloadedScripts[index];

			scripts[index] = unloadedScript.cloneNode(true);

			document.head.removeChild(unloadedScript);
		}
	}

	function loadScript(currentScriptIndex) {
		var script = document.createElement("script");

		var lastScriptIndex = scripts.length - 1;

		setCurrentScriptIndex();

		if (currentScriptIndex < lastScriptIndex) {
			appendScript();
			script.addEventListener("load", loadNexScript);
		} else {
			appendScript();
		}

		function setCurrentScriptIndex() {
			if (currentScriptIndex === undefined){
				currentScriptIndex = 0;
			} else {
				currentScriptIndex += 1;
			}
		}

		function appendScript() {
			script.src = scripts[currentScriptIndex].src;

			document.head.appendChild(script);
		}

		function loadNexScript() {
			loadScript(currentScriptIndex);
		}
	}
}

window.htmlForHead = document.createElement("div");
window.htmlForBody = document.createElement("div");

window.htmlForHead.innerHTML = documentHead.toString().slice(27, -3).replace(/\n|\t|\*$/g, "");
window.htmlForBody.innerHTML = documentBody.toString().slice(27, -3).replace(/\n|\t|\*$/g, "");

document.head.innerHTML = window.htmlForHead.cloneNode(true).innerHTML;

window.addEventListener("load", function () {
	document.body.innerHTML = window.htmlForBody.cloneNode(true).innerHTML;
	
	delete window.htmlForHead;
	delete window.htmlForBody;

	reloadScripts();
});
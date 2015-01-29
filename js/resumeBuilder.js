var bio = {
	"name": "Andres Santos",
	"role": "Web Developer",
	"contacts": {
		"mobile":"811-243-0989",
		"email": "andres.santos188@gmail.com",
		"github": "andressantosc",
		"twitter": "asantos188",
		"location": "Monterrey, Mexico"
	},
	"welcomeMessage": "Hello everybody! Welcome to my Resume.",
	"skills": ["Entrepreneur", "Programmer", "Self-motivated", 
	"Great people skills"],
	"bioPic": "images/Profile.jpg"
}

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").prepend(formattedLocation);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").prepend(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").prepend(formattedTwitter);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").prepend(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").prepend(formattedMobile);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);

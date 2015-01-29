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
$("#topContacts").prepend(formattedLocation);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").prepend(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").prepend(formattedTwitter);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").prepend(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").prepend(formattedMobile);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

// Declared object that contains bio information
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
	"welcomeMessage": "My objective is to work and succeed beyond expectations in a demanding and enriching environment where I will be able to get a fast-paced learning experience. To revise and expand what I’ve learned as an entrepreneur and apply it in company with a larger scale. To develop the necessary skills to get into a top tier business school and get a master’s degree.",
	"skills": ["Entrepreneur", "Programmer", "Self-motivated", 
	"Great people skills"],
	"bioPic": "images/Profile.jpg"
};

// Declared object that contains work information
var work = {
	"jobs": [ 
		{ 
			"position": "Co-founder",
			"employer": "Neomesa S.A. de C.V.",
			"yearsWorked": "2012 - Present",
			"city": "Monterrey",
			"description": "Retail operations focusing on the Restaurant Industry."
		},
		{
			"position": "Financial Analyst Intern",
			"employer": "Alfa Corporativo",
			"yearsWorked": "2010 - 2011",
			"city": "Monterrey",
			"description": "Focus in financial innovation and hedging strategies."
		}
	]
}

// Declared object that contains education information
var edu = {
	"schools": [
		{
			"name": "Northeastern University",
			"dates": "2016",
			"city": "Boston",
			"degree": "Bachelor of Science",
			"major": "Management"
		},
		{
			"name": "Harvard University",
			"dates": "2013 - 2014",
			"city": "Boston",
			"degree": "Harvard Extension Classes"
		},
		{
			"name": "Monterrey Institute of Technology",
			"dates": "2010 - 2013",
			"city": "Monterrey",
			"degree": "B.A. in Economics"
		}
	]
}

// Declared object tat contains projects information
var projects = {
	"projects": [
		{
			"title": "100 Montaditos",
			"dates": "2012 - 2015",
			"description": "Operator of the Spanish Franchise from Madrid in Monterrey, Mexico.",
			"images": ["images/100mlogo.gif"]
		},
		{
			"title": "La Borra del Café" ,
			"dates": "2014 - Present",
			"description": "Mexican cofeehouse franchise that seeks to build spaces that help spark creativity.",
			"images": ["images/borra.png"]
		},
		{
			"title": "Whipped Lightning",
			"dates": "2015",
			"description": "Exclusive distribution rights on alchol-infused whipped cream.",
			"images": ["images/whip.gif"]
		},
		{
			"title": "Autumn",
			"dates": "2015",
			"description": "The falling of the leaves and the start of winter.",
			"images": ["images/autumn.gif"]
		},
		{
			"title": "Your Story Matters",
			"dates": "2015",
			"description": "Tell your story in a collaborative environment.",
			"images": ["images/openbook.gif"]
		},
		{
			"title": "DonationPlus",
			"dates": "2015",
			"description": "Kickstarter-like site to crowdfund NGOs.",
			"images": ["images/donate.gif"]
		}
	]
}
// Declare a display method for projects
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle + formattedDates
		 + formattedDesc);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImg);
			}
		}
	}
}

// Display Projects
projects.display();

// Inserted contact information to the HTML
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

// Inserted Title Name and Role to HTML
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

// Inserted Profile Picture and Welcome Message to HTML
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);

// Inserted Skills to HTML (unfinished)
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));
}

// Create function to display Work to HTML
function displayWork() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation 
			+ formattedDates + formattedDesc);
	}
}

// Display Work
displayWork();

// Inserted Education to HTML
$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", edu.schools[0].name));
$("#education").append(HTMLschoolDegree.replace("%data%", edu.schools[0].degree));
$("#education").append(HTMLschoolDates.replace("%data%", edu.schools[0].dates));
$("#education").append(HTMLschoolLocation.replace("%data%", edu.schools[0].city));
$("#education").append(HTMLschoolMajor.replace("%data%", edu.schools[0].major));
$("#education").append(HTMLschoolName.replace("%data%", edu.schools[1].name));
$("#education").append(HTMLschoolDegree.replace("%data%", edu.schools[1].degree));
$("#education").append(HTMLschoolDates.replace("%data%", edu.schools[1].dates));
$("#education").append(HTMLschoolLocation.replace("%data%", edu.schools[1].city));
$("#education").append(HTMLschoolName.replace("%data%", edu.schools[2].name));
$("#education").append(HTMLschoolDegree.replace("%data%", edu.schools[2].degree));
$("#education").append(HTMLschoolDates.replace("%data%", edu.schools[2].dates));
$("#education").append(HTMLschoolLocation.replace("%data%", edu.schools[2].city));




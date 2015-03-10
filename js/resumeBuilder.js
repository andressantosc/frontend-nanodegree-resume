// Declared object that contains bio information
var bio = {
	"name": "Andres Santos",
	"role": "Entrepreneur",
	"contacts": {
		"mobile":"811-243-0989",
		"email": "andres.santos188@gmail.com",
		"github": "andressantosc",
		"twitter": "asantos188",
		"location": "Monterrey, Mexico"
	},
	"welcomeMessage": "My name is Andres Santos and I'm an entrepreneur and front-end web developer. I have a mixed background in retail operations, franchise development and corporate finance. I am passionate about new technology and I always use my free time to enhance my programming skills. My dream job is about helping entrepreneurs in taking their ideas from concept to reality.",
	"skills": ["Entrepreneur", "Programmer", "Self-motivated", 
	"Great people skills"],
	"bioPic": "images/Profile.jpg",
	"travel": ["Denver, CO", "Mexico City, Mexico", "London, UK",
		"Saint Petersburg, Russia", "Oslo, Norway", "Helsinki, Finland",
		"Stockholm, Sweden", "Cairo, Egypt", "Belize, Belize", "Cartagena, Colombia"]
};

// Declared method to display Bio info
bio.display = function() {
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
		for (skill in bio.skills) {
			formattedSkill = HTMLskills.replace("%data%", bio.skills[skill])
			$("#skills:last").append(formattedSkill);
		}
	}
}

// Display Bio
bio.display();

// Declared object that contains work information
var work = {
	"jobs": [ 
		{ 
			"position": "Co-founder and Board Member",
			"employer": "Aguila Soul",
			"yearsWorked": "2015 - Present",
			"location": "Monterrey",
			"description": "Aguila Soul is Neomesa's first joint venture. It was created as a parternship with Grupo Culinaria, one of the most succesful and prestigious restaurant groups of Mexico, with over 20 years of experience in the industry. The new venture has created an innovative casual mexican restaurant concept called Aguila Soul and is currently operating it's first restaurant."
		},
		{ 
			"position": "Co-founder and COO",
			"employer": "Neomesa",
			"yearsWorked": "2012 - Present",
			"location": "Monterrey",
			"description": "Neomesa was created when I was 20 years old as a holding company for future projects. The first project was the regional development of a restaurant franchise from Spain called 100 Montaditos."
		},
		{
			"position": "Financial Analyst Intern",
			"employer": "Alfa Corporativo",
			"yearsWorked": "2010 - 2011",
			"location": "Monterrey",
			"description": "Worked in a demanding environment in one of Mexico's largest industrial conglomerates, with revenues of $15.9 billion dollars. As an intern, I undertook projects within the derivatives, financial planning and debt management departments. I started working there at the age of 18, still in high school, becoming the youngest intern in the company."
		}
	]
}

// Create function to display Work to HTML
work.display = function() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedLocation 
			+ formattedDates + formattedDesc);
	}
}

// Display Work
work.display();

// Declared object that contains education information
var education = {
	"schools": [
		{
			"name": "Northeastern University",
			"dates": "2014 - 2016",
			"location": "Boston",
			"degree": "B.S. in Management",
			"description": "Transfer Student"
		},
		{
			"name": "Monterrey Institute of Technology",
			"dates": "2010 - 2013",
			"location": "Monterrey",
			"degree": "B.A. in Economics",
			"description": "Three years studying economics, with a strong foundation in Mathematics and Statistics. Took a leave of absence to focus on building Neomesa."
		}
	]
}

// Delcared a display method for education
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", 
							education.schools[school].name);
		var formattedDates = HTMLschoolDates.replace("%data%", 
							education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", 
							education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", 
							education.schools[school].degree);
		var formattedDescription = HTMLschoolDescription.replace("%data%", 
							education.schools[school].description);
		$(".education-entry:last").append(formattedName  + formattedDegree + 
										formattedLocation + formattedDates
										+ formattedDescription);
	}
}

// Display education
education.display();

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

// Create Google Map
$('#mapDiv').append(googleMap);

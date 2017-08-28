var bio = {
    "name" : "Brian Futrell",
    "role" : "Web Developer",
    "contactInfo" : {
        mobile : "919-741-1959", 
        location: "4201 Ferriday Court Raleigh, NC 27616", 
        email: "bfutrel@gmail.com",
        github: "bfutrell70"
    },
    "bioPic" : "images/fry.jpg",
    "welcomeMessage" : "Nice to meet you!",
    "skills" : ["C#", "ASP.NET", "SQL Server"]
};

var formattedName;
var formattedRole;
var formattedImage;
var formattedWelcomeMessage;

var formattedEmail;
var formattedMobile;
var formattedGitHub;
var formattedLocation;
var formattedSkills;

formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.github);
formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

formattedSkills = HTMLskills.replace("%data%", bio.skills.join(","));

// since the role and name need to be added before anything else prepend the role
// first, then the name so that the name will appear first.
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGitHub);
$("#header").append(formattedLocation);

$("#header").append(formattedImage);

$("#header").append(formattedWelcomeMessage);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);

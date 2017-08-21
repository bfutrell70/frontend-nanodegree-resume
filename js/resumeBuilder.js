var bio = new {
    "name" : "Brian Futrell",
    "role" : "Web Developer",
    "contactInfo" : ["919-741-1959", "4201 Ferriday Court Raleigh, NC 27616", "bfutrel@gmail.com"],
    "pictureUrl" : "/images/fry.jpg",
    "welcomeMessage" : "Nice to meet you!",
    "skills" : ["C#", "ASP.NET", "SQL Server"]
};


var formattedName;
var formattedRole;
var formattedImage;
var formattedWelcomeMessage;

//var name = "Brian Futrell";
//var role = "Web Developer";

formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
formattedImage = HTMLbioPic.replace("%data%", bio.pictureUrl);
formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// since the role and name need to be added before anything else prepend the role
// first, then the name so that the name will appear first.
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedImage);
$("#header").append(formattedWelcomeMessage);
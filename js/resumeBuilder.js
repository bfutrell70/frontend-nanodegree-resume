/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName;
var formattedRole;

var name = "Brian Futrell";
var role = "Web Developer";

formattedName = HTMLheaderName.replace("%data%", name);
formattedRole = HTMLheaderRole.replace("%data%", role);

// since the role and name need to be added before anything else prepend the role
// first, then the name so that the name will appear first.
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
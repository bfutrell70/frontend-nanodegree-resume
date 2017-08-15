/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName;
var formattedRole;

var name = "Brian Futrell";
var role = "Web Developer";

formattedName = HTMLheaderName.replace("%data%", name);
formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
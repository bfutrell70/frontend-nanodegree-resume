/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var formattedName;
 var formattedRole;

 formattedName = HTMLheaderName.replace("%data%", "Brian Futrell");
 formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

 $("#header").html().prepend(formattedName);
 $("#header").html().prepend(formattedRole);

var work = {
    "jobs" : [
        {
            "employer" : "Devil Dog Mfg.",
            "title" : "Warehouse Worker",
            "location" : "628 S Pine St, Spring Hope, NC 27882",
            "dates" : "1988-1995",
            "description": "Drove forklifts, color shaded cloth"
        },
        {
            "employer" : "Wizard Business Solutions, Inc./iBrain, Inc.",
            "title" : "Software Developer/Support Technician",
            "location" : "Raleigh, NC 27604",
            "dates" : "1995-2012",
            "description" : "Wrote custom software that interfaced with Peachtree Accounting, Peachtree Complete Accounting, Peachtree Quantum and Sage 50 to allow users to submit W-2, 1099-MISC, direct deposit ECH, and quarterly unemployemt reports electronically. Also wrote software to create payroll reports that comply with the Davis-Bacon Act. "
        },
        {
            "employer" : "Stay Online Corp.",
            "title" : "Web Developer",
            "location" : "1506 Ivac Way, Creedmoor, NC 27522",
            "dates" : "2012-present",
            "description" : "Backend web development, inhouse support"
        }
    ],
    "display" : function() {
        if (this.jobs.length > 0)
        {
            $('#workExperience').append(HTMLworkStart);
            for (var eachJob in this.jobs)
            {
        
                if (work.jobs.hasOwnProperty(eachJob))
                {
                    var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[eachJob].employer);
                    var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[eachJob].title);
            
                    // in index.html there is no element with a class of 'work-entry'....
                    $(".work-entry:last").append(formattedEmployer + " " + formattedTitle);
                    var formattedDates = HTMLworkDates.replace("%data%", this.jobs[eachJob].dates);
                    $(".work-entry:last").append(formattedDates);
        
                    var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[eachJob].description);
                    $(".work-entry:last").append(formattedDescription);
                }
            }
        }
    }
};

var projects = {
    "projects" : [
        {
            "title" : "CertPay Wizard",
            "dates" : "1998-2012",
            "description" : "Certified Payroll reporting for Peachtree Accounting/Sage 50 accounting software",
            "images" : [ "images/gears.jpg", "images/lights.jpg" ]
        },
        {
            "title" : "Direct Deposit Wizard",
            "dates" : "1998-2012",
            "description" : "Direct Deposit ACH file creation for Peachtree Accounting/Sage 50 accounting software",
            "images" : [ "images/lights.jpg", "images/fry.jpg" ]
        },
        {
            "title" : "WizMag W-2",
            "dates" : "1998-2012",
            "description" : "SSA W-2 wage reporting for Peachtree Accounting/Sage 50 accounting software",
            "images" : [ "images/fry.jpg", "images/projectnotes.jpg" ]
        },
        {
            "title" : "WizMag 1099-MISC",
            "dates" : "1998-2012",
            "description" : "IRS 1099-MISC reporting for Peachtree Accounting/Sage 50 accounting software",
            "images" : [ "images/gears.jpg", "images/fry.jpg" ]
        },
        {
            "title" : "WizMag SUTA",
            "dates" : "1998-2012",
            "description" : "Quarterly state wage/unemployment reporting for Peachtree Accounting/Sage 50 accounting software",
            "images" : [ "images/gears.jpg", "images/gears.jpg" ]
        },
        {
            "title" : "EET Reporting",
            "dates" : "2016-2017",
            "description" : "Reporting of credit card purchases from eu.stayonline.com to Czech tax authority",
            "images" : [ "images/lights.jpg", "images/lights.jpg" ]
        },
        {
            "title" : "PDU Whip Configurator",
            "dates" : "2015-2016",
            "description" : "A complete rewrite of StayOnline's PDU Whip configurator",
            "images" : [ "images/projectnotes.jpg", "images/gears.jpg" ]
        },
        {
            "title" : "Molded Cord Update",
            "dates" : "2016-2017",
            "description" : "Major update of Stayonline's Molded Cord configurator",
            "images" : [ "images/fry.jpg", "images/projectnotes.jpg" ]
        },
		{
            "title" : "Drawing PDF Generator",
            "dates" : "2017",
            "description" : "Create a cord drawing PDF based on user selection",
            "images" : [ "images/gears.jpg", "images/lights.jpg" ]
        }
    ],
    "display" : function() {
        // .append items to '#projects' to allow them to appear under the header.
        // Each project will start with a HTMLprojectStart.
        // HTMLprojectStart contains a div with the class project-entry.

        // NOTE in for (var xx in xxx) loops the xx is the INDEX within xxx.
        for (var proj in this.projects)
        {
			$("#projects").append(HTMLprojectStart);
            
            // title
			var projTitle = HTMLprojectTitle.replace("%data%", this.projects[proj].title);
			$('.project-entry:last').append(projTitle);
            
            // dates
			var projDates = HTMLprojectDates.replace("%data%", this.projects[proj].dates);
			$('.project-entry:last').append(projDates);
            
            // description
            var projDescription = HTMLprojectDescription.replace("%data%", this.projects[proj].description);
            $('.project-entry:last').append(projDescription);
            
            // images (loop)
            if (projects.projects[proj].images.length > 0)
            {
                for (var img in projects.projects[proj].images)
                {
                    var projImage = HTMLprojectImage.replace("%data%", this.projects[proj].images[img]);
                    $('.project-entry:last').append(projImage);
                }
            }
        }
    }
};

var bio = {
    "name" : "Brian Futrell",
    "role" : "Web Developer",
    "welcomeMessage" : "Nice to meet you!",
    "biopic" : "images/fry.jpg",
    "contacts" : {
        "mobile" : "111-222-3333",
        "email" : "bfutrel@gmail.com",
        "github" : "bfutrell70",
        "location" : "Raleigh, NC 27616"
    },
    "skills" : [ "SQL Server", "ASP.NET", "C#", "JavaScript", "Windows", "Linux" ],
    "display" : function() {

        // ----------------------------------------------------------
        // NOTE: #header contains a <ul> with an ID of 'topContacts'
        //       before anything else is added!
        // ----------------------------------------------------------
    
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        $("#topContacts").prepend(formattedLocation);
    
        var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
        $("#topContacts").prepend(formattedGitHub);
    
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        $("#topContacts").prepend(formattedMobile);
    
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        $("#topContacts").prepend(formattedEmail);
    
        // role + <HR>
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#header").prepend(formattedRole);
    
        // name before role
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        $("#header").prepend(formattedName);
    
        // image after role
        var formattedImage = HTMLbioPic.replace("%data%", this.biopic);
        $("#header").append(formattedImage);
    
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);
        
        if (this.skills.length > 0)
        {
            // 'Skills at a glance'
            // also adds a UL with an ID of 'skills' and a class of 'flex-column'
            $("#header").append(HTMLskillsStart);
        
            var formattedSkill;
            for (var i = 0; i < bio.skills.length; i++)
            {
                formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var education = {
    "schools" : [
        {
            "name": "Zebulon High School",
            "location": "Zebulon, NC, US",
            "degree": "diploma",
            "yearOfGraduation": "1988",
            "majors": ["none"]
        },
        {
            "name": "Nash Technical Community College",
            "location": "Rocky Mount, NC, US",
            "degree": "Associate in Applied Science",
            "yearOfGraduation": "1996",
            "majors": ["Microcomputer Systems Technology"]
        },
        {
            "name": "Wake Tech Community College",
            "location": "Gaarner, NC, US",
            "degree": "Certificate in Visual Studio Programming",
            "yearOfGraduation": "2000?",
            "majors": ["none"]
        }
    ],
    "onlineCourses" : [
        {
            "name": "StackSkills",
            "url": "www.stackskills.com",
            "degree": "Learn Bootstrap Development By Building 10 Projects",
            "dates": "2014",
        },
        {
            "name": "StackSkills",
            "url": "www.stackskills.com",
            "degree": "Projects in JavaScript & JQuery",
            "dates": "2015",
        },
        {
            "name": "StackSkills",
            "url": "www.stackskills.com",
            "degree": "Learn Bootstrap Development By Building 10 Projects",
            "dates": "2015",
        },
        {
            "name": "Udacity",
            "url": "www.udacity.com",
            "degree": "How to Use Git and GitHub",
            "dates": "2016",
        },
        {
            "name": "Udacity",
            "url": "www.udacity.com",
            "degree": "How to Use Git and GitHub",
            "dates": "2016",
        }
    ],
    "display" : function() {
        // parent div for education has an ID of "education"
        // JavaScript on the index page checks for a class name of "education-entry"
        if (this.schools.length > 0 )
        {
            for (var school in this.schools)
            {
                $("#education").append(HTMLschoolStart);
                // name + degree
                var formattedNameDegree = HTMLschoolName.replace("%data%", this.schools[school].name);
                formattedNameDegree += HTMLschoolDegree.replace("%data%", this.schools[school].degree);
                $(".education-entry:last").append(formattedNameDegree);
                
                // dates
                var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].yearOfGraduation);
                $(".education-entry:last").append(formattedDates);

                // location
                var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
                $(".education-entry:last").append(formattedLocation);

                // major
                var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
                $(".education-entry:last").append(formattedMajor);
            }
        }

        if (this.onlineCourses.length > 0)
        {
            $("#education").append(HTMLonlineClasses);
            for (var online in this.onlineCourses)
            {
                $("#education").append(HTMLschoolStart);

                // title + school
                var formattedTitleSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[online].name);
                formattedTitleSchool += HTMLonlineTitle.replace("%data%", this.onlineCourses[online].degree);
                $(".education-entry:last").append(formattedTitleSchool);
                
                // dates
                var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[online].dates);
                $(".education-entry:last").append(formattedDates);

                // url
                var formattedUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[online].url);
                $(".education-entry:last").append(formattedUrl);
            }
        }
    }
};



// if (bio.skills.length > 0)
// {
//     // ----------------------------------------------------------
//     // NOTE: #header contains a <ul> with an ID of 'topContacts'
//     //       before anything else is added!
//     // ----------------------------------------------------------

//     var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
//     $("#topContacts").prepend(formattedLocation);

//     var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
//     $("#topContacts").prepend(formattedGitHub);

//     var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//     $("#topContacts").prepend(formattedMobile);

//     var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
//     $("#topContacts").prepend(formattedEmail);

//     // role + <HR>
//     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//     $("#header").prepend(formattedRole);

//     // name before role
//     var formattedName = HTMLheaderName.replace("%data%", bio.name);
//     $("#header").prepend(formattedName);

//     // image after role
//     var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
//     $("#header").append(formattedImage);

//     var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//     $("#header").append(formattedWelcomeMessage);

//     // 'Skills at a glance'
//     // also adds a UL with an ID of 'skills' and a class of 'flex-column'
//     $("#header").append(HTMLskillsStart);

//     var formattedSkill;
//     for (var i = 0; i < bio.skills.length; i++)
//     {
//         formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
//         $("#skills").append(formattedSkill);
//     }
// }
bio.display();

//$('#main').append(internationalizeButton);

projects.display();

education.display();

// used with the internationalize button
function inName() {
    var finalName = bio.name;

    // split by the space into 2 strings
    // proper case the first name, upper case the last name
    var index = bio.name.indexOf(" ");
    var firstName = bio.name.slice(0, index).toLowerCase();
    var lastName = bio.name.slice(index + 1).toUpperCase();
    
    firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1);
    
    finalName = firstName + " " + lastName;

    return finalName;
}

// function displayWork()
// {
//     // Lesson 5, Quiz 4: For-In loops
//     // 1) Write a for-in loop that iterates over all the jobs in your work object and
//     //    .append()s a new HTMLworkStart element for each one and ...
//     // 2) formats each job's employer with HTMLworkEmployer and each job title with
//     //    HTMLworkTitle ...
//     // 3) and .append()s a concatenation of employer and title each to the element with
//     //    class 'work-entry:last'.

//     $('#workExperience').append(HTMLworkStart);
//     for (var eachJob in work.jobs)
//     {
//         //console.log(work.jobs[eachJob].employer + ' added!');

//         if (work.jobs.hasOwnProperty(eachJob))
//         {
//             var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[eachJob].employer);
//             var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[eachJob].title);
    
//             //console.log(formattedEmployer + " " + formattedTitle);
    
//             // in index.html there is no element with a class of 'work-entry'....
//             $(".work-entry:last").append(formattedEmployer + " " + formattedTitle);
//             var formattedDates = HTMLworkDates.replace("%data%", work.jobs[eachJob].dates);
//             $(".work-entry:last").append(formattedDates);
//             // var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[eachJob].location);
//             // $(".work-entry:last").append(formattedLocation);

//             var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[eachJob].description);
//             $(".work-entry:last").append(formattedDescription);
//         }
//     }
// }

// displayWork();
work.display();

// required to use the Google Maps code within helper.js
// Lesson 5, item 15 - Customize the Portfolio
$('#mapDiv').append(googleMap);
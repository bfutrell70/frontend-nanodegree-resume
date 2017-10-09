var work = {
    "jobs" : [
        {
            "employer" : "Devil Dog Mfg.",
            "title" : "Warehouse Worker",
            "location" : "Zebulon, NC and Spring Hope, NC",
            "dates" : "1988-1995",
            "description": "Drove forklifts, color shaded cloth"
        },
        {
            "employer" : "Wizard Business Solutions, Inc./iBrain, Inc.",
            "title" : "Software Developer/Support Technician",
            "location" : "Raleigh, NC",
            "dates" : "1995-2012",
            "description" : "Wrote custom software that interfaced with Peachtree Accounting, Peachtree Complete Accounting, Peachtree Quantum and Sage 50 to allow users to submit W-2, 1099-MISC, direct deposit ECH, and quarterly unemployemt reports electronially. Also wrote software to create payroll reports that comply with the Davis-Bacon Act. "
        },
        {
            "employer" : "Stay Online Corp.",
            "title" : "Web Developer",
            "location" : "Creedmoor, NC",
            "dates" : "2012-present",
            "description" : "Backend web development, inhouse support"
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "CertPay Wizard",
            "dates" : "1998-2012",
            "description" : "Certified Payroll reporting for Peachtree Accounting/Sage 50 accounting software",
            "images" : [ "image1.jpg", "image2.jpg" ]
        },
        {
            "title" : "Direct Deposit Wizard",
            "dates" : "1998-2012",
            "description" : "Direct Deposit ACH file creation for Peachtree Accounting/Sage 50 accounting software",
            "images" : [ "image1.jpg", "image2.jpg" ]
        },
        {
            "title" : "WizMag W-2",
            "dates" : "1998-2012",
            "description" : "SSA W-2 wage reporting for Peachtree Accounting/Sage 50 accounting software",
            "images" : [ "image1.jpg", "image2.jpg" ]
        },
        {
            "title" : "WizMag 1099-MISC",
            "dates" : "1998-2012",
            "description" : "IRS 1099-MISC reporting for Peachtree Accounting/Sage 50 accounting software",
            "images" : [ "image1.jpg", "image2.jpg" ]
        },
        {
            "title" : "WizMag SUTA",
            "dates" : "1998-2012",
            "description" : "Quarterly state wage/unemployment reporting for Peachtree Accounting/Sage 50 accounting software",
            "images" : [ "image1.jpg", "image2.jpg" ]
        },
        {
            "title" : "EET Reporting",
            "dates" : "2016-2017",
            "description" : "Reporting of credit card purchases from eu.stayonline.com to Czech tax authority",
            "images" : [ "image1.jpg", "image2.jpg" ]
        },
        {
            "title" : "PDU Whip Configurator",
            "dates" : "2015-2016",
            "description" : "A complete rewrite of StayOnline's PDU Whip configurator",
            "images" : [ "image1.jpg", "image2.jpg" ]
        },
        {
            "title" : "Molded Cord Update",
            "dates" : "2016-2017",
            "description" : "Major update of Stayonline's Molded Cord configurator",
            "images" : [ "image1.jpg", "image2.jpg" ]
        },
		{
            "title" : "Drawing PDF Generator",
            "dates" : "2017",
            "description" : "Create a cord drawing PDF based on user selection",
            "images" : [ "image1.jpg", "image2.jpg" ]
        }
    ]
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
        "location" : "Raleigh, NC"
    },
    "skills" : [ "SQL Server", "ASP.NET", "C#", "JavaScript", "Windows", "Linux" ]
};

var education = {
    "schools" : [
        {
            "name": "Zebulon High School",
            "city": "Zebulon, NC, US",
            "degree": "diploma",
            "yearOfGraduation": "1988",
            "majors": ["none"]
        },
        {
            "name": "Nash Technical Community College",
            "city": "Rocky Mount, NC, US",
            "degree": "Associate in Applied Science",
            "yearOfGraduation": "1996",
            "majors": ["Microcomputer Systems Technology"]
        },
        {
            "name": "Wake Tech Community College",
            "city": "Zebulon, NC, US",
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
    ]
};



if (bio.skills.length > 0)
{
    // ----------------------------------------------------------
    // NOTE: #header contains a <ul> with an ID of 'topContacts'
    //       before anything else is added!
    // ----------------------------------------------------------

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    //$("#topContacts").apppend(formattedEmail);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    // $("#topContacts").apppend(formattedMobile);
    
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    // $("#topContacts").apppend(formattedGitHub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    // $("#topContacts").apppend(formattedLocation);

    // role + <HR>
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    // name before role
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    // image after role
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedImage);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    // 'Skills at a glance'
    // also adds a UL with an ID of 'skills' and a class of 'flex-column'
    $("#header").append(HTMLskillsStart);

    var formattedSkill;
    for (var i = 0; i < bio.skills.length; i++)
    {
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

function displayWork()
{
    // Lesson 5, Quiz 4: For-In loops
    // 1) Write a for-in loop that iterates over all the jobs in your work object and
    //    .append()s a new HTMLworkStart element for each one and ...
    // 2) formats each job's employer with HTMLworkEmployer and each job title with
    //    HTMLworkTitle ...
    // 3) and .append()s a concatenation of employer and title each to the element with
    //    class 'work-entry:last'.

    $('#workExperience').append(HTMLworkStart);
    for (var eachJob in work.jobs)
    {
        //console.log(work.jobs[eachJob].employer + ' added!');

        if (work.jobs.hasOwnProperty(eachJob))
        {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[eachJob].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[eachJob].title);
    
            //console.log(formattedEmployer + " " + formattedTitle);
    
            // in index.html there is no element with a class of 'work-entry'....
            $(".work-entry:last").append(formattedEmployer + " " + formattedTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[eachJob].dates);
            $(".work-entry:last").append(formattedDates);
            // var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[eachJob].location);
            // $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[eachJob].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

displayWork();

$(document).click(function(loc) {
    var xLoc = loc.pageX;
    var yLoc = loc.pageY;
    logClicks(xLoc, yLoc);
  }
);

// formattedSkills = HTMLskills.replace("%data%", bio.skills.join(","));

// var bio = {
//     "name" : "Brian Futrell",
//     "role" : "Web Developer",
//     "contactInfo" : {
//         mobile : "919-741-1959", 
//         location: "4201 Ferriday Court Raleigh, NC 27616", 
//         email: "bfutrel@gmail.com",
//         github: "bfutrell70"
//     },
//     "bioPic" : "images/fry.jpg",
//     "welcomeMessage" : "Nice to meet you!",
//     "skills" : ["C#", "ASP.NET", "SQL Server"]
// };

// var formattedName;
// var formattedRole;
// var formattedImage;
// var formattedWelcomeMessage;

// var formattedEmail;
// var formattedMobile;
// var formattedGitHub;
// var formattedLocation;
// var formattedSkills;

// formattedName = HTMLheaderName.replace("%data%", bio.name);
// formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
// formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

// formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
// formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
// formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.github);
// formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

// formattedSkills = HTMLskills.replace("%data%", bio.skills.join(","));

// // since the role and name need to be added before anything else prepend the role
// // first, then the name so that the name will appear first.
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var work = {};
// work.position = "Web Developer";
// work.employer = "StayOnline Corp";
// work.yearsWorked = 4;
// work.city = "Creedmoor";

// var education = {};
// education["name"] = "Wake Tech Community College";
// education["years"] = "1998-2000";
// education["city"] = "Raleigh, Garner";

// $("#header").append(formattedMobile);
// $("#header").append(formattedEmail);
// $("#header").append(formattedGitHub);
// $("#header").append(formattedLocation);

// $("#header").append(formattedImage);

// $("#header").append(formattedWelcomeMessage);
// $("#header").append(HTMLskillsStart);
// $("#header").append(formattedSkills);

// var formattedWorkPosition;
// var formattedSchoolName;

// formattedWorkPosition = HTMLworkTitle.replace("%data%",work.position);
// formattedSchoolName = HTMLschoolName.replace("%data%", education["name"]);
// $("#header").append(formattedWorkPosition);
// $("#header").append(formattedSchoolName);

// // Lesson 3, Item 21

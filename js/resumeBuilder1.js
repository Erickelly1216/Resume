
var work = {
  
  "jobs": [
    /*
    {
      "employer": "employer",
      "title": "title",
      "location": ["Huaian", [33.5524785, 119.1075773], "zz"],
      "dates": "Feb 2020 - Current",
      "description": "blabla"
    }
    */
  ]
 
};



var lang  = ((navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'en').substr(0, 2);
//console.log(lang);
function displayButton(){
    if(lang == 'de'){
        internationalizeButton = internationalizeButton.replace("%data%", 'en');
    }
    else{
        lang = 'en';
        internationalizeButton = internationalizeButton.replace("%data%", 'de');
    }
}
displayButton();


var bio = {
    name : {'zh': "马建鲁", 'de': "Jianlu Ma", 'en': "Jianlu Ma"},
    born : ["Jinan", [36.6507007, 117.1140042], "Born"],
    role: {'en':"Business Informatics", 'de': "Wirtschaftsinformatik", 'zh': "经济信息"},

    biopic : "images/744e2f77.jpg",
    welcomeMessage : {
        'de': "deutsch enm",
        'zh': "中文 啊",
        'en':  "english haha"
    },
    contacts:{
        mobile : "015125865092",
        email : "jan100212@hotmail.com",
    },
    skills : ["java", "python", "js", "df", "df", "df", "df"]
};

bio.display = function(){

    var formattedName = HTMLheaderName.replace("%data%", bio.name[lang]);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role[lang]);
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage[lang]);

    $("#header").prepend(formattedBioPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelcomeMessage);


    if(bio.skills.length > 0){

        $("#header").append(HTMLskillsStart);

        var i =0;
        while (i < bio.skills.length){
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);

            $("#skills").append(formattedSkill);

            i++;
        }
    }

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);

};

bio.display();



var education = {
    schools : [
        {
            name :{'de': "Universität Augsburg", 'en': "University of Augsburg", 'zh': "奥格斯堡大学"},
            location :["Augsburg", [48.3668041, 10.8986971], "WiMath"],
            major : {'de': "Wirtschaftsmathematik", 'en': "Economic Mathematics", 'zh': "经济数学"},
            degree : {'en': "Unfinished", 'de':"Nicht Abgeschlossen", 'zh': "未完成"},
            date : "2012",
            
            url : "https://www.uni-augsburg.de/de/fakultaet/mntf/math/studium/studiengaenge/wima"
        },
        {
            name :{'de': "Universität Duisburg-Essen", 'en': "University of Duisburg-Essen", 'zh': "杜伊斯堡-埃森大学"},
            location :["Essen", [51.4582235, 7.0158171], "WiInf"],
            major : {'de': "Wirtschaftsinformatik", 'en': "Business Informatics", 'zh': "经济信息"},
            degree : {'en': "Bachelor of Science", 'de': "Bachelor of Science", 'zh': "学士学位"},
            date : "2020",
            url : "https://www.uni-due.de/studienangebote/studiengang.php?id=110"
        }
    ]
};

education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name[lang]).replace("%url%",education.schools[school].url);

        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree[lang]);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].date);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location[0]);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major[lang]);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
    }
};

education.display();

var projects = {
    projects : [
        {
            title :{'de': "Software Entwicklung Projekt", 'en': "Software development projekt", 'zh': "软件开发"},
            dates:"10/2015 - 02/2016",
            description:{'en': "A Bomb-man Game Developed Using LibGDX", 'de': "Ein mit LibGDX entwickeltes Bomb-Man Spiel", 'zh': "使用LibGDX开发的炸弹人游戏"},
            images :
            [   
                ["images/projects/dfd_small.jpg", "images/projects/dfd_big.jpg","Datenfluss_Diagramm"],
                ["images/projects/createGame_small.png", "images/projects/createGame_big.png","Game_Creating(picture from the network)"]
            ]
        },

        {
            title :{'en':"Bachelor Project", 'de': "Bachelor Projekt", 'zh':"毕业设计"},
            dates:"04/2016 - 08/2016",
            description:{'en': "A Project Management Toolkit Developed Using Excel", 'de': "Ein mit Excel entwickeltes Projektmanagement-Toolkit", 'zh': "使用excel开发的项目管理软件"},
            images :
            [
                ["images/projects/bp1_small.png","images/projects/bp1_big.png", "BP1"],
                ["images/projects/bp2_small.png","images/projects/bp2_big.png", "BP2"],
                ["images/projects/bp3_small.png","images/projects/bp3_big.png", "BP3"]
            ]
        }
    ],
    display : function(){

        for(project in projects.projects){
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title[lang]);
            $(".project-entry:last").append(formattedTitle);

            var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDate);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description[lang]);
            $(".project-entry:last").append(formattedDescription);

            if(projects.projects[project].images.length>0){
                
                $(".project-entry:last").append('<div class="row">');
                for(image in projects.projects[project].images){
                    var formattedImage = HTMLprojectImage.replace("%big_image%",projects.projects[project].images[image][1]).replace("%thumb_image%",projects.projects[project].images[image][0]).replace("%description%",projects.projects[project].images[image][2]);
                   
                    $(".row:last").append(formattedImage);
                }

            }

        }
    }
};
projects.display();

function displayWork(){
    if(work.jobs.length > 0){

        for (job in work.jobs){

           
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location[0]);
            $(".work-entry:last").append(formattedLocation);

            var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDate);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);



        }
    }
}

displayWork();




function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var firstName = oldName.split(" ")[0];
    var lastName = oldName.split(" ")[1];

    firstName= firstName.charAt(0).toUpperCase()+firstName.slice(1).toLowerCase();
    lastName = lastName.toUpperCase();

    finalName = firstName + " " +lastName;
    // Don't delete this line!
    return finalName;
}

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

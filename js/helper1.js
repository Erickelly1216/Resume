 /*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">Mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">E-mail</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span id="welcome_message" class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a id="%pTitle%">%data%</a>';//'<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p id="%pDescription%"><br>%data%</p>';//'<p><br>%data%</p>';
var HTMLprojectImage = '<a href="%big_image%" data-lightbox="roadtrip" data-title="%description%">      <img src="%thumb_image%"></a>';
//'<img src="%data%">';
// used to zoom in after image been clicked
//'<div class="click-zoom"><label><input type="checkbox"><img src="%data%"></label></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a id="%sName%" href="%url%">%data%';//'<a href="%url%">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div id="%sLocation%" class="location-text">%data%</div>';
var HTMLschoolMajor = '<em id="%sMajor%" ><br>Major: %data%</em>';//'<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button class="button" id="button">%data%</button>';
var googleMap = '<div id="map"></div>';

var de_projects = "Projekts";
var de_education = "Ausbildugen";
var de_places = "Wo ich studiert und gelebt habe";
var de_skills_h3 = 'Fähigkeiten auf einen Blick:';
var de_contact = 'Kontakt';
var de_workExperience = "Berufserfahrungen";

var en_projects = "Projects";
var en_education = "Education";
var en_places = "Places I studied and lived";
var en_skills_h3 = 'Skills at a Glance:';
var en_contact = 'Contact';
var en_workExperience = 'Work Experience';

var zh_projects = "项目举例";
var zh_education = "教育程度";
var zh_places = "我住过和学习过的地方";
var zh_skills_h3 = '技能概览:';
var zh_contact = '联系方式';
var zh_workExperience = "工作经历";


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires
you to create a function that will need this helper code to run.
Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
    $('button').click(function() {
    /*
    var $name = $('#name');
    var iName = nameChanger($name.text()) || function(){};
    $name.html(iName);
    */
    var s = $('#button');

    if(s.text()=='de'){
        displayDe();
    }
    else if(s.text()=='en'){
        displayEn();

    }
    else if(s.text()=='zh'){
        displayZh();
    }

    // condition1 ? result1 : condition2 ? result3 : result4
    s.html(s.text() == 'de' ? 'zh' : s.text() == 'zh' ? 'en': 'de');

  });
});


function displayDe(){
    $('#name').html(bio.name.de);

    $('#welcome_message').html(bio.welcomeMessage.de);

    $('#role').html(bio.role.de);

    $('#skills-h3').html(de_skills_h3);

    $("#t_projects").html(de_projects);

    $("#t_education").html(de_education);

    $("#t_places").html(de_places);

    $("#t_contact").html(de_contact);

    $("#t_workExperience").html(de_workExperience);

    // change the html part with the corresponding translation of each school in education.schools
    for (school in education.schools){
        $("#"+school+"sName").html(education.schools[school].name.de +' -- '+education.schools[school].degree.de);
        $("#"+school+"sMajor").html("<br>"+"Fach: " + education.schools[school].major.de);
        $("#"+school+"sLocation").html(education.schools[school].location.de[0]);
    }

    for (project in projects.projects){
        $("#"+project+"pTitle").html(projects.projects[project].title.de);
        $("#"+project+"pDescription").html("<br>"+projects.projects[project].description.de);
    }
}

function displayEn(){
    $('#name').html(bio.name.en);

    $('#welcome_message').html(bio.welcomeMessage.en);

    $('#role').html(bio.role.en);

    $('#skills-h3').html(en_skills_h3);

    $("#t_projects").html(en_projects);

    $("#t_education").html(en_education);

    $("#t_places").html(en_places);

    $("#t_contact").html(en_contact);

    $("#t_workExperience").html(en_workExperience);

    for (school in education.schools){
        $("#"+school+"sName").html(education.schools[school].name.en+ ' -- '+education.schools[school].degree.en);
        $("#"+school+"sMajor").html("<br>"+"Major: " + education.schools[school].major.en);
        $("#"+school+"sLocation").html(education.schools[school].location.en[0]);
    }

    for (project in projects.projects){
        $("#"+project+"pTitle").html(projects.projects[project].title.en);
        $("#"+project+"pDescription").html("<br>"+projects.projects[project].description.en);
    }
}

function displayZh(){

    $('#name').html(bio.name.zh);

    $('#welcome_message').html(bio.welcomeMessage.zh);

    $('#role').html(bio.role.zh);

    $('#skills-h3').html(zh_skills_h3);

    $("#t_projects").html(zh_projects);

    $("#t_education").html(zh_education);

    $("#t_places").html(zh_places);

    $("#t_contact").html(zh_contact);

    $("#t_workExperience").html(zh_workExperience);

    for (school in education.schools){
        $("#"+school+"sName").html(education.schools[school].name.zh +' -- '+education.schools[school].degree.zh);
        // here we have to manually add the "<br>"+"专业:" cause they are regarded as the content of html(text)
        $("#"+school+"sMajor").html("<br>"+"专业: " +education.schools[school].major.zh);
        $("#"+school+"sLocation").html(education.schools[school].location.zh[0]);
    }

    for (project in projects.projects){
        $("#"+project+"pTitle").html(projects.projects[project].title.zh);
        $("#"+project+"pDescription").html("<br>"+projects.projects[project].description.zh);
    }
}

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control
from JavaScript Basics.
*/
/*
function locClicks(x,y){
    console.log("x: " + x,"y: " + y);
}


$(document).click(function(loc) {
    // 在此处编写你的代码
    locClicks(loc.pageX,loc.pageY);
});
*/


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var mymap; //= L.map('map')//.setView([51.4582235, 7.0158171], 13);

  //var locations;

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.born[lang]);
    //console.log("bio:" + locations);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    if(education.schools.length > 0){
      education.schools.forEach(function(school){
        //console.log("education:" + school.location);
        locations.push(school.location[lang]);
      });
    }

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    if(work.jobs.length > 0){
      work.jobs.forEach(function(job){
        //console.log("work:" + job.location);
        locations.push(job.location);
      });
    }

    return locations;
  }
  //locations = locationFinder();
  //console.log(locations);



    mymap = L.map('map');
    markersList = locationFinder();

    //console.log(markersList);

    var markers = [];
    for (var i = 0; i < markersList.length; i++) {
        markers.push(new L.marker(markersList[i][1]).bindPopup("<b>"+markersList[i][0]+"</b>"+"<br />"+markersList[i][2]).openPopup());
    }

    var group = new L.featureGroup(markers).addTo(mymap);
    mymap.fitBounds(group.getBounds());


    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        minZoom: 1,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        maxNativeZoom: 18
    }).addTo(mymap);


}



// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

 
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
var HTMLprojectTitle = '<a>%data%</a>';//'<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<a href="%big_image%" data-lightbox="roadtrip" data-title="%description%">      <img src="%thumb_image%"></a>';
//'<img src="%data%">';
// used to zoom in after image been clicked
//'<div class="click-zoom"><label><input type="checkbox"><img src="%data%"></label></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="%url%">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

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
var de_skills_h3 = 'Fähigkeiten auf einen Blick';
var de_contact = 'Kontakt';
var de_workExperience = "Berufserfahrungen";

var en_projects = "Projects";
var en_education = "Education";
var en_places = "Places I studied and lived";
var en_skills_h3 = 'Skills at a Glance';
var en_contact = 'Contact';
var en_workExperience = 'Work Experience';

var c_projects = "项目举例";
var c_education = "教育程度";
var c_places = "我住过和学习过的地方";
var c_skills_h3 = '技能概览';
var c_contact = '联系方式';
var c_workExperience = "工作经历";


$(document).ready(function() {
  $('button').click(function() {

    var s = $('#button');

    if(s.text()=='de'){

      $('#name').html(bio.name.de);

      $('#welcome_message').html(bio.welcomeMessage.de);

      $('#role').html(bio.role.de);

      $('#skills-h3').html(de_skills_h3);

      $("#t_projects").html(de_projects);

      $("#t_education").html(de_education);

      $("#t_places").html(de_places);

      $("#t_contact").html(de_contact);

      $("#t_workExperience").html(de_workExperience);

    } else
      if(s.text()=='en'){

      $('#name').html(bio.name.en);

      $('#welcome_message').html(bio.welcomeMessage.en);

      $('#role').html(bio.role.en);

      $('#skills-h3').html(en_skills_h3);

      $("#t_projects").html(en_projects);

      $("#t_education").html(en_education);

      $("#t_places").html(en_places);

      $("#t_contact").html(en_contact);

      $("#t_workExperience").html(en_workExperience);

    } else
      if(s.text()=='zh'){

      $('#name').html(bio.name.zh);

      $('#welcome_message').html(bio.welcomeMessage.zh);

      $('#role').html(bio.role.zh);

      $('#skills-h3').html(c_skills_h3);

      $("#t_projects").html(c_projects);

      $("#t_education").html(c_education);

      $("#t_places").html(c_places);

      $("#t_contact").html(c_contact);

      $("#t_workExperience").html(c_workExperience);

    }

    // condition1 ? result1 : condition2 ? result3 : result4
    s.html(s.text() == 'de' ? 'zh' : s.text() == 'zh' ? 'en': 'de');

  });
});







  var mymap;


function initializeMap() {

  function locationFinder() {
   
    var locations = [];

    locations.push(bio.born);
    //console.log("bio:" + locations);
  
    if(education.schools.length > 0){
      education.schools.forEach(function(school){
        //console.log("education:" + school.location);
        locations.push(school.location);
      });
    }

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


window.addEventListener('load', initializeMap);


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

var HTMLskillsStart = '<button class="collapsible" id="skills-h3"></button>';
var HTMLskills = '<li id="skill-container" class="flex-item"><span class="white-text">%data%</span></li>';
var vennChart=   '<div id="vennChart-container"></div>';
var wordChart=  '<div id="wordChart-container"></div>';


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

var internationalizeButton = '<button class="button" id="button1">%data%</button>';
var googleMap = '<div id="map"></div>';

var de_projects = "Projektbeispiele";
var de_education = "Ausbildugen";
var de_places = "Wo ich studiert und gelebt habe";
var de_skills_h3 = 'Mehr über das Fach und meine technischen Fähigkeiten:';
var de_contact = 'Kontakt';
var de_workExperience = "Berufserfahrungen";
var de_title = "Lebenslauf";

var en_projects = "Project examples";
var en_education = "Education";
var en_places = "Places I studied and lived";
var en_skills_h3 = 'More about my subject and technical skills:';
var en_contact = 'Contact';
var en_workExperience = 'Work Experience';
var en_title = "Resume";

var zh_projects = "项目举例";
var zh_education = "教育程度";
var zh_places = "我住过和学习过的地方";
var zh_skills_h3 = '更多关于我的专业和技能:';
var zh_contact = '联系方式';
var zh_workExperience = "工作经历";
var zh_title = "简历";

$(document).ready(function() {
    $('#button1').click(function() {
        /*
        var $name = $('#name');
        var iName = nameChanger($name.text()) || function(){};
        $name.html(iName);
        */
        var s = $('#button1');

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
    var coll = document.getElementsByClassName("collapsible");

    coll[0].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = document.getElementById("skill-image");
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
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
    
    $("#t_title").html(de_title);

    // change the html part with the corresponding translation of each school in education.schools
    for (school in education.schools){
        $("#"+school+"sName").html(education.schools[school].name.de);// +' -- '+education.schools[school].degree.de);
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
    
    $("#t_title").html(en_title);

    for (school in education.schools){
        $("#"+school+"sName").html(education.schools[school].name.en);//+ ' -- '+education.schools[school].degree.en);
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
    
    $("#t_title").html(zh_title);

    for (school in education.schools){
        $("#"+school+"sName").html(education.schools[school].name.zh);// +' -- '+education.schools[school].degree.zh);
        // here we have to manually add the "<br>"+"专业:" cause they are regarded as the content of html(text)
        $("#"+school+"sMajor").html("<br>"+"专业: " +education.schools[school].major.zh);
        $("#"+school+"sLocation").html(education.schools[school].location.zh[0]);
    }

    for (project in projects.projects){
        $("#"+project+"pTitle").html(projects.projects[project].title.zh);
        $("#"+project+"pDescription").html("<br>"+projects.projects[project].description.zh);
    }
}


function initializeMap() {

    var mymap; 
    function locationFinder() {

    // initializes an empty array
    var locations = [];
    locations.push(bio.born[lang]);
    //console.log("bio:" + locations);

    if(education.schools.length > 0){
      education.schools.forEach(function(school){
        //console.log("education:" + school.location);
        locations.push(school.location[lang]);
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

anychart.onDocumentReady(function () {

    // create a chart and set the data
    chart = anychart.venn(bio.skills.subject[lang]);

    // configure labels of intersections (>2 elements)
      chart.intersections().labels().format(function() {
        if (this.x.length > 2)
          return this.name;
      });

    // configure tooltips of circles
    chart.tooltip().format(
        "{%custom_field}"
    );

     // configure tooltips of intersections
    chart.intersections().tooltip().format(
        "{%custom_field}"
    );

    // disable the legend
    chart.legend(false);

    // set the container id
    chart.container('vennChart-container');

    // initiate drawing the chart
    chart.draw();
});



anychart.onDocumentReady(function () {

    // create a chart and set the data
    var chart = anychart.wordtree(bio.skills.skills, "as-tree");

    // set the container id
    chart.container("wordChart-container");

    var tooltip = chart.tooltip();
    tooltip.format("{%description}");

    chart.maxFontSize(20);
    chart.minFontSize(10);

    // initiate drawing the chart
    chart.draw();
});

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

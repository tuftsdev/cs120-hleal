var myLat = 0;
var myLng = 0;
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
  zoom: 12,
  center: me,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map;
var marker;
var infowindow = new google.maps.InfoWindow();

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), myOptions);
  getMyLocation();
}

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      myLat = position.coords.latitude;
      myLng = position.coords.longitude;
      renderMap();
    });
  }
  else {
    alert("Geolocation is not supported by your web browser.")
  }
}

function renderMap() {
  me = new google.maps.LatLng(myLat, myLng);

  map.panTo(me);

  marker = new google.maps.Marker({
    position: me,
    title: "You are here."
  });
  marker.setMap(map);

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(marker.title);
    infowindow.open(map, marker);
  });
}

function loadRides() {
  console.log("Inside loadCars() JavaScript function...");

  console.log("Making instance of XHR...");
  request = new XMLHttpRequest();

  console.log("Opening XHR...");
  request.open("GET", "https://hidden-thicket-65890.herokuapp.com/rides");

  request.onreadystatechange = function() {
    console.log("Ready state has changed! Inside of callback() function")
    console.log("readyState == " + request.readyState);
    if (request.readyState == 4 && request.status == 200) {
      resultingData = request.responseText;
      ridesData = JSON.parse(resultingData);

    }
  }
}

/* From Lab 8, initializing map
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.352271, lng: -71.05524200000001 },
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  infoWindow = new google.maps.InfoWindow();


//From Lab 8, setting markers to map
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(42.3453, -71.0464),
    map: map,
    icon: "./car.png",
    title: "mXfkjrFw",
  });

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(42.3662, -71.0621),
    map: map,
    icon: "./car.png",
    title: "nZXB8ZHz",
  });

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(42.3603, -71.0547),
    map: map,
    icon: "./car.png",
    title: "Tkwu74WC",
  });

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(42.3472, -71.0802),
    map: map,
    icon: "./car.png",
    title: "5KWpnAJN",
  });

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(42.3663, -71.0544),
    map: map,
    icon: "./car.png",
    title: "uf5ZrXYw",
  });

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(42.3542, -71.0704),
    map: map,
    icon: "./car.png",
    title: "VMerzMH8",
  });
}
*/
window.initMap = initMap;

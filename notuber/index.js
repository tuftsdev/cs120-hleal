var map;
var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.352271, lng: -71.05524200000001 },
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  setMarkers(map);
}

var cars = [
  ["mXfkjrFw", 42.3453, -71.0464, 1],
  ["nZXB8ZHz", 42.3662, -71.0621, 2],
  ["Tkwu74WC", 42.3603, -71.0547, 3],
  ["5KWpnAJN", 42.3472, -71.0802, 4],
  ["uf5ZrXYw", 42.3663, -71.0544, 5],
  ["VMerzMH8", 42.3542, -71.0704, 6],
];

/*var marker, i;

for (i = 0; i <cars.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(cars[i][1], cars[i][2], cars[i][3], cars[i][4], cars[i][5], cars[i][6]),
    map: map,
    icon: image,
  })
  const image = "notuber/car.png";
}*/

function setMarkers(map) {
  const image = "notuber/car.png";

  var marker = new google.maps.Marker({
    position: { lat: cars[1], lng: cars[2] },
    map: map,
    icon: image,
    title: cars[0],
  });
  marker.setMap(map);
}

window.initMap = initMap;
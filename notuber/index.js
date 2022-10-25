var map;
var marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.352271, lng: -71.05524200000001 },
    zoom: 12,
    mapTypeId: 'roadmap'
  });
  setMarkers(map);
}

//const cars: [String, Number, Number, Number][] = [
  //["mXfkjrFw", 42.3453, -71.0464, 1],
  //["nZXB8ZHz", 42.3662, -71.0621, 2],
  //["Tkwu74WC", 42.3603, -71.0547, 3],
  //["5KWpnAJN", 42.3472, -71.0802, 4],
  //["uf5ZrXYw", 42.3663, -71.0544, 5],
  //["VMerzMH8", 42.3542, -71.0704, 6],
//];

function setMarkers(map) {
  const image = "notuber/car.png";

  marker = new google.maps.Marker({
    position: { lat: cars[1], lng: cars[2] },
    map,
    icon: image,
    title: cars[0],
  });
  marker.setMap(map);
}

window.initMap = initMap;
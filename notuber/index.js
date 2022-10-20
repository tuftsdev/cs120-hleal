let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.352271, lng: -71.05524200000001 },
    zoom: 12,
  });
  setMarkers(map);
}

const cars = [
  ["mXfkjrFw", 42.3453, -71.0464, 1],
  ["nZXB8ZHz", 42.3662, -71.0621, 2],
  ["Tkwu74WC", 42.3603, -71.0547, 3],
  ["5KWpnAJN", 42.3472, -71.0802, 4],
  ["uf5ZrXYw", 42.3663, -71.0544, 5],
  ["VMerzMH8", 42.3542, -71.0704, 6],
];

function setMarkers(map) {
  const image = "notuber/car.png";
  new google.maps.Marker( {
    position: { lat: cars[1], lng: cars[2] },
    map,
    icon: image,
    title: cars[0],
  });
}

window.initMap = initMap;

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhXJr5eCkwhUUWGi7t1Hpi8Uo8PRHkH64&callback=initMap&region=US';
script.async = true;

// Attach your callback function to the `window` object
//window.initMap = function() {
  // JS API is loaded and available
//};

// Append the 'script' element to 'head'
//document.head.appendChild(script);
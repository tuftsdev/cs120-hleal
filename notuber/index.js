var map;
var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.352271, lng: -71.05524200000001 },
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

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

window.initMap = initMap;
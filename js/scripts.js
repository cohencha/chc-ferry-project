// general information to start

mapboxgl.accessToken = 'pk.eyJ1IjoiY29oZW5jaGEiLCJhIjoiY2t6dW12Zm1mMDhnbzJvbXl1cmYxY3BpNyJ9.qTcZ7QT6P96dIYJjSniWVw'

$.getJSON('./data/ferry-stops-updates.geojson', function(nycferrystops) {
  console.log(nycferrystops)

// map basics

var nycCenter = [-73.997456, 40.730831]

var map = new mapboxgl.Map({
  container: 'mapContainer', // HTML container id
  style: 'mapbox://styles/mapbox/dark-v9', // style URL
  center: nycCenter, // starting position as [lng, lat]
  zoom: 9,
  maxZoom: 10
});

// add markers for ferry stops

  nycferrystops.features.forEach(function(nycferrystop) {
    var mapMarker = new mapboxgl.Marker({
      color: '#2596be'
    })
    .setLngLat(nycferrystop.geometry.coordinates)
    .addTo(map);
  })

//filter by line(s)



//fly to wall street



//add weekday and weekend averages to sidebar




//scroll for distance from wall street


// add layer for popuplation density by census tract 
// add layer for 15 min distance by walking from each pier




//legend



})

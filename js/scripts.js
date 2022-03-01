mapboxgl.accessToken = 'pk.eyJ1IjoiY29oZW5jaGEiLCJhIjoiY2t6dW12Zm1mMDhnbzJvbXl1cmYxY3BpNyJ9.qTcZ7QT6P96dIYJjSniWVw'

$.getJSON('./data/ferry-stops-updates.geojson', function(nycferrystops) {
  console.log(nycferrystops)

var nycCenter = [-73.997456, 40.730831]

var map = new mapboxgl.Map({
  container: 'mapContainer', // HTML container id
  style: 'mapbox://styles/mapbox/dark-v9', // style URL
  center: nycCenter, // starting position as [lng, lat]
  zoom: 9,
  // minZoom: 9,
  // maxZoom: 14
});


  nycferrystop.forEach(function(nycferrystops) {
    var mapMarker = new mapboxgl.Marker({
      color: '#2596be'
    })
    .setLngLat(nycferrystops.geometries.coordinates)
    .addTo(map);
  })

  // map.addSource('nyc-mhi', {
  //   type: 'geojson',
  //   data: './data/nyc-mhi.geojson'
  // })
  //
  //   map.addLayer({
  //     'id': 'nyc-mhi-fill',
  //     'type': 'fill',
  //     'source': 'nyc-mhi',
  //     'layout': {
  //       'visibility': 'visible'
  //     },
  //     'paint': {
  //       'fill-color': [
  //         'interpolate',
  //         ['linear'],
  //         ['get', 'incomeedit_Refactored_estimate'],
  //         0,
  //         '#edf8fb',
  //         33966,
  //         '#b2e2e2',
  //         55898,
  //         '#66c2a4',
  //         70390,
  //         '#2ca25f',
  //         93366,
  //         '#006d2c',
  //       ],
  //       'fill-outline-color': '#ccc',
  //       'fill-opacity': 0.75
  //     }
  //   });

})

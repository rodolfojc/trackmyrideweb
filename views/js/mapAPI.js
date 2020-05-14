

// Main properties of a map
//set the map in Dublin City Centre
var mymap = L.map('mapid').setView([51.44, -1.01], 7);
    


L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.{ext}', {
      subdomains: 'abcd',
      //minZoom: 8,
      maxZoom: 20,
      ext: 'png'
    }).addTo(mymap);

// https://github.com/mapbox/leaflet-omnivore#custom-layers
var customLayer = L.geoJSON(null, {
    // Convert the easting/northing from the CSV file into lat/lng for Leaflet.
    // http://leafletjs.com/reference.html#geojson-coordstolatlng
    coordsToLatLng: projCoordsToLatLng
  });
  mymap.addLayer(customLayer);

   // Tell omnivore/csv2geojson which columns in the CSV file correspond to coordinates.
    // https://github.com/mapbox/csv2geojson#api
    var csv2geojsonOptions = {
        latfield: 'northing',
        lonfield: 'easting',
        delimiter: ','
      }

   // Pass the parser_options and customLayer to omnivore.csv
    // https://github.com/mapbox/leaflet-omnivore#api
    var dataset = omnivore.csv('./csvtest.csv', csv2geojsonOptions, customLayer).addTo(mymap);

    var osgb = '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs ';
    var wgs84 = '+proj=longlat +datum=WGS84 +no_defs ';

    console.log(projCoordsToLatLng([514545.49, 215008.4]));

    function projCoordsToLatLng(coords) {
      return lngLatToLatLng(proj4(osgb, wgs84, coords));
    }

    function lngLatToLatLng(lngLat) {
      return [lngLat[1], lngLat[0]]
    }
    

   
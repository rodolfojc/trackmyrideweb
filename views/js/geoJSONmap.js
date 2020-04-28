//set the map in Dublin City Centre
var mymap = L.map('mapid').setView([53.347557, -6.259317], 13);
//main map layer
var layer = L.geoJSON().addTo(mymap);
layer.addData(geojsonFeature);

var somefeatures = [{
    "type": "Feature",
    "properties": {
        "name": "Somewhere",
        "amenity": "Rack",
        "popupContent": "3 stands"
    },
       "geometry": {
        "type": "Point",
        "coordinates": [-6.251764, 53.35183]
    }

},
{
"type": "Feature",
    "properties": {
        "name": "Another Place",
        "amenity": "Rack",
        "popupContent": "3 stands"
    },
       "geometry": {
        "type": "Point",
        "coordinates": [-6.249543, 53.352218]
    }

}
];

//L.geoJSON(geojsonFeature).addTo(mymap);

L.geoJSON(somefeatures, {
    filter: function(feature, layer) {
        return feature.properties.show_on_map;
    }
}).addTo(mymap);


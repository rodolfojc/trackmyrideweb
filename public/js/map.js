
// Main properties of a map
//set the map in Dublin City Centre
var mymap = L.map('mapid').setView([53.347557, -6.259317], 13);
    
//main map layer
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
//add layer to the map
mymap.addLayer(layer);

//pin a specific location
var marker = L.marker([53.347557, -6.259317]).addTo(mymap);

//add pop up to the marker
marker.bindPopup("<b>numberOfStands: 8</b><br>type: Sheffield Stand").openPopup();

var geoJson = {
    type: "FeatureCollection",
    features: 
    [
        {
            type: "Feature",
            geometry: 
            {
            type: "Point",
            coordinates: 
            [
            -6.243576,
            53.346026
            ]
            },
            properties: 
            {
            checked: true,
            id: "557990",
            name: "Lime Street",
            notes: "",
            numberOfStands: 40,
            source: "DublinBikes",
            thefts: [ ],
            type: "DublinBikes",
            verified: true
            }
            },
            {
            type: "Feature",
            geometry: 
            {
            type: "Point",
            coordinates: 
            [
            -6.260177,
            53.330662
            ]
            },
            properties: 
            {
            checked: true,
            id: "c6da28",
            name: "Charlemont Street",
            notes: "",
            numberOfStands: 40,
            source: "DublinBikes",
            thefts: [ ],
            type: "DublinBikes",
            verified: true
            }
            },
            {
            type: "Feature",
            geometry: 
            {
            type: "Point",
            coordinates: 
            [
            -6.310015,
            53.342113
            ]
            },
            properties: 
            {
            checked: true,
            id: "91cc6b",
            name: "Kilmainham Gaol",
            notes: "",
            numberOfStands: 40,
            source: "DublinBikes",
            thefts: [ ],
            type: "DublinBikes",
            verified: true
            }
            },
            
]
}

    //add multiple locations to the map using geoJson
   // L.geoJSON(geoJson).addTo(mymap);

   var popup = L.popup();
   
    //Create a personalized marker
   var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

function onEachFeature(feature, layer){
    if (feature.properties && feature.properties.id) {
        layer.bindPopup(feature.properties.id);
    }

}

    
    L.geoJSON(geoJson, {
        //add multiple locations with personalised marker using geoJson
        pointToLayer: function(feature, latlng){
            return L.circleMarker(latlng, geojsonMarkerOptions);
           },

        onEachFeature: onEachFeature,
           
           
        
    }).addTo(mymap);

   // Layer groups for filters
//new layer, could be used for nightime map
var difflayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(mymap);

//add layer to the map
    mymap.addLayer(layer);


    //checkbox option 1 with racks
var racks = L.layerGroup([
    L.marker([53.348046, -6.268652]),
    L.marker([53.349017, -6.2554])
]);

//checkbox option 2 with hotspot circles
var hotspot = L.layerGroup([
    L.circle([53.347557, -6.259317], {
                color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 25
        })
]);


//Radio buttons to switch layers
L.control.layers({
        'Racks': layer,
        'Hotspots': difflayer,
    }, 
    //check box with options - not exclusively
    {
        'Markers #1': racks,
        'Markers #2': hotspot
    }).addTo(mymap);
    //add layers control to the map
    L.control.scale().addTo(mymap);

    
    

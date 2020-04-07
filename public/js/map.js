// Main properties of a map

//set the map in Dublin City Centre
var mymap = L.map('mapid').setView([53.347557, -6.259317], 13);
    
//main map layer
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

//pin a specific location
var marker = L.marker([53.347557, -6.259317]).addTo(mymap);

//add pop up to the marker
marker.bindPopup("<b>numberOfStands: 8</b><br>type: Sheffield Stand").openPopup();

//add layer to the map
mymap.addLayer(layer);


// Layer groups for filters
//new layer, could be used for nightime map
var difflayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(mymap);

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
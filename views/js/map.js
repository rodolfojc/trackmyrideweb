// const axios =  require('axios');

// const geoJSON2 = async () => {
//     let response = null;

//     try{
//         response = await axios({
//         method: "GET",
//         url: "http://34.247.183.192:3000/getracks",
//         headers: {}, 
//         data: {}
//       });
//         //console.log(response);
//       }catch (err) {
//         console.log(err.message)
//       }

//     return response;
// };

// Main properties of a map
//set the map in Dublin City Centre
// var mymap = L.map('mapid').setView([53.347557, -6.259317], 13);


var APIUrl = 'https://cors-anywhere.herokuapp.com/http://34.247.183.192:3000/getracks';
var geoJson;
var lt;
var ln;
var id;
// function getRacks() {
    
//     $.getJSONuncached = function (url) {
//       console.log("Executed");
//       return $.ajax({
//         url: url,
//         type: "GET",
//         cache: false,
//         success: function (JSONdata) {                     
//             geoJson = JSONdata;    
//             console.log("Inside function" + geoJson);   
//             return geoJson;   
//         },        
//       });
//     };
//     $.getJSONuncached(APIUrl);   
//     console.log("Return" + geoJson); 
   
      
// };
// var mymap = L.map('mapid', { 
//     zoomControl: false //Remove default zoom control from the left side
// }).setView([53.347557, -6.259317], 13);


// var counties = $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/http://34.247.183.192:3000/getracks",
//     dataType: "json",
//     success: console.log("County data successfully loaded." ),
//     error: function(xhr) {
//         alert(xhr.statusText)
//     }
// })
// $.when(counties).done(function() {
    
//     var mapWithRackMarkers = L.geoJSON(counties.responseJSON, {
//         //add multiple locations with personalised marker using geoJson
//         pointToLayer: function(feature, latlng){
//            return L.marker(latlng, {
//                icon: fontAwesomeIcon
//            });
           
//             // return L.circleMarker(latlng, geojsonMarkerOptions);
//            },

//         onEachFeature: onEachFeature,
//     }).addTo(mymap);
//    console.log(counties.responseJSON) 
// });



// $(document).ready(function () {

// console.log(counties);
   
// });

var mymap = L.map('mapid', { 
        zoomControl: false //Remove default zoom control from the left side
    }).setView([53.347557, -6.259317], 13);



//Create new zoom control on the right side of the map    
L.control.zoom({
position:'topright'
}).addTo(mymap);
    
//main map layer
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
//add layer to the map
mymap.addLayer(layer);

//pin a specific location - JUST FOR TESTE, DELETE IT IN THE END
//var marker = L.marker([53.347557, -6.259317]).addTo(mymap);

//add pop up to the marker - JUST FOR TESTE, DELETE IT IN THE END
//marker.bindPopup("<b>numberOfStands: 8</b><br>type: Sheffield Stand").openPopup();

// var geoJson = geoJSON2();
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
   var hotspotMarker = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var rackMarker = L.icon({
    iconUrl: 'img/bikelogo.png',
    iconSize:     [40, 60], // size of the icon
    iconAnchor:   [20, 55], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

const fontAwesomeIcon = L.divIcon({
    html: '<i class="fas fa-flag fa-2x"></i>',
    // iconSize: [300, 300],
    className: 'myDivIcon',
    iconAnchor:   [5, 20]
});

//new layer, could be used for nightime map
var difflayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(mymap);    

//Add a pop up on each marker
function onEachFeature(feature, layer){
    layer.bindPopup('Name: '+ feature.properties.name +'<br> Stands: '+feature.properties.numberOfStands +
   '<button class="btn btn-outline-info btn-sm" id="chatToggle">Report</button>'
    );
    layer.on('click', function (e) {
    lt = e.latlng.lat;
    ln = e.latlng.lng;
    rackId = feature.properties.id;
        console.log(rackId + ' ' + lt + ', ' + ln);
        
  });
}

    
    var mapWithRackMarkers = L.geoJSON(geoJson, {
        //add multiple locations with personalised marker using geoJson
        pointToLayer: function(feature, latlng){
           return L.marker(latlng, {
               icon: fontAwesomeIcon
           });
           
            // return L.circleMarker(latlng, geojsonMarkerOptions);
           },

        onEachFeature: onEachFeature,
    }).addTo(mymap);

    var mapWithHotspotsMarkers = L.geoJSON(geoJson, {
        //add multiple locations with personalised marker using geoJson
        pointToLayer: function(feature, latlng){
             return L.circleMarker(latlng, hotspotMarker);
           },

        onEachFeature: onEachFeature,
    }).addTo(mymap);


    //When button is clicked, toggle the Racks markers 
    $(document).on('click', '#showRacks', function() {
        //If markers are visible, hide it
        if(mymap.hasLayer(mapWithRackMarkers)){
            mymap.removeLayer(mapWithRackMarkers);
        }else{
            //If markers are hidden, show them
            mapWithRackMarkers.addTo(mymap);
        }
    });

    //When button is clicked, toggle the Hotspots markers 
    $(document).on('click', '#showHotspots', function() {
        //If markers are visible, hide it
        if(mymap.hasLayer(mapWithHotspotsMarkers)){
            mymap.removeLayer(mapWithHotspotsMarkers);
        }else{
            //If markers are hidden, show them
            mapWithHotspotsMarkers.addTo(mymap);
        }
    });

    
    //Get the location from a leaflet marker - JUST FOR TESTE, DELETE IT IN THE END
    // marker.on('click', function(ev){
    //     var latlng = mymap.mouseEventToLatLng(ev.originalEvent);
    //     console.log(latlng.lat + ', ' + latlng.lng + 'from marker ');
    //   });

    //Get the location clicked on the map
    mymap.on('click', function(e) {
        console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });

    //When button is clicked, grab the location
    // $(document).on('click', '#grabPosition', function() {
       
    // });

    // Layer groups for filters

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

    
    
    // $('.chat').on('hide.bs.collapse',function(){
    //     mymap.invalidateSize();
    //     $('#chatToggle').text("Report Rack");
    // });
    // $('.chat').on('show.bs.collapse',function(){
    //     mymap.invalidateSize();
    //     $('#chatToggle').text("Hide Report Rack");
    // });

    $(document).ready(function () {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#dismiss, .overlay').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });

        $("div").on("click", '#chatToggle', function () {
        
            $('#sidebar').addClass('active');
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            $('#lat').val(lt); 
            $('#lon').val(ln); 
            $('#rackId').val(rackId); 

            $('#incident').val("Theft");


               });
    });

   
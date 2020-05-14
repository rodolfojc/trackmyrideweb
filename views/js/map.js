

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


//var APIUrl = 'https://cors-anywhere.herokuapp.com/http://34.247.183.192:3000/getracks';
//var geoJson;
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
    }).setView([53.347557, -6.259317], 15);



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

//var geoJson =JSON.stringify(location);
//var geoJson = JSON.parse(location);
//var geoJson = location;
//console.log(typeof location);

// function getStoreLocs() {
//     let url = 'location.json';
//     $.getJSON(url, function (json) {
//         let geoJson = json;
//     })
// }

// getStoreLocs()
// var geoJson = {
    
//         type: "FeatureCollection",
//         features: [
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.22726053",
//         Y: "53.34779261",
//         location_stand: "East wall road outside the O2",
//         no_stands: "4",
//         security_safetyrating: "Medium"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.22726053,
//         53.34779261
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.265138686",
//         Y: "53.33424783",
//         location_stand: "Camden street lower, outside centra shop",
//         no_stands: "1",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.265138686,
//         53.33424783
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.249765605",
//         Y: "53.34494805",
//         location_stand: "Marks lane",
//         no_stands: "2",
//         security_safetyrating: "Medium"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.249765605,
//         53.34494805
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.251051724",
//         Y: "53.34851312",
//         location_stand: "Custom House Quay, outside AIB International Centre",
//         no_stands: "1",
//         security_safetyrating: ""
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.251051724,
//         53.34851312
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.242272854",
//         Y: "53.34296483",
//         location_stand: "Pearce street outside garden area",
//         no_stands: "3",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.242272854,
//         53.34296483
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.262080967",
//         Y: "53.34817688",
//         location_stand: "Middle abbey street, outside arnotts carpark",
//         no_stands: "2",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.262080967,
//         53.34817688
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.25176385",
//         Y: "53.35182974",
//         location_stand: "Foley street",
//         no_stands: "3",
//         security_safetyrating: "Medium"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.25176385,
//         53.35182974
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.268160194",
//         Y: "53.35686542",
//         location_stand: "Bloomington street outside Dargans pharmacy.",
//         no_stands: "3",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.268160194,
//         53.35686542
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.264363527",
//         Y: "53.35398625",
//         location_stand: "Parnell square north",
//         no_stands: "4",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.264363527,
//         53.35398625
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.262504756",
//         Y: "53.34211451",
//         location_stand: "William street south, duke street gallery.",
//         no_stands: "2",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.262504756,
//         53.34211451
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.271338612",
//         Y: "53.35055212",
//         location_stand: "North king street",
//         no_stands: "2",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.271338612,
//         53.35055212
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.245986372",
//         Y: "53.33485887",
//         location_stand: "Maggot street lower outside Medmark healthcare ",
//         no_stands: "2",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.245986372,
//         53.33485887
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Railing",
//         X: "-6.262797117",
//         Y: "53.33769129",
//         location_stand: "Cuffe street, across from O'callaghan Stephen green hotel",
//         no_stands: "5",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.262797117,
//         53.33769129
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.25826081",
//         Y: "53.35392471",
//         location_stand: "Parnell street outside temple hall",
//         no_stands: "2",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.25826081,
//         53.35392471
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.264474839",
//         Y: "53.3509772",
//         location_stand: "Parnell street outside beauty chic",
//         no_stands: "2",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.264474839,
//         53.3509772
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.259794384",
//         Y: "53.35342112",
//         location_stand: "Parnell street, outside 147 deli",
//         no_stands: "2",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.259794384,
//         53.35342112
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.265522242",
//         Y: "53.33630513",
//         location_stand: "Wexford street, Infront of bank of ireland",
//         no_stands: "2",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.265522242,
//         53.33630513
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.264283061",
//         Y: "53.34393043",
//         location_stand: "Bottom of George's street, beside the mercantile",
//         no_stands: "6",
//         security_safetyrating: "High"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.264283061,
//         53.34393043
//         ]
//         }
//         },
//         {
//         type: "Feature",
//         properties: {
//         type_stands: "Sheffield Stand",
//         X: "-6.252724081",
//         Y: "53.33299531",
//         location_stand: "Fitzwilliam Place",
//         no_stands: "2",
//         security_safetyrating: "Medium"
//         },
//         geometry: {
//         type: "Point",
//         coordinates: [
//         -6.252724081,
//         53.33299531
//         ]
//         }
//         }
//         ]
//         }


    
   

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

    
    var mapWithRackMarkers = L.geoJSON(maps2, {
        //add multiple locations with personalised marker using geoJson
        pointToLayer: function(feature, latlng){
           return L.marker(latlng, {
               icon: fontAwesomeIcon
           });
           
            // return L.circleMarker(latlng, geojsonMarkerOptions);
           },

        onEachFeature: onEachFeature,
    }).addTo(mymap);

    var mapWithHotspotsMarkers = L.geoJSON(maps2, {
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
            var user = '<%=racks[0].newRackId%>';
    console.log("Racks " + user);
        }else{
            //If markers are hidden, show them
            mapWithHotspotsMarkers.addTo(mymap);
        }
    });

    

    function addMarkerToMap(lat, lon){

        //pin a specific location - JUST FOR TESTE, DELETE IT IN THE END
        var marker = L.marker([lon, lat]).addTo(mymap);

        marker.bindPopup("Added by the user.<br> Under validation").openPopup();

        marker.on('click', function(ev){
            var latlng = mymap.mouseEventToLatLng(ev.originalEvent);
            console.log(latlng.lat + ', ' + latlng.lng + 'from marker ');
          });


    }
    //Get the location from a leaflet marker - JUST FOR TESTE, DELETE IT IN THE END
    // marker.on('click', function(ev){
    //     var latlng = mymap.mouseEventToLatLng(ev.originalEvent);
    //     console.log(latlng.lat + ', ' + latlng.lng + 'from marker ');
    //   });

    //Get the location clicked on the map
    mymap.on('click', function(e) {
        console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });

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


    function testing(){
          // //Report incident is clicked inside the popup
       
          console.log("show rack clicked");

            $('#newRackForm').removeClass('active');
            $('#incidentForm').addClass('active');
            $('.sidebar-header span').text('Report Incident');
         
            $('#sidebar').addClass('active'); //display side panel
            $('.overlay').addClass('active');
            $('#clickMap').removeClass('active'); //hide pin on map message
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            $('#lat').val(lt); //set latitude of clicked rack 
            $('#lon').val(ln);  //set longitude of clicked rack 
            $('#rackId').val(rackId);  //set id of clicked rack 
            $('#incident').val("Theft");
            
         }

         function secondFun(user){
            console.log(user)
            }

             
    $(document).ready(function () {
        
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        // //Report incident is clicked inside the popup
        $("div").on("click", '#chatToggle', function () {

            
            $('#newRackForm').removeClass('active');
            $('#incidentForm').addClass('active');
            $('.sidebar-header span').text('Report Incident');
         
            $('#sidebar').addClass('active'); //display side panel
            $('.overlay').addClass('active');
            $('#clickMap').removeClass('active'); //hide pin on map message
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            $('#lat').val(lt); //set latitude of clicked rack 
            $('#lon').val(ln);  //set longitude of clicked rack 
            $('#rackId').val(rackId);  //set id of clicked rack 
            $('#incident').val("Theft");
            
         });

         //Apply/Remove grey layer over the map
         $('#dismiss, .overlay').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });

        //Allow user to pick a point in the map
        $("div").on("click", '#newRack', function () {

            mymap.removeLayer(mapWithRackMarkers);   //hide all racks
            mymap.removeLayer(mapWithHotspotsMarkers); //hide all hotspot
            $('.overlay').addClass('active'); //add overlay
            $('#clickMap').addClass('active'); //display pin on map message
            $('#mapid').css('cursor', 'crosshair'); //change cursor

            
            mymap.on('click', function(e) {
                $('.sidebar-header span').text('Add new Rack');//Form title
                //CREATE IF TO CHECK IF ID EXISTS
                let randomRackId = Math.floor((Math.random() * 1000000) + 1);
                $('#newRackId').val(randomRackId); 
                // ----------------------------------
                $('#newLat').val(e.latlng.lat); //set latitude of clicked spot
                $('#newLon').val(e.latlng.lng);  //set longitude of clicked spot
                $('#newRackForm').addClass('active');//display rack form
                $('#incidentForm').removeClass('active');//hide incident form
                $('#sidebar').addClass('active'); //display side bar
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');//tag element as expdanded
            });

        
                
                // $('.collapse.in').toggleClass('in');
                //dont allow to pick an existing rack location
        
                //add marker and popup with button
                //confirm button get lat and long
                
        
        
            // $('#rackId').val(rackId);  //set id of clicked rack 
            // $('#incident').val("Theft");
            
         });


         


    });
    // Submit form to add incident to the database
    $("#incidentForm").on("submit", function(){
       addRack();
        return true;
      })
    
      function addRack() {
         
        console.log("clicked");
        }
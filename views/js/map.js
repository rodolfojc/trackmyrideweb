
//GET DATA FROM NEW RACKS TABLE


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

var lt;
var ln;
var id;

//Create the Map
var mymap = L.map('mapid', { 
        zoomControl: false //Remove default zoom control from the left side
    }).setView([53.347557, -6.259317], 15);

//Create new zoom control on the right side of the map    
//so id to not conflict with the sidebar
L.control.zoom({    position:'topright'}).addTo(mymap);
    
//Main map layer
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');


//Personalized marker for hotspots
var hotspotMarker = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};


//Personalized marker for Racks
var rackMarker = L.icon({
    iconUrl: 'img/bikelogo.png',
    iconSize:     [40, 60], // size of the icon
    iconAnchor:   [20, 55], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

//Personalized marker for Racks - IN USE
const fontAwesomeIcon = L.divIcon({
    html: '<i class="fas fa-flag fa-2x"></i>',
    // iconSize: [300, 300],
    className: 'myDivIcon',
    iconAnchor:   [5, 20]
});
//Pop up over the pin
var popup = L.popup();

//Add a pop up on each rack marker
function onEachFeature(feature, layer){
    layer.bindPopup('Name: '+ feature.properties.location_stand +
    '<br> Stands: '+feature.properties.no_stands +
   '<br><button class="btn btn-outline-info btn-sm" id="chatToggle">Report</button>'
    );
        layer.on('click', function (e) {
        lt = e.latlng.lat;
        ln = e.latlng.lng;
        rackId = feature.properties.id;
            console.log(rackId + ' ' + lt + ', ' + ln);
            
  });
}

//Add Racks to the map
var mapWithRackMarkers = L.geoJSON(maps2, {
    //add multiple locations with personalised marker using geoJson
    pointToLayer: function(feature, latlng){
       return L.marker(latlng, {
           icon: fontAwesomeIcon
       });
       },
    onEachFeature: onEachFeature,
}).addTo(mymap);

//Add Hotspots to the Map 
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
        }else{
            //If markers are hidden, show them
            mapWithHotspotsMarkers.addTo(mymap);
        }
    });

    //To add a rack manually - FOR User adding a new rack
    function addMarkerToMap(lat, lon){

        //pin a specific location - JUST FOR TEST, DELETE IT IN THE END
        var marker = L.marker([lon, lat]).addTo(mymap);

        marker.bindPopup("Added by the user.<br> Under validation").openPopup();
            //Get the location from a leaflet marker - JUST FOR TESTE, DELETE IT IN THE END
        marker.on('click', function(ev){
            var latlng = mymap.mouseEventToLatLng(ev.originalEvent);
            console.log(latlng.lat + ', ' + latlng.lng + 'from marker ');
          });


    }
   
    //Get the location clicked on the map
    mymap.on('click', function(e) {
        console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
    });

    // Layer groups for filters

//add layer to the map
    mymap.addLayer(layer);

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
 
 


//pin a specific location - JUST FOR TESTE, DELETE IT IN THE END
//var marker = L.marker([53.347557, -6.259317]).addTo(mymap);

//add pop up to the marker - JUST FOR TESTE, DELETE IT IN THE END
//marker.bindPopup("<b>numberOfStands: 8</b><br>type: Sheffield Stand").openPopup();


    //add multiple locations to the map using geoJson
   // L.geoJSON(geoJson).addTo(mymap);

  
//new layer, could be used for nightime map
// var difflayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; OpenStreetMap contributors'
// }).addTo(mymap);    


    


    //checkbox option 1 with racksNOT IN USE -DELETE IT 
// var racks = L.layerGroup([
//     L.marker([53.348046, -6.268652]),
//     L.marker([53.349017, -6.2554])
// ]);

//checkbox option 2 with hotspot circles
// var hotspot = L.layerGroup([
//     L.circle([53.347557, -6.259317], {
//                 color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 25
//         })
// ]);


//Radio buttons to switch layers - not in use, delete it
// L.control.layers({
//         'Racks': layer,
//         'Hotspots': difflayer,
//     }, 
//     //check box with options - not exclusively
//     {
//         'Markers #1': racks,
//         'Markers #2': hotspot
//     }).addTo(mymap);
//     //add layers control to the map
//     L.control.scale().addTo(mymap);

    
    
    // $('.chat').on('hide.bs.collapse',function(){
    //     mymap.invalidateSize();
    //     $('#chatToggle').text("Report Rack");
    // });
    // $('.chat').on('show.bs.collapse',function(){
    //     mymap.invalidateSize();
    //     $('#chatToggle').text("Hide Report Rack");
    // });


    
'use strict';
const MapStation = (update) => {
  const contenStation = $('<section class="container-station"></section>');
  const iconBefore = $("<i class='fa fa-chevron-left icon-top' aria-hidden='true'></i>");
  const contentMap =$("<div class='container-map'></div>");
  const map = $("<div id='map'></div>");
  const stationName = $('<h1><strong>' + state.selectedStation.name + '</strong></h1>');
  const hr = $('<hr>');
  const stationAddress = $('<span>' + state.selectedStation.address + '</span>');
  const stationProduct = $('<div class="fuel"></div>');

   iconBefore.on('click',(e) => {
     e.preventDefault();
     state.selectedStation = null;
     update();
   });

   contenStation.append(iconBefore);
   contentMap.append(map);
   contenStation.append(contentMap);
   contenStation.append(stationName);
   contenStation.append(hr);
   contenStation.append(stationAddress);
   contenStation.append(stationProduct);

$(() =>{
  var map = new GMaps({
    div: '#map',
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long
  });

  GMaps.geolocate({
    success: function(position) {
      map.setCenter(position.coords.latitude, position.coords.longitude);
      map.setZoom(14);
      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: 'Lima'
      });
      map.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [state.selectedStation.lat, state.selectedStation.long],
        travelMode: 'DRIVING',
      });
      map.addMarker({
        lat: state.selectedStation.lat,
        lng: state.selectedStation.long,
        title: 'Lima'
      });
    }
  });
})
   state.selectedStation.products.forEach((e) => {
     const producto = $("<span>" + e + "</span>");
     stationProduct.append(producto);
   });
   return contenStation;
 }

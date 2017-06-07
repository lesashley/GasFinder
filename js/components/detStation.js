'use strict';
  const MapStation = (update) => {
    const contenStation = $('<section class="container-station"></section>');
    const iconBefore = $("<i class='fa fa-chevron-left icon-left' aria-hidden='true'></i>");
    const contentMap =$("<div class='container-map'></div>");
    const map = $("<div id='map'></div>");
    const stationName = $('<p><strong>' + state.selectedStation.name + '</strong></p>');
    const hr = $('<hr>');
    const stationAddress = $('<span>' + state.selectedStation.address + '</span>');
    const stationProduct = $('<div class="fuel"></div>');

   contenStation.append(iconBefore);
   contentMap.append(map);
   contenStation.append(contentMap);
   contenStation.append(stationName);
   contenStation.append(hr);
   contenStation.append(stationAddress);
   contenStation.append(stationProduct);

   iconBefore.on('click',(e) => {
     e.preventDefault();
     state.selectedStation = null;
     update();
   });

   state.selectedStation.products.forEach((e) => {
     const producto = $("<span>" + e + "</span>");
     stationProduct.append(producto);
   });
   return contenStation;
 }

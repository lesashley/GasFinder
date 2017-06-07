// function initMap() {
//    var posicion;
//    if (navigator.geolocation) {
//      navigator.geolocation.getCurrentPosition((position) => {
//        posicion = {
//          lat: position.coords.latitude,
//          lng: position.coords.longitude
//        };
//        const directionsDisplay = new google.maps.DirectionsRenderer;
//        const directionsService = new google.maps.DirectionsService;
//        var map = new google.maps.Map($("#map"), {
//          zoom: 14,
//          center: posicion
//        });
//        directionsDisplay.setMap(map);
//        calculateAndDisplayRoute(directionsService, directionsDisplay, posicion);
//      })
//    }
//  }
//
//  function calculateAndDisplayRoute(directionsService, directionsDisplay, posicion) {
//   //  var n =  {lat: state.selectedStation.lat,
//   //  lng: state.selectedStation.long};
//
//    directionsService.route({
//      origin: posicion,
//      destination: {
//        lat: state.selectedStation.lat,
//        lng: state.selectedStation.lng
//      },
//      travelMode: 'DRIVING'
//    }, function (response, status) {
//      if (status == 'OK') {
//        var distancia = ((response.routes[0].legs[0].distance.text));
//        directionsDisplay.setDirections(response);
//        console.log(distance);
//      } else {
//        console.log("no te encontramos");
//      }
//    });
//  }

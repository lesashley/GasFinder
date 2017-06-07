'use strict';

 const StationItem = (station, update) => {
   const card = $("<div class='card'></div>");
   const icon = $('<a class="right"><i class="fa fa-map" aria-hidden="true"></i></a>');
   const name = $(`<h3>${station.name}</h3>`);
   const address = $(`<p>${station.address}</p>`);
   const district = $(`<p>${station.district}</p>`);

   card.append(icon);
   card.append(name);
   card.append(address);
   card.append(district);

  icon.on('click',(e) => {
   e.preventDefault();

    state.selectedStation = station;
    update();
  });
  return card;
}

const Search = (update) => {
  const content = $('<section></section>');
  const divSearch = $('<div class="box"></div>')
  const iconSearch = $('<i class="fa fa-search" aria-hidden="true"></i>')
  const input = $('<input class="" placeholder="Ingresa tu distrito a buscar" id="search">')
  const divStation = $('<div class="station"></div>');

  divSearch.append(iconSearch);
  divSearch.append(input);
  content.append(divSearch)
  content.append(divStation);

  state.stations.forEach((station)=>{
    divStation.append(StationItem(station,update));
  });

  input.keyup(function () {
    const stationSelect  = filterByDistrict(state.stations, $(this).val(),update);
    if (stationSelect.length != 0) {
      pushStation(divStation,stationSelect,update);
    }
  });
  return content;
}

const pushStation = (divStation,stationSelect, update) => {
    divStation.empty();
    stationSelect.forEach(e => {
        divStation.append(StationItem(e,update));
    });
}

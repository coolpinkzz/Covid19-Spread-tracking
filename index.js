'use strict';


  fetch('./data.json')

  .then(function(resp){
    return resp.json();
  })
  .then(function(rsp){
    console.log(rsp.data);
    rsp.data.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
          var latitude = obj.latitude;
          var longitude = obj.longitude;
          var recover=obj.recovered;

          var cases = obj.infected;
          if (cases>255){
              var color = "rgb(255, 0, 0)";
          }
          if (cases<10){
              color = "rgb(5, 255, 0)";
          }

          else{
              color = `rgb(${cases}, 0, 0)`;
          }

          // Mark on the map
          new mapboxgl.Marker({
              draggable: false,
              color:color

          }).setLngLat([longitude, latitude])
          .addTo(map);
          });
      })
  })


  

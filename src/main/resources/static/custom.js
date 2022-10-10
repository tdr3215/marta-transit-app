let map;
function initMap() {
	
	
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
        zoom: 15,
        scrollwheel: false
    });
	
	
	
    for (i=0; i<busLocations.length; i++){
        let marker = new google.maps.Marker({
			title: busLocations[i].ROUTE,
            position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
            map: map,
            icon:"icons8-bus-64.png"                
        });
        
        const bus = busLocations[i];
   
        console.log(bus)
    const contentString = 
    
    `<div class="card">
		<div class="card-body">
		<h5 class="card-title">Route #${bus.ROUTE}</h5>
		<p class="card-text">
		Bus #: ${bus.VEHICLE} <br>
		Next Stop: ${bus.TIMEPOINT} <br>
		Distance(mi): ${bus.DIRECTION} <br>
		</p>
		</div>
	</div>`  
        	
	const infoWindow = new google.maps.InfoWindow({content:contentString})
        
        marker.addListener("click", ()=>{
		infoWindow.open({anchor:marker,
		map,
		shouldFocus:false})
	
}) 
    }
	
    
   }
   
   
   

   function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  
      
    let marker = new google.maps.Marker({
	position:{lat:lat,lng:lng},
	map:map,
	icon: "curr-position.png"
})
  map.setCenter(new google.maps.LatLng(lat, lng));
}


var map = L.map('main_map', {
    center: [10.988119, -74.789661],
    zoom: 13
});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map)

// L.marker([51.505, -0.09]).addTo(map);
// L.marker([51.510, -0.15]).addTo(map);
// L.marker([51.507, -0.11]).addTo(map);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
})


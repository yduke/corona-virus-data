(function( $ ) {
	'use strict';
	$(document).ready(function(){
		var cov_map = L.map('cov__map').setView([47.3, 13.3], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnJlZWR1a2UiLCJhIjoiY2s4YWg2ZnNjMDI0NjNrbzNhOXhkZjg5diJ9.cY3pTJg5vdU4SC2D7UnU1Q', 
{
	attribution: 'Map data &copy; OpenStreetMap contributors,CC-BY-SA, Imagery © Mapbox',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoiZnJlZWR1a2UiLCJhIjoiY2s4YWg2ZnNjMDI0NjNrbzNhOXhkZjg5diJ9.cY3pTJg5vdU4SC2D7UnU1Q'
}).addTo(cov_map);

$.ajax({
	url: "https://corona.lmao.ninja/countries",
	beforeSend: function() {
		$("#cov__map").hide();
	},
	complete: function() {
		$(".cov-loading4").fadeOut(100);	
		$("#cov__map").fadeIn(300);
	},
	success: function (data) {
		var coronaData = data;
		for(var i = 0; i < coronaData.length; i++) {
			var pos = coronaData[i]["countryInfo"];
			var lat = pos["lat"];
			var lng = pos["long"];
			var rad = coronaData[i]["cases"];
			var exp = rad.toString().length - 1;
			if(exp > 3) {exp = 3;}
			if(rad < 10) {rad = 4;}
			else {
				rad = 5 + (rad / Math.pow(10, exp)) + (10 * (exp - 1));
				if(rad > 40) {
					rad = 40;
				}
			}
			var circle = L.circleMarker([lat, lng], {
					color: 'red',
					fillColor: '#fe6553',
					fillOpacity: 0.35,
					radius: rad
				     }).addTo(cov_map).bindPopup("<b>" + coronaData[i]["country"] + 
					 "</b><hr>" + cov__cases + ": " + coronaData[i]["cases"] +  
					  "<br>" + cov__deaths + ": " + coronaData[i]["deaths"] +
					  "<br>" + cov__cases_today + ": " + coronaData[i]["todayCases"] + 
					  "<br>" + cov__deaths_today + ": " + coronaData[i]["todayDeaths"] + 
					  "<br>" + cov__recoverd + ": " + coronaData[i]["recovered"] + 
					  "<br>" + cov__critical + ": " + coronaData[i]["critical"] +
					  "<br>" + cov__active + ": " + coronaData[i]["active"] +
					  "<br>" + cov__casepmillion + ": " + coronaData[i]["casesPerOneMillion"] +
					  "<br>" + cov__deathspmillion + ": " + coronaData[i]["deathsPerOneMillion"]
					  );
		}
	},
	error: function() {
	}
});
	});
})( jQuery );
(function( $ ) {
	'use strict';
	$(document).ready(function(){
		var cov_map = L.map('cov__map').setView([47.3, 13.3], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + cov__mbx_token, 
{
	attribution: 'Map data &copy; OpenStreetMap contributors,CC-BY-SA, Imagery © Mapbox',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: cov__mbx_token
}).addTo(cov_map);

$.ajax({
	url: "https://corona.lmao.ninja/v3/covid-19/countries",
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
			var col = "#ffd800";
			var exp = rad.toString().length - 1;
			if(exp > 3) {exp = 3;}
			if(rad < 8) {rad = 8;}
			else {
				rad = 5 + (rad / Math.pow(70, exp)) + (6 * (exp - 1));
				if( rad >= 0 && rad <= 2) { col = "#ffd800";}
				if( rad >= 2 && rad <= 8) { col = "#ffae00";}
				if( rad >= 8 && rad <= 14) { col = "#ff7e00";}
				if( rad >= 14 && rad <= 17) { col = "#ff6c00";}
				if( rad >= 17 && rad <= 17.5) { col = "#ff3c00";}
				if( rad >= 17.5 && rad <= 80) { col = "#ff0000";}
				if( rad >80 ) {rad = 80;col ="#ff0000";}
			}
			var circle = L.circleMarker([lat, lng], {
					color: '',
					fillColor: col,
					fillOpacity: .5,
					radius: rad
				     }).addTo(cov_map).bindPopup("<b>" + coronaData[i]["country"] + 
					 "</b><hr>" + cov__popu + ": " + coronaData[i]["population"] +  
					 "<br>" + cov__cases + ": " + coronaData[i]["cases"] +  
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
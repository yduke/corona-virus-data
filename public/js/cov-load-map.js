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
			var col = "#ccf800";
			var exp = rad.toString().length - 1;
			if(exp > 3) {exp = 3;}
			if(rad < 8) {rad = 8;}
			else {
				rad = .9+ (rad / Math.pow(70, exp)) + (6 * (exp - 1));
				if( rad >= 0 && rad <= 10) { col = "#ccf800";}
				if( rad >= 10 && rad <= 13) { col = "#eff800";}
				if( rad >= 13 && rad <= 17) { col = "#ff7e00";}
				if( rad >= 17 && rad <= 20) { col = "#ff6c00";}
				if( rad >= 20 && rad <= 35) { col = "#ff3c00";}
				if( rad >= 35 && rad <= 40) { col = "#ff0000";}
				if( rad >40 ) {rad = 40;col ="#ff0000";}
			}
			console.log(rad);
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
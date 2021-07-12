(function($) {
	'use strict';
	$(document).ready(function() {
		let url = "https://corona.lmao.ninja/v3/covid-19/all";
		let urlt = "https://corona.lmao.ninja/v3/covid-19/countries/" + cov__contry + "?strict=false";
		let urlc = "https://corona.lmao.ninja/v3/covid-19/continents";
		function eNum(x){return x.toLocaleString('en')}
//world
		$.getJSON(url, function(data, status) {
			$("#cov-total-cases").append(eNum(data["cases"] ? data["cases"] : 'n/A'));
			$("#cov-total-recoverd").append(eNum(data["recovered"] ? data["recovered"] : 'n/A'));
			$("#cov-total-dead").append(eNum(data["deaths"] ? data["deaths"] : 'n/A'));
			$("#cov-total-active").append(eNum(data["active"] ? data["active"] : 'n/A'));
			$("#cov-total-today-case").append(eNum(data["todayCases"] ? data["todayCases"] : 'n/A'));
			$("#cov-total-today-deaths").append(eNum(data["todayDeaths"] ? data["todayDeaths"] : 'n/A'));
			$("#cov-total-critical").append(eNum(data["critical"] ? data["critical"] : 'n/A'));
			$("#cov-total-affected-countries").append(eNum(data["affectedCountries"] ? data["affectedCountries"] : 'n/A'));
			$("#cov-time").text(timestampToTime(data.updated, 1));
			$(".cov-loading1").fadeOut("slow");
		}).fail(function() {
			$("#cov-time").html(cov__err_msg);
		});
//single country
		$.getJSON(urlt, function(data, status) {
			$("#cov_flag").append('<img class="cov_flag" src="' + cov__plugin_dir + 'public/img/flags/' + data.countryInfo.iso2.toLowerCase() + '.png"> ');
			$("#cov-new-confirm").append(eNum(data.cases ? data.cases : 'n/A'));
			$("#cov-new-recoverd").append(eNum(data.recovered ? data.recovered : 'n/A'));
			$("#cov-new-dead").append(eNum(data.deaths ? data.deaths : 'n/A'));
			$("#cov-case-million").append(eNum(data.casesPerOneMillion ? data.casesPerOneMillion : 'n/A'));
			$("#cov-today-case").append(eNum(data.todayCases ? data.todayCases : 'n/A'));
			$("#cov-today-deaths").append(eNum(data.todayDeaths ? data.todayDeaths : 'n/A'));
			$("#cov-critical").append(eNum(data.critical ? data.critical : 'n/A'));
			$("#cov-active").append(eNum(data.active ? data.active : 'n/A'));
			$("#cov-time-country").text(timestampToTime(data.updated, 1));
			$(".cov-loading2").fadeOut("slow");
		}).fail(function() {
			$("#cov-time").html(cov__err_msg);
		});
//continents
        const continentToAbbr = {"Europe": "eu", "Asia": "as", "North America": "na", "South America": "sa", "Africa": "af", "Australia-Oceania": "oa"};
        
		$.getJSON(urlc, function(data, status) {
            
    for (const item of data) {
        $("#cov-" + continentToAbbr[item["continent"]] + "-cases").append(eNum(item["cases"] ? item["cases"] : 'n/A'));
        $("#cov-" + continentToAbbr[item["continent"]] + "-recoverd").append(eNum(item["recovered"] ? item["recovered"] : 'n/A' ));
        $("#cov-" + continentToAbbr[item["continent"]] + "-dead").append(eNum(item["deaths"] ? item["deaths"] : 'n/A' )); 
        $("#cov-" + continentToAbbr[item["continent"]] + "-active").append(eNum(item["active"] ? item["active"] : 'n/A' ));      
        $("#cov-" + continentToAbbr[item["continent"]] + "-today-case").append(eNum(item["todayCases"] ? item["todayCases"] : 'n/A' ));       
        $("#cov-" + continentToAbbr[item["continent"]] + "-today-deaths").append(eNum(item["todayDeaths"] ? item["todayDeaths"] : 'n/A' ));       
        $("#cov-" + continentToAbbr[item["continent"]] + "-critical").append(eNum(item["critical"] ? item["critical"] : 'n/A' ));       
        $("#cov-" + continentToAbbr[item["continent"]] + "-case-million").append(eNum(item["casesPerOneMillion"] ? item["casesPerOneMillion"] : 'n/A' ));
        $("#cov-time-" + continentToAbbr[item["continent"]]).text(timestampToTime(item["updated"], 1));
		$(".cov-loading2").fadeOut("slow");
		}
		}).fail(function() {
			$("#cov-time").html(cov__err_msg);
		});

//table all data
//	function desc(x,y){
//       return y.confirmed-x.confirmed
//   }
		
		if ($('#cov_all_table').length > 0) { // check all table exists
			let url_all = 'https://corona.lmao.ninja/v3/covid-19/countries?sort=cases';
			$.getJSON(url_all, function(data, status) {
//        var datas = data.sort(desc);
				var transform = {
					"<>": "tr",
					"html": [{
						"<>": "td",
						"html": function() {
							return ('<img class="cov_flag" src=' + cov__plugin_dir + 'public/img/flags/' + String(this.countryInfo.iso2).toLowerCase() + '.png> <span class="cov_co_name">' + this.country + "</span>");
						}
					}, {
						"<>": "td",
						"class": "cov_num has-text-color has-luminous-vivid-orange-color",
						"text": "${cases}"
					}, {
						"<>": "td",
						"class": "cov_num",
						"text": "${deaths}"
					}, {
						"<>": "td",
						"class": "cov_num has-text-color has-vivid-green-cyan-color",
						"text": "${recovered}"
					}, ]
				};
				$('#cov_all_table').json2html(data, transform);
				$(".cov-loading3").fadeOut("slow");
			}).fail(function(status) {
				$(".cov-loading3").fadeOut("slow");
				$("#cov_all_table").html(data);
			});
		}
	});

	function timestampToTime(timestamp, s, time = false) {
		var date = new Date(timestamp * s);
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		var D = date.getDate() + ' ';
		var h = date.getHours();
		var m = ':' + (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes());
		var s = ':' + (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
		if (time) return h + m;
		else return Y + M + D + h + m + s;
	}
})(jQuery);
(function($) {
	'use strict';
	$(document).ready(function() {
		let url = "https://corona.lmao.ninja/v2/all";
		let urlt = "https://corona.lmao.ninja/v2/countries/" + cov__contry + "?strict=false";
		let urlc = "https://corona.lmao.ninja/v2/continents";
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
		$.getJSON(urlc, function(data, status) {
			//South America
			$("#cov-na-cases").append(eNum(data[0]["cases"] ? data[0]["cases"]: 'n/A'));
			$("#cov-na-recoverd").append(eNum(data[0]["recovered"] ? data[0]["recovered"]: 'n/A' ));
			$("#cov-na-dead").append(eNum(data[0]["deaths"] ? data[0]["deaths"]: 'n/A'));
			$("#cov-na-active").append(eNum(data[0]["active"] ? data[0]["active"]: 'n/A'));
			$("#cov-na-today-case").append(eNum(data[0]["todayCases"] ? data[0]["todayCases"]: 'n/A'));
			$("#cov-na-today-deaths").append(eNum(data[0]["todayDeaths"] ? data[0]["todayDeaths"]: 'n/A'));
			$("#cov-na-critical").append(eNum(data[0]["critical"] ? data[0]["critical"]: 'n/A'));
			$("#cov-time-na").text(timestampToTime(data[0].updated, 1));
			//Europe
			$("#cov-eu-cases").append(eNum(data[1]["cases"] ? data[1]["cases"]: 'n/A'));
			$("#cov-eu-recoverd").append(eNum(data[1]["recovered"] ? data[1]["recovered"]: 'n/A'));
			$("#cov-eu-dead").append(eNum(data[1]["deaths"] ? data[1]["deaths"]: 'n/A'));
			$("#cov-eu-active").append(eNum(data[1]["active"] ? data[1]["active"]: 'n/A'));
			$("#cov-eu-today-case").append(eNum(data[1]["todayCases"] ? data[1]["todayCases"]: 'n/A'));
			$("#cov-eu-today-deaths").append(eNum(data[1]["todayDeaths"] ? data[1]["todayDeaths"]: 'n/A'));
			$("#cov-eu-critical").append(eNum(data[1]["critical"] ? data[1]["critical"]: 'n/A'));
			$("#cov-time-eu").text(timestampToTime(data[1].updated, 1));
			//Asia
			$("#cov-as-cases").append(eNum(data[2]["cases"] ? data[2]["cases"]: 'n/A'));
			$("#cov-as-recoverd").append(eNum(data[2]["recovered"] ? data[2]["recovered"]: 'n/A'));
			$("#cov-as-dead").append(eNum(data[2]["deaths"] ? data[2]["deaths"]: 'n/A'));
			$("#cov-as-active").append(eNum(data[2]["active"] ? data[2]["active"]: 'n/A'));
			$("#cov-as-today-case").append(eNum(data[2]["todayCases"] ? data[2]["todayCases"]: 'n/A'));
			$("#cov-as-today-deaths").append(eNum(data[2]["todayDeaths"] ? data[2]["todayDeaths"]: 'n/A'));
			$("#cov-as-critical").append(eNum(data[2]["critical"] ? data[2]["critical"]: 'n/A'));
			$("#cov-time-as").text(timestampToTime(data[2].updated, 1));
			//South America
			$("#cov-sa-cases").append(eNum(data[3]["cases"] ? data[3]["cases"]: 'n/A'));
			$("#cov-sa-recoverd").append(eNum(data[3]["recovered"] ? data[3]["recovered"]: 'n/A'));
			$("#cov-sa-dead").append(eNum(data[3]["deaths"] ? data[3]["deaths"]: 'n/A'));
			$("#cov-sa-active").append(eNum(data[3]["active"] ? data[3]["active"]: 'n/A'));
			$("#cov-sa-today-case").append(eNum(data[3]["todayCases"] ? data[3]["todayCases"]: 'n/A'));
			$("#cov-sa-today-deaths").append(eNum(data[3]["todayDeaths"] ? data[3]["todayDeaths"]: 'n/A'));
			$("#cov-sa-critical").append(eNum(data[3]["critical"] ? data[3]["critical"]: 'n/A'));
			$("#cov-time-sa").text(timestampToTime(data[3].updated, 1));
			//Oceania
			$("#cov-oa-cases").append(eNum(data[4]["cases"] ? data[4]["cases"]: 'n/A'));
			$("#cov-oa-recoverd").append(eNum(data[4]["recovered"] ? data[4]["recovered"]: 'n/A'));
			$("#cov-oa-dead").append(eNum(data[4]["deaths"] ? data[4]["deaths"]: 'n/A'));
			$("#cov-oa-active").append(eNum(data[4]["active"] ? data[4]["active"]: 'n/A'));
			$("#cov-oa-today-case").append(eNum(data[4]["todayCases"] ? data[4]["todayCases"]: 'n/A'));
			$("#cov-oa-today-deaths").append(eNum(data[4]["todayDeaths"] ? data[4]["todayDeaths"]: 'n/A'));
			$("#cov-oa-critical").append(eNum(data[4]["critical"] ? data[4]["critical"]: 'n/A'));
			$("#cov-time-oa").text(timestampToTime(data[4].updated, 1));
			//Africa
			$("#cov-af-cases").append(eNum(data[5]["cases"] ? data[5]["cases"]: 'n/A'));
			$("#cov-af-recoverd").append(eNum(data[5]["recovered"] ? data[5]["recovered"]: 'n/A'));
			$("#cov-af-dead").append(eNum(data[5]["deaths"] ? data[5]["deaths"]: 'n/A'));
			$("#cov-af-active").append(eNum(data[5]["active"] ? data[5]["active"]: 'n/A'));
			$("#cov-af-today-case").append(eNum(data[5]["todayCases"] ? data[5]["todayCases"]: 'n/A'));
			$("#cov-af-today-deaths").append(eNum(data[5]["todayDeaths"] ? data[5]["todayDeaths"]: 'n/A'));
			$("#cov-af-critical").append(eNum(data[5]["critical"] ? data[5]["critical"]: 'n/A'));
			$("#cov-time-af").text(timestampToTime(data[5].updated, 1));			
			$(".cov-loading1").fadeOut("slow");
		}).fail(function() {
			$("#cov-time").html(cov__err_msg);
		});
		
//table all data
//	function desc(x,y){
//       return y.confirmed-x.confirmed
//   }
		
		if ($('#cov_all_table').length > 0) { // check all table exists
			let url_all = 'https://corona.lmao.ninja/v2/countries?sort=cases';
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
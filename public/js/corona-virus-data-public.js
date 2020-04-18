(function($) {
	'use strict';
	$(document).ready(function() {
		let url = "https://corona.lmao.ninja/v2/all";
		let urlt = "https://corona.lmao.ninja/v2/countries/" + cov__contry + "?strict=false";
		let urlc = "https://corona.lmao.ninja/v2/continents";
		function eNum(x){return x.toLocaleString('en')}
//world
		$.getJSON(url, function(data, status) {
			$("#cov-total-cases").append(eNum(data["cases"]));
			$("#cov-total-recoverd").append(eNum(data["recovered"]));
			$("#cov-total-dead").append(eNum(data["deaths"]));
			$("#cov-total-active").append(eNum(data["active"]));
			$("#cov-total-today-case").append(eNum(data["todayCases"]));
			$("#cov-total-today-deaths").append(eNum(data["todayDeaths"]));
			$("#cov-total-critical").append(eNum(data["critical"]));
			$("#cov-total-affected-countries").append(eNum(data["affectedCountries"]));
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
			$("#cov-today-case").append(eNum(data.todayCases));
			$("#cov-today-deaths").append(eNum(data.todayDeaths));
			$("#cov-critical").append(eNum(data.critical));
			$("#cov-active").append(eNum(data.active));
			$("#cov-time-country").text(timestampToTime(data.updated, 1));
			$(".cov-loading2").fadeOut("slow");
		}).fail(function() {
			$("#cov-time").html(cov__err_msg);
		});
//continents
		$.getJSON(urlc, function(data, status) {
			//South America
			$("#cov-na-cases").append(eNum(data[0]["cases"]));
			$("#cov-na-recoverd").append(eNum(data[0]["recovered"]));
			$("#cov-na-dead").append(eNum(data[0]["deaths"]));
			$("#cov-na-active").append(eNum(data[0]["active"]));
			$("#cov-na-today-case").append(eNum(data[0]["todayCases"]));
			$("#cov-na-today-deaths").append(eNum(data[0]["todayDeaths"]));
			$("#cov-na-critical").append(eNum(data[0]["critical"]));
			$("#cov-time-na").text(timestampToTime(data[0].updated, 1));
			//Europe
			$("#cov-eu-cases").append(eNum(data[1]["cases"]));
			$("#cov-eu-recoverd").append(eNum(data[1]["recovered"]));
			$("#cov-eu-dead").append(eNum(data[1]["deaths"]));
			$("#cov-eu-active").append(eNum(data[1]["active"]));
			$("#cov-eu-today-case").append(eNum(data[1]["todayCases"]));
			$("#cov-eu-today-deaths").append(eNum(data[1]["todayDeaths"]));
			$("#cov-eu-critical").append(eNum(data[1]["critical"]));
			$("#cov-time-eu").text(timestampToTime(data[1].updated, 1));
			//Asia
			$("#cov-as-cases").append(eNum(data[2]["cases"]));
			$("#cov-as-recoverd").append(eNum(data[2]["recovered"]));
			$("#cov-as-dead").append(eNum(data[2]["deaths"]));
			$("#cov-as-active").append(eNum(data[2]["active"]));
			$("#cov-as-today-case").append(eNum(data[2]["todayCases"]));
			$("#cov-as-today-deaths").append(eNum(data[2]["todayDeaths"]));
			$("#cov-as-critical").append(eNum(data[2]["critical"]));
			$("#cov-time-as").text(timestampToTime(data[2].updated, 1));
			//South America
			$("#cov-sa-cases").append(eNum(data[3]["cases"]));
			$("#cov-sa-recoverd").append(eNum(data[3]["recovered"]));
			$("#cov-sa-dead").append(eNum(data[3]["deaths"]));
			$("#cov-sa-active").append(eNum(data[3]["active"]));
			$("#cov-sa-today-case").append(eNum(data[3]["todayCases"]));
			$("#cov-sa-today-deaths").append(eNum(data[3]["todayDeaths"]));
			$("#cov-sa-critical").append(eNum(data[3]["critical"]));
			$("#cov-time-sa").text(timestampToTime(data[3].updated, 1));
			//Oceania
			$("#cov-oa-cases").append(eNum(data[4]["cases"]));
			$("#cov-oa-recoverd").append(eNum(data[4]["recovered"]));
			$("#cov-oa-dead").append(eNum(data[4]["deaths"]));
			$("#cov-oa-active").append(eNum(data[4]["active"]));
			$("#cov-oa-today-case").append(eNum(data[4]["todayCases"]));
			$("#cov-oa-today-deaths").append(eNum(data[4]["todayDeaths"]));
			$("#cov-oa-critical").append(eNum(data[4]["critical"]));
			$("#cov-time-oa").text(timestampToTime(data[4].updated, 1));
			//Africa
			$("#cov-af-cases").append(eNum(data[5]["cases"]));
			$("#cov-af-recoverd").append(eNum(data[5]["recovered"]));
			$("#cov-af-dead").append(eNum(data[5]["deaths"]));
			$("#cov-af-active").append(eNum(data[5]["active"]));
			$("#cov-af-today-case").append(eNum(data[5]["todayCases"]));
			$("#cov-af-today-deaths").append(eNum(data[5]["todayDeaths"]));
			$("#cov-af-critical").append(eNum(data[5]["critical"]));
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
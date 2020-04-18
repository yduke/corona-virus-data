(function($) {
	'use strict';
	$(document).ready(function() {
		let url = "https://corona.lmao.ninja/v2/all";
		let urlt = "https://corona.lmao.ninja/v2/countries/" + cov__contry + "?strict=false";
		function eNum(x){return x.toLocaleString('en')}
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
			$(".cov-loading2").fadeOut("slow");
		}).fail(function() {
			$("#cov-time").html(cov__err_msg);
		});

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
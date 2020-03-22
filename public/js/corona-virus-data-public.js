(function( $ ) {
	'use strict';
	$(document).ready(function(){
		
    let url = "//wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief";
    let urlt = "//wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=" + cov__contry +"&onlyCountries=true";
    $.getJSON(url,function(data,status){
        $("#cov-total-confirm").append(data["confirmed"]);
        $("#cov-total-recoverd").append(data["recovered"]);
        $("#cov-total-dead").append(data["deaths"]); 
		$(".cov-loading1").fadeOut("slow");
    }).fail(function () {
        $("#cov-time").html('The API server may be down, please check your firewall settings and try again later.'); 
    });
	
	$.getJSON(urlt,function(data,status){
        $("#cov-new-confirm").append(data["0"].confirmed ? data["0"].confirmed : 'n/A'); 
        $("#cov-new-recoverd").append(data["0"].recovered ? data["0"].recovered : 'n/A'); 
        $("#cov-new-dead").append(data["0"].deaths ? data["0"].deaths : 'n/A'); 
        $("#cov-time").append(data["0"].lastupdate); 
        $("#cov_country_name").append(data["0"].countryregion); 
        $(".cov-loading2").fadeOut("slow");
    }).fail(function () {
        $("#cov-time").html('The API server may be down, please check your firewall settings and try again later.'); 
    });
	function desc(x,y){        return y.confirmed-x.confirmed    } 	if ($('#cov_all_table').length > 0) { // check all table exists	 let url_all = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true';	$.getJSON(url_all,function(data,status){		        var datas = data.sort(desc);		var transform = {"<>":"tr","html":[                        {"<>":"td","text":"${countryregion}"},                        {"<>":"td","text":"${confirmed}"},                        {"<>":"td","text":"${deaths}"},                        {"<>":"td","text":"${recovered}"},                    ]};      		$('#cov_all_table').json2html(datas,transform);$("#cov_all_time").append(data["0"].lastupdate);     }).fail(function (status) {        $("#cov_all_table").html(status);     });	 	}
	});   function timestampToTime(timestamp,s,time = false) {        var date = new Date(timestamp * s);        var Y = date.getFullYear() + '-';        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';        var D = date.getDate() + ' ';        var h = date.getHours();        var m = ':' + (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes());        var s = ':' + (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());        if(time)            return h+m;        else            return Y+M+D+h+m+s;    }
})( jQuery );

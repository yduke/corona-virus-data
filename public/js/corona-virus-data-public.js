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
	function desc(x,y){
	});
})( jQuery );
(function( $ ) {
	'use strict';$(document).ready(function(){	$.ajax({	type: 'get',	url: 'https://corona.lmao.ninja/v3/covid-19/all',	success: function(data){		if ( data.type = 'json' )		{			$('.cov-loading1').hide();			$('#cov_ser_st').addClass('greendot');		}		else		{$('.cov-loading1').hide();$('#cov_ser_st').addClass('reddot');		}			},	error: function(data){		$('.cov-loading1').hide();		$('#cov_ser_st').addClass('reddot');	}});});
})( jQuery );

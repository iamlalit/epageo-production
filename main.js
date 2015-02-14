//bootstrap carousel image slider to slide the image
$(document).ready(function(){
    $('.carousel').carousel({
      interval: false,
      pause: ''
    });
    $('#contact-slider').off('keydown.bs.carousel');

    $("#home-page")
	    .load(function() { 
	    	$('body.index').css({'background': 'url("../../.tmp/img/Homepage_MainImage_rev1.gif")', 'background-size': 'cover'});
	    })
	    .error(function() { 
	    	console.log("error loading image"); 
	    });
});

$(document).ready(function(){
	var kids = $('.ballon1 .magic-icons').children();
	var iconList = ["icon-strategy", "icon-search", "icon-cog", "icon-location", "icon-tools", "icon-bucket", "icon-setting-alt", "icon-click", "icon-discovery", "icon-strategy", "icon-strategy"];	
	var spanList = ["Lean Strategies", "Search Engine Optimization", "Landing Page Solution", "Local Search Optimization", "Website Development", "Successful Execution", "Content Creation", "Pay Per Click", "Web Analytics", "Lean Strategies"]
	function animations(){
		var i = -1;
		var j;
		for(j = 0; j< iconList.length-1 ; j++){
			$(kids[0]).delay(4000).fadeOut(10, function() { 
				i++;
				$(kids[0]).children('span').text(spanList[i+1])
				$(kids[0]).css('display', 'inline-block').children('i').removeClass(iconList[i]).addClass(iconList[i+1]);	
				if(i == 9){
					animations();
				}
			});
		};
	}
	animations();
	
	var iconList1 = ["icon-search", "icon-cog", "icon-location", "icon-tools", "icon-bucket", "icon-setting-alt", "icon-click", "icon-discovery", "icon-strategy", "icon-search", "icon-search"];	
	var spanList1 = ["Search Engine Optimization", "Landing Page Solution", "Local Search Optimization", "Website Development", "Successful Execution", "Content Creation", "Pay Per Click", "Web Analytics", "Lean Strategies", "Search Engine Optimization"]
	function animations1(){
		var i = -1;
		var j;
		for(j = 0; j< iconList1.length-1 ; j++){
			$(kids[1]).delay(4000).fadeOut(10, function() { 
				i++;
				$(kids[1]).children('span').text(spanList1[i+1])
				$(kids[1]).css('display', 'inline-block').children('i').removeClass(iconList1[i]).addClass(iconList1[i+1]);	
				if(i == 9){
					animations1();
				}
			});
		};
	}
	animations1();
	
	var iconList2 = ["icon-cog", "icon-location", "icon-tools", "icon-bucket", "icon-setting-alt", "icon-click", "icon-discovery", "icon-strategy", "icon-search", "icon-cog", "icon-cog"];	
	var spanList2 = ["Landing Page Solution", "Local Search Optimization", "Website Development", "Successful Execution", "Content Creation", "Pay Per Click", "Web Analytics", "Lean Strategies", "Search Engine Optimization", "Landing Page Solution"];
	function animations2(){
		var i = -1;
		var j;
		for(j = 0; j< iconList2.length-1 ; j++){
			$(kids[2]).delay(4000).fadeOut(10, function() { 
				i++;
				$(kids[2]).children('span').text(spanList2[i+1])
				$(kids[2]).css('display', 'inline-block').children('i').removeClass(iconList2[i]).addClass(iconList2[i+1]);	
				if(i == 9){
					animations2();
				}
			});
		};
	}
	animations2();

	//for ballon3
	var kids2 = $('.ballon3 .magic-icons').children();
	var iconList21 = ["icon-brain", "icon-crawler", "icon-bucket", "icon-network", "icon-beaker", "icon-algorithm", "icon-brain", "icon-brain"];	
	var spanList21 = ["Business Intelligence", "Proprietary Crawlers", "Presentable Dashboards", "Analytics", "Research & Development", "Predective Modelling", "Business Intelligence", "Business Intelligence"];
	function animations21(){
		var i = -1;
		var j;
		for(j = 0; j< iconList21.length-1 ; j++){
			$(kids2[0]).delay(4000).fadeOut(10, function() { 
				i++;
				$(kids2[0]).children('span').text(spanList21[i+1])
				$(kids2[0]).css('display', 'inline-block').children('i').removeClass(iconList21[i]).addClass(iconList21[i+1]);	
				if(i == 6){
					animations21();
				}
			});
		};
	}
	animations21();
	var iconList22 = ["icon-crawler", "icon-bucket", "icon-network", "icon-beaker", "icon-algorithm", "icon-brain", "icon-crawler", "icon-crawler"];	
	var spanList22 = ["Proprietary Crawlers", "Presentable Dashboards", "Analytics", "Research & Development", "Predective Modelling", "Business Intelligence", "Proprietary Crawlers", "Proprietary Crawlers"];
	function animations22(){
		var i = -1;
		var j;
		for(j = 0; j< iconList22.length-1 ; j++){
			$(kids2[1]).delay(4000).fadeOut(10, function() { 
				i++;
				$(kids2[1]).children('span').text(spanList22[i+1])
				$(kids2[1]).css('display', 'inline-block').children('i').removeClass(iconList22[i]).addClass(iconList22[i+1]);	
				if(i == 6){
					animations22();
				}
			});
		};
	}
	animations22();
	var iconList23 = ["icon-bucket", "icon-network", "icon-beaker", "icon-algorithm", "icon-brain", "icon-crawler", "icon-bucket", "icon-bucket"];	
	var spanList23 = ["Presentable Dashboards", "Analytics", "Research & Development", "Predective Modelling", "Business Intelligence", "Proprietary Crawlers", "Presentable Dashboards", "Presentable Dashboards"];
	function animations23(){
		var i = -1;
		var j;
		for(j = 0; j< iconList23.length-1 ; j++){
			$(kids2[2]).delay(4000).fadeOut(10, function() { 
				i++;
				$(kids2[2]).children('span').text(spanList23[i+1])
				$(kids2[2]).css('display', 'inline-block').children('i').removeClass(iconList23[i]).addClass(iconList23[i+1]);	
				if(i == 6){
					animations23();
				}
			});
		};
	}
	animations23();

	
});
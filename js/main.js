var init = function(){
	$(".presenters li a").on("click", function(e){
		e.preventDefault();
		showContent($(this));
	});

	$(".presenters li .content .close").on("click", function(e){
		e.preventDefault();
		hideAllContent();
	});

	$("#intro .intro").on("click", function(){
		if($(this).find(".info").is(':visible')){
			$(this).find(".info").hide();
		}else{
			$(this).hide();
		}
		
	});

	$("#intro h1").on("click", function(){
		$("#intro .intro").show();
		$("#intro .intro .info").show();
	});
	$('html').click(function() {
		hideAllContent();
	});

	$('.presenters li a').click(function(event){
	    event.stopPropagation();
	});
}

function showContent(obj) {
	$(".presenters .content").each(function(index, value) { 
	    if($(this).css("display")=="block"){
	    	$(this).hide();
	    }
	});

	$(".presenters li a >.oneliner").show();
	$(".presenters li a >.oneliner").not(obj.find(".oneliner")).hide();
	$(".presenters li a").not(obj).removeClass("active");

	obj.addClass("active").parent().find(".content").show();
}
function hideAllContent(){
	$(".presenters .content").hide();
	$(".presenters li a >.oneliner").show();
	$(".presenters li a").removeClass("active");
}
$(document).ready(init);
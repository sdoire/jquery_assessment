$(document).ready(function(){
	var clicks = 0;


	$("body").on('click', '#first', function(){
	$("body").append("<div class=\"new\" id=\"new\" data-button-toggle=\"1\"></div");
	var $el = $("body").children().last();
	$el.append("<p>Here are the number of clicks: " + clicks + "</p>" + "<button id=\"color\">Change color</button>" + "<button id=\"remove\">Remove</button>");
	clicks++;
	});

	$('body').on('click', '#color', function(){
		var article = document.getElementById('new');

		if(article.dataset.buttonToggle == 1){
		$(this).parent().css("background-color", "red");
		article.dataset.buttonToggle = 2;
	} else {
		$(this).parent().css("background-color", "green");
		article.dataset.buttonToggle = 1;
	}
	});

	$('body').on('click', '#remove', function(){
		$(this).parent().remove();
	});
});

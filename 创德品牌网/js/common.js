$(function(){
	
	
	  $(".jczt > li").hover(function(){
		    var index = $(this).index();
		 	$(this).addClass("current").siblings().removeClass("current");
			$(this).parents(".jczt").next(".jcztlist").children().hide().eq(index).show();
		 });
});
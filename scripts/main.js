$(document).ready(function(){

	$('input[type="checkbox"]').ezMark();
	
	$("a.closeBtn").on("click", function(){
		$(".popup, .popupOverlay").css("display","none");
		$("a.closeBtn").css("display","none");
	});
	
	var galleryIndex;
	$(".galleryItems a").click( function(e) {
	
		e.preventDefault();
	
		var tempLink = $(this).attr("href");
		galleryIndex = $(".galleryItems li").index($(this).parent());
	
		galleryOpener(tempLink, galleryIndex);
		
	});
	
	function galleryOpener(itemLink, itemIndex)
	{	
	
		$(".popupOverlay").css("opacity","0.8");
		
		$(".popup, .popupOverlay").css("display","block");
	
		galleryIndex = itemIndex;
	
		$('.popupContent').html("");
		$('.popupContent').append('<img src="'+ itemLink +'" />');
		$("a.closeBtn").css("display","block");
	}
	
});
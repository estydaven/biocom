$(window).load(function() {
    $('#carousel').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 210,
      itemMargin: 5,
      asNavFor: '#slider'
    });
   
    $('#slider').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#carousel"
    });
  });

(function($) {
    $(function() {
      $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
})(jQuery);

$(document).ready(function() {
	
	$("#open-menu").on("click", function() {
		var target = $(this).attr("data-target");
		if($(target).hasClass("open")) {
			$(target).removeClass("open");
		} else {
			$(target).addClass("open");
		}		
	})

	$(window).on("load resize", windowSize);

	function windowSize() {
		if ($(window).width() > "768") {
			var menu = $("#open_menu").attr("data-target");
			$(menu).removeClass("open");
		}
	}

});
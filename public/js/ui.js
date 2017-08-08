
$(function(){

	$('.deskmenu ul').hover(

		function() {

			if($('.sub_a').length > 0 ){
				$('.submenu').addClass('submenu-open')	
			}else{
				$('.submenu').removeClass('submenu-open')	
			}	

		}, function() {

			$('.submenu').removeClass('submenu-open').delay( 200 )
		}


	);

	

	// $('.bxslider_1').bxSlider({
	//   pagerCustom: '.bx-pager_1'
	// });	

 //  $(".hamburg").click(function(){
 //     $('.aside').delay(200).toggleClass("hamburg-open");
 //     $(this).delay(200).toggleClass("active");
 //    });




	$('.boxtitle').click(function(){
		$('.display_1').toggleClass( "active" )
  // 		if($(this).hasClass("open")){
		// 	$(this).removeClass("open");
		// 	$(this).parent().find('.display_1').slideUp(200);
		// } else{
		// 	$(this).addClass("open");
		// 	$(this).parent().find('.display_1').slideDown(300);
		// }


		
	});

	
	// $('.toggle_btn').click(function(){
	// 	$('.fat_footer').toggleClass( "fat-footer_show" )
	// 	return false
	// });


  $(".hamburg").click(function(){
     $('.aside').delay(200).toggleClass("hamburg-open");
     $(this).delay(200).toggleClass("cross");
    });

  $(".go_submenu").click(function(){
      $('.m-second_bg').addClass("second-open");
    });

  $(".second-goback").click(function(){
      $('.m-second_bg').removeClass("second-open");
      
    });


  $(".hamburg").click(function(){
      $('.m-second_bg').removeClass("second-open");
  	});

  $(".switch_btn").click(function(){
      $('.interpretation_data').toggleClass("auto_height");
  	});


var top_dis = $('.show_aside').offset().top



  $(".show_aside").click(function(){
      $('.classification_screening').toggleClass("show_aisde_postsearch");
       $('.classification_screening').css('top', 'top_dis + 200' )
  	});

  $(".aside_close").click(function(){
      $('.classification_screening').removeClass("show_aisde_postsearch");
  	});



	//   $(".show-1").click(function(){
	//       $('.active-1').addClass("second-open");
	//     });
	//   $(".show-2").click(function(){
	//       $('.active-2').addClass("second-open");
	//     });
	//   $(".show-3").click(function(){
	//       $('.active-3').addClass("second-open");
	//     });
	//   $(".show-4").click(function(){
	//       $('.active-4').addClass("second-open");
	//     });	  
	//   $(".show-5").click(function(){
	//       $('.active-5').addClass("second-open");
	//     });



});







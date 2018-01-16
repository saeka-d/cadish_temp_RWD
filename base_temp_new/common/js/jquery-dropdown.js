$(document).ready(function($){
	var timer = false;
	var winWidth = $(window).width();
	var winWidth_resized;

	$("#open_menu").on("click", function(){
		if($('#gnav ul').css('display') == 'none'){
			$("html,body").addClass('pos_fix');
			$("#gnav").wrap("<div id='gnav_wrap'></div>");
			$("#gnav").css("position","relative");
		} else {
			$("html,body").removeClass('pos_fix');
			$("#gnav").unwrap();
			$("#gnav").css("position","fixed");
		}
		$("#gnav ul").slideToggle();
		$(this).toggleClass("active");
	});

	//閉じるボタン用　不要な場合は削除してください。
	$(".close_menu").on("click",function(){
		$("html,body").removeClass('pos_fix');
		$("#gnav").unwrap();
		$("#gnav").css("position","fixed");
		$("#gnav ul").slideUp();
		$("#open_menu").removeClass("active");
	});

	jQuery(window).on('resize',function(){
		// リサイズ後の放置時間が指定ミリ秒以下なら何もしない(リサイズ中に何度も処理が行われるのを防ぐ)
		if (timer !== false) {
			clearTimeout(timer);
		}
		// 放置時間が指定ミリ秒以上なので処理を実行
		timer = setTimeout(function() {
			// リサイズ後のウインドウの横幅を取得
			winWidth_resized = $(window).width();

			// リサイズ前のウインドウ幅とリサイズ後のウインドウ幅が異なる場合
			if ( winWidth !== winWidth_resized ) {
				// ここにやりたい処理書く
				if($('#open_menu').hasClass('active')){
					$('#open_menu').removeClass('active');
				}
				if($('#gnav_wrap').length){
					$("html,body").removeClass('pos_fix');
					$("#gnav").unwrap();
					$("#gnav").css("position","fixed");
				}

				if( winWidth_resized > 768) {
					$('#gnav ul').show();
					$("#gnav").css("position","");
				} else {
					$('#gnav ul').hide();
				}

				// 次回以降使えるようにリサイズ後の幅をウインドウ幅に設定する
				winWidth = $(window).width();
			}
		}, 200);
	});
});
$(function(){
	var $my_IP_navli = $("#my_IP_nav li")
	
	$my_IP_navli.click(function(){
		$(this).addClass("mycori_top_li_ati").siblings().removeClass("mycori_top_li_ati")
//		console.log($(this).index())
		if($(this).index()===0){
			$(".my_allItems").css("z-index","0").siblings().css("z-index","-3");
			$(".my_container_right_main").css("height","560px")
		}
		if($(this).index()===1){
			$(".my_wait_play").css("z-index","0").siblings().css("z-index","-3");
			$(".my_container_right_main").css("height","322px")
		}
		if($(this).index()===2){
			$(".my_container_success").css("z-index","0").siblings().css("z-index","-3");
			$(".my_container_right_main").css("height","450px")
		}
		if($(this).index()===3){
			$(".my_container_favorite").css("z-index","0").siblings().css("z-index","-3");
			$(".my_container_right_main").css("height","450px")
		}
		
	})
	
	
	/*个人账户  myzh_IP_nav*/
	var $myzh_IP_nav = $("#myzh_IP_nav li")
	
	$myzh_IP_nav.click(function(){
		$(this).addClass("zhanhao_li_act").siblings().removeClass("zhanhao_li_act")
//		console.log($(this).index())
		if($(this).index()===0){
			$(".myzh_jiben").css("z-index","0").siblings().css("z-index","-3");
			$(".myzh_container_right_main").css("height","544px")
		}
		if($(this).index()===1){
			$(".myzh_zhanghao").css("z-index","0").siblings().css("z-index","-3");
			$(".myzh_container_right_main").css("height","1041px")
		}
		if($(this).index()===2){
			$(".myzh_qita").css("z-index","0").siblings().css("z-index","-3");
			$(".myzh_container_right_main").css("height","468px")
		}
		
	})
	
	
	/*用户导引*/
	
	var $guideLi = $("#guide li")
	
	$guideLi.click(function(){
		$(this).addClass("guide_nav_li").siblings().removeClass("guide_nav_li")
//		console.log($(this).index())
		if($(this).index()===0){
            $(".know_des_content").css({"height":"2890px","background-image":"url(../ying/img/guide/guide.jpg)"})
     	}
		if($(this).index()===1){
            $(".know_des_content").css({"height":"3339px","background-image":"url(../ying/img/guide/guide-problem.jpg)"})
			
		}
		if($(this).index()===2){
            $(".know_des_content").css({"height":"1068px","background-image":'url(../ying/img/guide/guide-safe.jpg)'})
			
		}
		
	})
	
	
/*关于我们*/

	var $ours_homeLi = $("#ours_home li")
	
	$ours_homeLi.click(function(){
		$(this).addClass("our_nav_li").siblings().removeClass("our_nav_li")
//		console.log($(this).index())
		if($(this).index()===0){
			$(".our_jianjie").css("z-index","0").siblings().css("z-index","-3");
			$(".our_woshikei").css("height","1984px")
		}
		if($(this).index()===1){
			$(".our_we_yiqi").css("z-index","0").siblings().css("z-index","-3");
			$(".our_woshikei").css("height","1792px")
		}
		if($(this).index()===2){
			$(".our_yohus").css("z-index","0").siblings().css("z-index","-3");
			$(".our_woshikei").css("height","2128px")
		}
		if($(this).index()===3){
			$(".our_lianxi").css("z-index","0").siblings().css("z-index","-3");
			$(".our_woshikei").css("height","1009px")
		}
	})
	


	//单选点击
$(".radio").click(function(){
	var ele = $(this).children().children(".label_img");
	 $(this).children().children(".label_img").addClass("radio_active");
	 $(this).siblings().children().children(".label_img").removeClass("radio_active")
})
$(".checkbox").click(function(){
	if( $(this).children().children().hasClass("checkbox1_active")){
		 $(this).children().children(".label_img1").removeClass("checkbox1_active");
	}else{
		$(this).children().children(".label_img1").addClass("checkbox1_active")
	}
	
	 console.log( $(this).children().children().hasClass("checkbox1_active"))
})



//失焦聚焦边框颜色变换
	$(".input_name").focus(function(){
		$(this).parent().css("border-color","#1ba2dc");
	})
	$(".input_name,.textarea").blur(function(){
		$(this).parent().css("border-color","#cccccc");
	})
	$(".textarea").focus(function(){
		$(this).parent().css("border-color","#f55847");
	})
//	$(".textarea").blur(function(){
//		$(this).parent().css("border-color","#cccccc");
//	})
	$(".city_nav li").click(function(){
		$(this).addClass("city_active");
		$(this).siblings().removeClass("city_active");
		var index = $(this).index();
		$(".city_detail").eq(index).removeClass("nav_active");
		$(".city_detail").eq(index).siblings(".city_detail").addClass("nav_active");
	})
	$(".city").click(function(){
		$(".city_choose").toggle();
		$(".stage_choose").hide();
	})
	$(".stage").click(function(){
		$(".stage_choose").toggle();
	})
	$(".stage_choose li").click(function(){
		$(".stage_choose").hide();
		var str = $(this).text();
		$(".stage").text(str);
		console.log(str)
	})
	$(".city_detail li").click(function(){
		$(".city_choose").hide();
		var str = $(this).text();
		$(".city").text(str);
		$(".city").css({"background-color":"#f6f6f6","color":"#000"});
	})

            $(".list_nav li").click(function(){
				var index = $(this).index();
				$(this).addClass("list_active1").siblings("li").removeClass("list_active1");
			})

//投资人推荐
$(".person_box_add").click(function(){
	$(".popup_box").css("display","block");
	$(".popup").css("display","block");
	console.log("4444")
})
$(".save_btn2").click(function(){
	$(".popup_box").css("display","none");
	$(".popup").css("display","none");
})
$(".cancel_btn2").click(function(){
	$(".popup_box").css("display","none");
	$(".popup").css("display","none");
})
$(".popup_box").click(function(){
	$(".popup_box").css("display","none");
	$(".popup").css("display","none");
})
$(".popup_choose").click(function(){
	$(this).addClass("popup_active");
	$(this).siblings().removeClass("popup_active");
})






	
	
})



function huanye(m){
	var obj1 = {"z-index": "0","display": "block"}
	var obj2 = {"z-index": "-3","display": "none"}
	
	if( m == 1 ){
		$(".guo_kuilei").css("height", "824px");
		$(".guo_woshi_yi").css(obj1).siblings().css(obj2);
		$(".mei_2_le").css("display","none");
		$(".mei_3_le").css("display","none");
		$(".mei_4_le").css("display","none");
		$(".dao_2_le").css("display","block");
		$(".dao_3_le").css("display","block");
		$(".dao_4_le").css("display","block");
	}
	if( m == 2 ){
		$(".guo_kuilei").css("height", "1176px")
		$(".guo_woshi_er").css(obj1).siblings().css(obj2)
		$(".mei_2_le").css("display","block");
		$(".dao_2_le").css("display","none");
		
		$(".mei_3_le").css("display","none");
		$(".mei_4_le").css("display","none");
		
		$(".dao_3_le").css("display","block");
		$(".dao_4_le").css("display","block");
	}
	if( m == 3 ){
		$(".guo_kuilei").css("height", "841px")
		$(".guo_woshi_san").css(obj1).siblings().css(obj2)
		$(".mei_3_le").css("display","block");
		$(".dao_3_le").css("display","none");
		
		$(".mei_2_le").css("display","block");
		$(".mei_4_le").css("display","none");
		
		$(".dao_2_le").css("display","none");
		$(".dao_4_le").css("display","block");
	}
	if( m == 4 ){
		$(".guo_kuilei").css("height", "531px")
		$(".guo_woshi_si").css(obj1).siblings().css(obj2)
		$(".mei_4_le").css("display","block");
		$(".dao_4_le").css("display","none");
		
		$(".mei_3_le").css("display","block");
		$(".mei_2_le").css("display","block");
		
		$(".dao_3_le").css("display","none");
		$(".dao_2_le").css("display","none");
	}
	
	
}








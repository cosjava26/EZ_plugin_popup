$(document).ready(function() { 
	//tab切換
	$(".tabs-item").hide();
    $(".tabs-item:first").show();

	$("ul.tabs li").click(function() {
		
      $(".tabs-item").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");
	  
    });

	//卡片旋轉
	$(".flip").click(function(){
  		$(this).parents(".wrap").addClass("flipped");
  	});
  
	$(".flipback").click(function(){
	  $(this).parents(".wrap").removeClass("flipped");
	});

	//alert彈窗
	$('.icon-delete').on('click', function () {
	    swal({
	    	width: 250,
	    	padding: 10,
			title: '<span class="alert-title">您確定要刪除此商品嗎？</span>',
			type: 'warning',
			showCloseButton: true,
			showCancelButton: true,
			confirmButtonColor: '#ff752b',
			cancelButtonColor: '#e8e8e8',
			confirmButtonText: '刪除',
			cancelButtonText:'取消'
		}).catch(swal.noop)
  	});
  	$('.delete-alert2').on('click', function () {
	    swal({
	    	width: 300,
	    	padding: 10,
			title: '<span class="alert-title">確定要關閉提醒嗎？您可以在收藏找到此商品喔!</span>',
			type: 'warning',
			showCloseButton: true,
			showCancelButton: true,
			confirmButtonColor: '#ff752b',
			cancelButtonColor: '#e8e8e8',
			confirmButtonText: '確認關閉',
			cancelButtonText:'取消'
		}).catch(swal.noop)
  	});
});




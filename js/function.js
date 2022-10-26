//popup 버튼 클릭시 사라지게
$('.close>a').on('click',function(){
	$('.popup-wrap').css('display','none');
});


//visual 슬라이드
{
const $indicators = $('.visual-pagination a');
const $slides = $('.visual-container p');

const $btnPrev = $('.prev');
const $btnNext = $('.next');

let nowIdx = 0;

const fadeAction = function(){
	//슬라이드 처리
	$slides.eq(nowIdx).stop().fadeIn(5000).siblings().fadeOut();

	//인디케이터 활성화
	$indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

};

$indicators.on('click',function(evt){
	evt.preventDefault();

	//nowIdx 추출
	nowIdx = $indicators.index(this);

	fadeAction();
});


//다음버튼 이벤트 클릭
$btnNext.on('click',function(evt){
	evt.preventDefault();

	if(nowIdx<4){	
		nowIdx++;
	}else{
		nowIdx=0;
	}

	fadeAction();
});

//이전버튼 이벤트 클릭
$btnPrev.on('click',function(evt){
	evt.preventDefault();

	if(nowIdx>0){
		nowIdx--;
	}else{
		nowIdx=4;
	}

	fadeAction();
});


// 	//자동재생
// 	$btnAuto.on('click', function(){
// 		if($(this).hasClass('pause')){//play 중이면....

// 			$(this).removeClass('pause');
// 			clearInterval(intervalKey);

// 		}else{
// 			$(this).addClass('pause');
			
// 			intervalKey = setInterval(function(){
// 				$btnNext.trigger('click');//이벤트강제발생
// 			},2000);            
// 		}
// });


$(window).on('load', function(){
	intervalKey = setInterval(function(){
		$btnNext.trigger('click');//이벤트강제발생
	},8000);
});

}

//cont2 - pick 슬라이드 
{
	const $pbtnPrev = $('.cont2>.pick-prev');
	const $pbtnNext = $('.cont2>.pick-next');

	const $pcontainer = $('#cont > .cont2 > .slides > .slides-container');

	$pbtnPrev.on('click', function(evt){
		evt.preventDefault();

		$pcontainer.stop().animate({
			left:290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(9).prependTo($pcontainer);
			$pcontainer.css('left',0);
		});
  });


	$pbtnNext.on('click', function(evt){
		evt.preventDefault();
  
		$pcontainer.stop().animate({
			left:-290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(0).appendTo($pcontainer);
			$pcontainer.css('left',0);
		});
  })

}


//cont3 - new 슬라이드 
{
	const $pbtnPrev = $('.cont3>.new-prev');
	const $pbtnNext = $('.cont3>.new-next');

	const $pcontainer = $('#cont > .cont3 > .slides > .new-container');

	$pbtnPrev.on('click', function(evt){
		evt.preventDefault();

		$pcontainer.stop().animate({
			left:290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(9).prependTo($pcontainer);
			$pcontainer.css('left',0);
		});
  });


	$pbtnNext.on('click', function(evt){
		evt.preventDefault();
  
		$pcontainer.stop().animate({
			left:-290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(0).appendTo($pcontainer);
			$pcontainer.css('left',0);
		});
  })

}


//cont4 - pad 슬라이드 
{
	const $pbtnPrev = $('.cont4>.pad-prev');
	const $pbtnNext = $('.cont4>.pad-next');

	const $pcontainer = $('#cont > .cont4 > .slides > .pad-container');

	$pbtnPrev.on('click', function(evt){
		evt.preventDefault();

		$pcontainer.stop().animate({
			left:290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(5).prependTo($pcontainer);
			$pcontainer.css('left',0);
		});
  });


	$pbtnNext.on('click', function(evt){
		evt.preventDefault();
  
		$pcontainer.stop().animate({
			left:-290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(0).appendTo($pcontainer);
			$pcontainer.css('left',0);
		});
  })

}


//cont5 - recommend 슬라이드 
{
	const $pbtnPrev = $('.cont5>.recmd-prev');
	const $pbtnNext = $('.cont5>.recmd-next');

	const $pcontainer = $('#cont > .cont5 > .slides > .recommend-container');

	$pbtnPrev.on('click', function(evt){
		evt.preventDefault();

		$pcontainer.stop().animate({
			left:650
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(6).prependTo($pcontainer);
			$pcontainer.css('left',0);
		});
  });


	$pbtnNext.on('click', function(evt){
		evt.preventDefault();
  
		$pcontainer.stop().animate({
			left:-650
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(0).appendTo($pcontainer);
			$pcontainer.css('left',0);
		});
  })

}

//cont6 - pad 슬라이드 
{
	const $pbtnPrev = $('.cont6>.harness-prev');
	const $pbtnNext = $('.cont6>.harness-next');

	const $pcontainer = $('#cont > .cont6 > .slides > .harness-container');

	$pbtnPrev.on('click', function(evt){
		evt.preventDefault();

		$pcontainer.stop().animate({
			left:290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(9).prependTo($pcontainer);
			$pcontainer.css('left',0);
		});
  });


	$pbtnNext.on('click', function(evt){
		evt.preventDefault();
  
		$pcontainer.stop().animate({
			left:-290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(0).appendTo($pcontainer);
			$pcontainer.css('left',0);
		});
  })

}

//cont8 - cleanliness 슬라이드 
{
	const $pbtnPrev = $('.cont8>.clean-prev');
	const $pbtnNext = $('.cont8>.clean-next');

	const $pcontainer = $('#cont > .cont8 > .slides > .cleanliness-container');

	$pbtnPrev.on('click', function(evt){
		evt.preventDefault();

		$pcontainer.stop().animate({
			left:290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(9).prependTo($pcontainer);
			$pcontainer.css('left',0);
		});
  });


	$pbtnNext.on('click', function(evt){
		evt.preventDefault();
  
		$pcontainer.stop().animate({
			left:-290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(0).appendTo($pcontainer);
			$pcontainer.css('left',0);
		});
  })

}

//cont9 - health 슬라이드 
{
	const $pbtnPrev = $('.cont9>.health-prev');
	const $pbtnNext = $('.cont9>.health-next');

	const $pcontainer = $('#cont > .cont9 > .slides > .health-container');

	$pbtnPrev.on('click', function(evt){
		evt.preventDefault();

		$pcontainer.stop().animate({
			left:290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(9).prependTo($pcontainer);
			$pcontainer.css('left',0);
		});
  });


	$pbtnNext.on('click', function(evt){
		evt.preventDefault();
  
		$pcontainer.stop().animate({
			left:-290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(0).appendTo($pcontainer);
			$pcontainer.css('left',0);
		});
  })

}

//cont10 - health 슬라이드 
{
	const $pbtnPrev = $('.cont10>.sought-prev');
	const $pbtnNext = $('.cont10>.sought-next');

	const $pcontainer = $('#cont > .cont10 > .slides > .soughtafter-container');

	$pbtnPrev.on('click', function(evt){
		evt.preventDefault();

		$pcontainer.stop().animate({
			left:290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(9).prependTo($pcontainer);
			$pcontainer.css('left',0);
		});
  });


	$pbtnNext.on('click', function(evt){
		evt.preventDefault();
  
		$pcontainer.stop().animate({
			left:-290
		},400,'easeInOutCubic',function(){
			$pcontainer.children('li').eq(0).appendTo($pcontainer);
			$pcontainer.css('left',0);
		});
  })

}

//top 버튼 이벤트 구문
$(window).scroll(function(){
	if($(window).scrollTop() > 100){
		$(".top").fadeIn();
	}else{
		$(".top").fadeOut();
	}
});
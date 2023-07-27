$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			play();
		});
	});
	
	function play() {
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		setTimeout(bannar_coming, 3000);
		
	}
	
	function bannar_coming() {
		$('.banner').addClass('banner-come');
		setTimeout(balloons_flying, 3000);
	}

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	
	function balloons_flying() {
		$('.balloon-border').animate({top:-500},9000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		console.log("balloons flying1");
		loopTwo();
		console.log("balloons flying2");
		loopThree();
		console.log("balloons flying3");
		loopFour();
		console.log("balloons flying4");
		loopFive();
		console.log("balloons flying5");
		loopSix();
		console.log("balloons flying6");
		loopSeven();
		console.log("balloons flying7");
		/*$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});*/
		setTimeout(wish_message, 8000);
	}

	function wish_message()	{
		vw = $(window).width()/2;
		loopOne();
		console.log("balloons flying1");
		loopFour();
		console.log("balloons flying4");
		loopSix();
		console.log("balloons flying6");
		$('#b3, #b5').stop();
		//$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		/*$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')*/
		$('#b3').attr('id','b33')
		//$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		/*$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);*/
		$('#b33').animate({top:240, left: vw-150},500);
		//$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		//$('#b66').animate({top:240, left: vw+150},500);
		//$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(2000);
		console.log("story");
		setTimeout(story, 2000);
		// $('#story').fadeIn('slow');
		
	}		
	
	function story() {
		$('.message').fadeIn('slow');
		console.log("message");
		$("p:nth-child("+1+")").fadeIn('slow');
		$("p:nth-child("+2+")").fadeIn('slow');
		$("p:nth-child("+3+")").fadeIn('slow');
		$('#fireworks').fadeIn('slow');	
	}

	$('#fireworks').click(function(){
		window.location = "https://vidyasagar1507.github.io/valli-fireworks/";
	});
});

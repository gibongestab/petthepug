

$(document).ready(function () {


var min = 0;
var hour = 0;
var daycount = 1;

var fun = 100;

var pugFeelings = {
	fun: 100,
	love: 100,
	poop: 0,
	food: 0,
	bath: 100,
	sleep: 0,
}


var updateFun = function () {
	if (hour >= 6 && hour <= 16) {
		pugFeelings.fun -= 2;
		$('#progress-fun').css("width", pugFeelings.fun + '%');	
	}
}

var updateLove = function () {
	pugFeelings.love -= 0.5;
	$('#progress-love').css("width", pugFeelings.love + '%');	
} 

var updatePoop = function () {
	pugFeelings.poop += 2;
	$('#progress-poop').css("width", pugFeelings.poop + '%');	
} 

var updateBath = function () {
	pugFeelings.bath -= 1;
	$('#progress-bath').css("width", pugFeelings.bath + '%');	
} 

var updateSleep = function () {
	pugFeelings.sleep += 1;
	$('#progress-sleep').css("width", pugFeelings.sleep + '%');	
} 

var updateFood = function () {
	pugFeelings.food += 1;
	$('#progress-food').css("width", pugFeelings.food + '%');	
} 



	setInterval(function() {
		 min++;
		 if (min > 59) {
		 	min = 0;
		 	hour++;
		 	  if (hour > 23) {
		 	  	hour = 0;
		 	  	daycount++;
		 	  }
		 }
	 	var formattedMin = min;
		var formattedHour = hour;
		 if (min < 10) {
		 	formattedMin = "0" + min;
		 }
		 if (hour < 10){
		 	formattedHour = "0" + hour;
		 }


   		 $('#clock').text(formattedHour + ':' + formattedMin);
   		 $('#day').text('Day ' + daycount);


	}, 1000);


	setInterval(function() {

		updateFun()
		updateLove()
		updatePoop()
		updateBath()
		updateSleep()
		updateFood()

	}, 3000);


})




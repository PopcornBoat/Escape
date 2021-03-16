var diamond_counter = 0 /*reach 5 means pass*/

/**
Qiaodan Luo B00880104 part starts.
**/

var count = 0;
var count_flag1 = 0;
var count_flag2 = 0;

/**
When click start1 button, the button disappears and the game starts.
**/
function start() {
	count = 0;
	document.getElementById("startbtn").style.display = "none";
	document.getElementById("be").style.display = "none"
	document.getElementById("he").style.display = "none"
	document.getElementById("hint").style.display = "none"
	document.getElementById("main-game").style.display = "block";
	document.getElementById("angry").style.display = "block";
	document.getElementById("dia_1").style.display = "block"

}

/**
Control what happens when click NEXT.
**/
function next() {
	count++;
	if (count == 1) {
		document.getElementById("choice1").style.display = "block";
		document.getElementById("choice2").style.display = "block";
	}
	if (count == 1 && count_flag1 > 0 && count_flag2 > 0) {
		document.getElementById("choice1").style.display = "block";
		document.getElementById("choice2").style.display = "block";
		document.getElementById("choice3").style.display = "block";
	}
	if (count == 101) {
		document.getElementById("crazy").style.display = "none";
		document.getElementById("dia_3").style.display = "none";
		document.getElementById("be").style.display = "block";
	}

	if (count == 201) {
		document.getElementById("happy").style.display = "none";
		document.getElementById("dia_2").style.display = "none";
		document.getElementById("he").style.display = "block";
	}

	if (count == 301) {
		document.getElementById("sad").style.display = "none";
		document.getElementById("dia_4").style.display = "none";
		document.getElementById("hint").style.display = "block";
	}

}

/**
Control what happens when click different choices. choice 3 won't appear until first 2 are clicked at least once.
**/
function flag1() {
	count_flag1++;
	count = 100;
	document.getElementById("choice1").style.display = "none";
	document.getElementById("choice2").style.display = "none";
	document.getElementById("angry").style.display = "none";
	document.getElementById("dia_1").style.display = "none";
	document.getElementById("crazy").style.display = "block";
	document.getElementById("dia_3").style.display = "block";
}

function flag2() {
	count_flag2++;
	count = 200;
	document.getElementById("choice1").style.display = "none";
	document.getElementById("choice2").style.display = "none";
	document.getElementById("angry").style.display = "none";
	document.getElementById("dia_1").style.display = "none";
	document.getElementById("happy").style.display = "block";
	document.getElementById("dia_2").style.display = "block";
}

function flag3() {
	count = 300;
	document.getElementById("choice1").style.display = "none";
	document.getElementById("choice2").style.display = "none";
	document.getElementById("choice3").style.display = "none";
	document.getElementById("angry").style.display = "none";
	document.getElementById("dia_1").style.display = "none";
	document.getElementById("sad").style.display = "block";
	document.getElementById("dia_4").style.display = "block";
}
var diamond_counter_1 = 0;
document.getElementById("hidden-password").addEventListener("click", function () {
	document.getElementById("diamond-1").src = "img/diamond-show.png";
	diamond_counter_1 = 1;
});


/**
Qiaodan Luo part ends.
**/

/*=================================================================================================================================*/

/*Yuxuan Wang B00880845 part STARTs here*/

function welcome() {
	alert("Welcome to the ESCAPE game created by IRON MAN 4! \nYou are going to find out clues to pass all 5 stages.\nWhat you get from one stage may  or may not be critical for solving other stages!\nWhen passing a stage you get a diamond and 5 diamonds means you have passed the game!\nNow, let's get started!!!")
};

var bgIcons = document.getElementsByClassName("bg-icon");
var orig = Array.from(bgIcons);
var correct = [orig[0], orig[3], orig[5], orig[8]];
var notCrkt = [orig[1], orig[2], orig[4], orig[6], orig[7]];
var mark = 0;

//click to reveal the pic and turn back to bg in 0.5sec
//correct pic -> gain marks

correct.forEach(function change(element) {
	element.addEventListener("click", function () {
		if (mark != 4) {
			mark += 1;
			document.getElementById("mark").innerHTML = mark + " Found";
			element.src = "img/iron-man-icon-game.png ";
			element.style.cssText = "width: 31%;";
			element.style.cssText = "height: 31%;";
		}
		
	});
});

//incorrect pic -> no marks
var diamond_counter_2 = 0;
notCrkt.forEach(function change(element) {
	element.addEventListener("click", function () {
		mark = 0;
		document.getElementById("mark").innerHTML = mark + " Found";
		//bg goes red
		element.style.cssText = "background-color: red";
		setTimeout(function () {
			element.style.cssText = "background-color: none";
		}, 500);

		//incorrect click, set to start1
		correct.forEach(function change(e) {
			e.src = "img/blanc.png";
			e.style.cssText = "width: 31%;";
			e.style.cssText = "height: 31%;";
			document.getElementById("diamond-2").src = "img/diamond-hide.png";
			diamond_counter_2 = 0;
		});
	});
	//=======================================
});
//=================================================================

//button event
//after received 4 marks, click the button to get hint to pass the stage
//after clicking the button, click the text to pass
//if click the button before having 4 marks, no pass!
var btn = document.getElementById("next");

btn.addEventListener("mouseover", function () {
	if (mark == 4) {
		document.getElementById("msg").innerHTML = "Catch me if you can !!!";
		btn.addEventListener("click", function () {
			document.getElementById("msg").innerHTML = "Not gonna be this easy !!!";
		});

	}
	else {
		document.getElementById("msg").innerHTML = "NICE TRY!";
		setTimeout(function () {
			document.getElementById("msg").innerHTML = "";
		}, 2000);
	}
});

document.getElementById("msg").addEventListener("click", function () {
	if (mark == 4) {
		document.getElementById("diamond-2").src = "img/diamond-show.png";
		diamond_counter_2 = 1;
	}
});



/*Yuxuan Wang part ENDs*/

/*=================================================================================================================================*/

/*Nicholas part STARTs here B00797153*/
/**This function is to let the user start1 the game and with the css code has all elements except for the start1 button and the header hidden */
var count_nic
var diamond_counter_3 = 0;
function start_nic() {
	count_nic = 0;
	document.getElementById("startbutton").style.display = "none";
	document.getElementById("answers").style.display = "block";
	document.getElementById("questions").style.display = "block";
	document.getElementById("question1").style.display = "block";
	document.getElementById("answers-1").style.display = "block";
	document.getElementById("answers-2").style.display = "none";
	document.getElementById("answers-3").style.display = "none";
	document.getElementById("answers-4").style.display = "none";
	document.getElementById("answers-5").style.display = "none";
	document.getElementById("next-stage").style.display = "none";
}
/**This function is for when the user gets the correct answer on clicking the buttons and will remove the old question and answers and then display the next question and answers*/
function correct_nic() {
	document.getElementById("incorrect").style.display = "none";
	document.getElementById("correct_nic").style.display = "block";
	if (count_nic == 0) {
		document.getElementById("question1").style.display = "none";
		document.getElementById("answers-1").style.display = "none";
		document.getElementById("question2").style.display = "block";
		document.getElementById("answers-2").style.display = "block";
		count_nic++;
	}
	else if (count_nic == 1) {
		document.getElementById("question2").style.display = "none";
		document.getElementById("answers-2").style.display = "none";
		document.getElementById("question3").style.display = "block";
		document.getElementById("answers-3").style.display = "block";
		count_nic++;
	}
	else if (count_nic == 2) {
		document.getElementById("question3").style.display = "none";
		document.getElementById("answers-3").style.display = "none";
		document.getElementById("question4").style.display = "block";
		document.getElementById("answers-4").style.display = "block";
		count_nic++;
	}
	else if (count_nic == 3) {
		document.getElementById("question4").style.display = "none";
		document.getElementById("answers-4").style.display = "none";
		document.getElementById("question5").style.display = "block";
		document.getElementById("answers-5").style.display = "block";
		count_nic++;
	}
	else if (count_nic == 4) {
		document.getElementById("question5").style.display = "none";
		document.getElementById("answers-5").style.display = "none";
		document.getElementById("stage-passed").style.display = "block";
		document.getElementById("next-stage").style.display = "block";
	}
}
/**This is to let the user know when they get the wrong answer and remove the correct answer message */
function incorrect() {
	document.getElementById("incorrect").style.display = "block";
	document.getElementById("correct_nic").style.display = "none";
}
function nextStage() {
/**code to link to the next stage  */
/* outer function by Nicholas, inner function uses Yuxuan's port to show the diamond picture  */
	document.getElementById("diamond-3").src = "img/diamond-show.png";
	diamond_counter_3 = 1;
}


/*Nicholas part ENDs*/

/*=================================================================================================================================*/

/*Logan part starts*/
var counter_logan = 0;
var diamond_counter_4 = 0;
function button1() {
	document.getElementById("q1").style.display = "block";
	document.getElementById("q2").style.display = "none";
	document.getElementById("q3").style.display = "none";
	document.getElementById("q4").style.display = "none";
	document.getElementById("q5").style.display = "none";
	document.getElementById("incorrect_logan").style.display = "none";
	document.getElementById("correct_logan").style.display = "none";
	document.getElementById("NextStage").style.display = "none";

}
function button2() {
	document.getElementById("q1").style.display = "none";
	document.getElementById("q2").style.display = "block";
	document.getElementById("q3").style.display = "none";
	document.getElementById("q4").style.display = "none";
	document.getElementById("q5").style.display = "none";
	document.getElementById("incorrect_logan").style.display = "none";
	document.getElementById("correct_logan").style.display = "none";
	document.getElementById("NextStage").style.display = "none";

}
function button3() {
	document.getElementById("q1").style.display = "none";
	document.getElementById("q2").style.display = "none";
	document.getElementById("q3").style.display = "block";
	document.getElementById("q4").style.display = "none";
	document.getElementById("q5").style.display = "none";
	document.getElementById("incorrect_logan").style.display = "none";
	document.getElementById("correct_logan").style.display = "none";
	document.getElementById("NextStage").style.display = "none";

}
function button4() {
	document.getElementById("q1").style.display = "none";
	document.getElementById("q2").style.display = "none";
	document.getElementById("q3").style.display = "none";
	document.getElementById("q4").style.display = "block";
	document.getElementById("q5").style.display = "none";
	document.getElementById("incorrect_logan").style.display = "none";
	document.getElementById("correct_logan").style.display = "none";
	document.getElementById("NextStage").style.display = "none";
}
function button5() {
	document.getElementById("q1").style.display = "none";
	document.getElementById("q2").style.display = "none";
	document.getElementById("q3").style.display = "none";
	document.getElementById("q4").style.display = "none";
	document.getElementById("q5").style.display = "block";
	document.getElementById("incorrect_logan").style.display = "none";
	document.getElementById("correct_logan").style.display = "none";
	document.getElementById("NextStage").style.display = "none";
}
function isCorrect() {
	document.getElementById("correct_logan").style.display = "block";
	document.getElementById("NextStage").style.display = "block";
	document.getElementById("q1").style.display = "none";
	document.getElementById("q2").style.display = "none";
	document.getElementById("q3").style.display = "none";
	document.getElementById("q4").style.display = "none";
	document.getElementById("q5").style.display = "none";
	if (counter_logan >= 0) {
		counter_logan += 1;
    }
}
function isIncorrect() {
	document.getElementById("incorrect_logan").style.display = "block";
	document.getElementById("q1").style.display = "none";
	document.getElementById("q2").style.display = "none";
	document.getElementById("q3").style.display = "none";
	document.getElementById("q4").style.display = "none";
	document.getElementById("q5").style.display = "none";
}


/* outer function by Logan, inner function uses Yuxuan's port to show the diamond picture  */
document.getElementById("NextStage").addEventListener("click", function () {
	if (counter_logan >= 5) {
		document.getElementById("diamond-4").src = "img/diamond-show.png";
		diamond_counter_4 = 1;
	}
});

/*Logan part ENDs*/

/*=================================================================================================================================*/

/* Diwen Yao Part
   B00748107
*/

var ifpass;
var diamond_counter_5 = 0;

function start_game() {

	document.getElementById("sbtn").style.display = "none";
	document.getElementById("start").style.display = "none";
	document.getElementById("next_stage").style.display = "none";
	document.getElementById("game_diwen").style.display = "block";
	document.getElementById("calculation").style.display = "none";

}

function end_game() {

	document.getElementById("sbtn").style.display = "none";
	document.getElementById("start").style.display = "none";
	document.getElementById("go_next").style.display = "block";
	document.getElementById("next_stage").style.display = "block";
	document.getElementById("game_diwen").style.display = "none";
	document.getElementById("calculation").style.display = "none";

}


function input() {

	var output;
	var input = prompt("Please enter your number here:");
	while (input > 5) {
		alert("Please choose a number between 1-5!");
		input = prompt("Please enter your number here:")
	}
	// Here I started to get the random variable

	var rand = Math.floor((Math.random() * 5) + 1);
	var result = input - rand;
    /*
    
    IF THE GUESS IS CORRECT!

    */
	switch (result) {
		case 0:
			output = "Congrats!!! You have passed the game!!"
			ifpass = 1;
			end_game();
			break;
		default:
			output = "Haha, you now need to do some quick math now!! The number I got is: " + rand;
			ifpass = 0;
			document.getElementById("calculation").style.display = "block";
			break;
	}

	document.getElementById("result").innerHTML = output;
	document.getElementById("s_cal").style.display = "block";
}


function random_cal() {
	// CREATE THE RANDOM CALCULATION
	var result;
	var input;
	var output;

	var rand_a = Math.floor((Math.random() * 100) + 1);
	var rand_b = Math.floor((Math.random() * 100) + 1);
	var rand_cal = Math.floor((Math.random() * 3) + 1);

	// Do the calculation.
	while (ifpass == 0) {
		switch (rand_cal) {
			case 1:

				input = prompt("Please calculate " + rand_a + " * " + rand_b);
				result = rand_a * rand_b;
				if (input == result) {
					ifpass = 1;
					output = "Congrats!!!!!"
					end_game();
				}
				else {
					alert("Please start again.");
					output = ":(  Start again!!"
					rand_cal();
				}
				break;
			case 2:

				input = prompt("Please calculate " + rand_a + " + " + rand_b);
				result = rand_a + rand_b;

				if (input == result) {
					ifpass = 1;
					output = "Congrats!!!!!"
					end_game();

				}
				else {
					alert("Please start again.");
					output = ":(  Start again!!"
					rand_cal();
				}

				break;

			case 3:

				input = prompt("Please calculate " + rand_a + " - " + rand_b);
				result = rand_a - rand_b;

				if (input == result) {
					ifpass = 1;
					output = "Congrats!!!!!"
					end_game();
				}
				else {
					alert("Please start again.");
					output = ":(   Start again!!"
					rand_cal();
				}

				break;
		}
		document.getElementById("result_c").innerHTML = output;


	}

}

document.getElementById("go_next").addEventListener("click", function () {
	document.getElementById("diamond-5").src = "img/diamond-show.png";
	diamond_counter_5 = 1;
});
/*gif url https://tenor.com/vrnl.gif  */
document.getElementById("main_frame_of_5").addEventListener("mousemove", function () {
	if ((diamond_counter_1 + diamond_counter_2 + diamond_counter_3 + diamond_counter_4 + diamond_counter_5) == 5) {
		var finalTest = prompt('Enter password to pass');
		if (finalTest == 123456) {
			document.write('<img src="img/pass.gif"> <br> <p>Nicely Done! You have passed the whole game!</p>');
		}
		else {
			alert("Wrong Password!\nMove mouse and try again!");
        }
    }
});




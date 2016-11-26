//get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '/'];
var decimalAdded = false; 

//add onclick event to all the keys and oerform operations

for(var i = 0; i < keys.length; i++){

	keys[i].onclick = function(e) {

	// get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		console.log(btnVal);
		//Now. just append the key values (btnValue) to the input string and finally use javascript's
		//eval function to get the result
		//if clear key is pressed erase everything
		if(btnVal == 'C') {

			input.innerHTML = '';

		}

		//if eval key is pressed calculate and display result

		if(btnVal == '='){

			var equation = inputVal;
			var lastChar = equation[equation.length - 1]	

			//replace alll instances of x and -wdith * and / respectively this can be done  easily
			//using regex and the 'g' tag which will replace all instances of the matched character
			// /substring
			equation = equation.replace(/x/g, '*')/*.replace(/ / /g,	'/')*/;


			// final thing left to do is checking the last character of the equation if its
			// an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '')



			if(equation)
				input.innerHTML = eval(equation);

			decimalAdded = false;

		}

			//basic funtionality of the calculator is complete but there are some problms like
				// 1.no two oppperators should be added consecutively
				// 2. the equation shouldnt start from an operator except minus
				// 3. no more than  1 decimal should be there in a number


				// we'll fix these issues using some simple checks

					//indexOf only works in IE9

				else if(operators.indexOf[btnVal] > -1) {

					//operator is clicked
					//get the  last character from the character

					var lastChar = inputVal[inputVal.length -1]


					//only add operator if input is not empty and there is no operator at the last
					if(inputVal != '' && operators.indexOf[lastChar] == -1) {
						

						input.innerHTML += btnVal;


					}
					//allow minues if the string is empty
					else if(inputVal == '' && btnVal == '-')
						input.innerHTML += btnVal;

					//replace the last operator(if exists) with the newly pressed operator
					if(operators.indexOf[lastChar] > -1 && inputVal.length > 1) 

						//here '.' matches any character while $ denotes the end of the string
						//so anything(will be an operator in this case) at the end of a string will
						//get replaced by new operator

						input.innerHTML = inputVal.replace(/.$/.btnVal);


				}


					//now only decimal problem is left we can solve it easily using a flag decimal
					//_added which we'll set once the decimal is added and prevent more decimals to 
			//be added once it is set it will be reset when an operator eval or clear key is pressed

			else if(btnVal == '.'){

				if(!decimalAdded){

					input.innerHTML += btnVal;
					decimalAdded = true;
				}
			}


		//if any key is pressed. just append it
		 else{

		 	input.innerHTML += btnVal;
		 }

		 	//prevent page jumps
		 	e.preventDefault();
		}
}
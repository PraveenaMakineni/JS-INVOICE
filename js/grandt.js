function autoCalculate(){
	var number1 = document.getElementById('number1').value;
	var number2 = document.getElementById('number2').value;
	var symbol = document.getElementById('symbol').value
	if(number1 != "" && number2 != ""){
		switch(symbol){
			case "add":
				var digit1 = parseFloat(number1);
				var digit2 = parseFloat(number2);
				var total = digit1 + digit2;
				document.getElementById('result').innerHTML = "<h2>The answer is: "+total+"</h2>";
			break;
			case "sub":
				var digit1 = parseFloat(number1);
				var digit2 = parseFloat(number2);
				var total = digit1 - digit2;
				document.getElementById('result').innerHTML = "<h2>The answer is: "+total+"</h2>";
			break;
			case "mult":
				var digit1 = parseFloat(number1);
				var digit2 = parseFloat(number2);
				var total = digit1 * digit2;
				document.getElementById('result').innerHTML = "<h2>The answer is: "+total+"</h2>";
			break;
			case "div":
				var digit1 = parseFloat(number1);
				var digit2 = parseFloat(number2);
				var total = digit1 / digit2;
				document.getElementById('result').innerHTML = "<h2>The answer is: "+total+"</h2>";
			break;
		}
	}else{
		document.getElementById('result').innerHTML = '';
	}
}
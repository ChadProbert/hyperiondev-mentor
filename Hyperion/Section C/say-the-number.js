function sayNumber(n) {
	// if the input is 0, return "zero"
	if (n === 0) {
		return "zero";
	}

	// a mapping the numbers to their word equivalents
	const numberMap = {
		0: "",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety",
	};

	// a helper function to get the word equivalent of a three digit number
	function getThreeDigitWord(num) {
		let result = "";
		// if the number is larger than 100, add the words for the hundreds
		if (Math.floor(num / 100) !== 0) {
			result += numberMap[Math.floor(num / 100)] + " hundred";
			// if the number is not a multiple of 100, add "and"
			if (num % 100 !== 0) {
				result += " and ";
			}
		}
		// if the number is less than 20 or a multiple of 10, add the corresponding word
		if (num % 100 in numberMap) {
			result += numberMap[num % 100];
		}
		// otherwise, add the words for the tens and units
		else {
			result +=
				numberMap[Math.floor((num % 100) / 10) * 10] +
				" " +
				numberMap[num % 10];
		}
		return result;
	}

	let result = "";
	// convert the number to a string and get its length
	const numStr = n.toString();
	const numLen = numStr.length;
	// if the number is larger than 12 digits, add the words for the trillions
	if (numLen > 12) {
		const trillions = parseInt(numStr.slice(0, -12));
		result += getThreeDigitWord(trillions) + " trillion, ";
	}
	// if the number is larger than 9 digits, add the words for the billions
	if (numLen > 9) {
		const billions = parseInt(numStr.slice(-12, -9));
		result += getThreeDigitWord(billions) + " billion, ";
	}
	// if the number is larger than 6 digits, add the words for the millions
	if (numLen > 6) {
		const millions = parseInt(numStr.slice(-9, -6));
		result += getThreeDigitWord(millions) + " million, ";
	}
	// if the number is larger than 3 digits, add the words for the thousands
	if (numLen > 3) {
		const thousands = parseInt(numStr.slice(-6, -3));
		result += getThreeDigitWord(thousands) + " thousand, ";
	}
	// if the number is larger than 0 digits, add the words for the hundreds
	if (numLen > 0) {
		const hundreds = parseInt(numStr.slice(-3));
		result += getThreeDigitWord(hundreds);
	}
	return result;
}

// simple testing of user inputs
console.log(sayNumber(0));
console.log(sayNumber(1));
console.log(sayNumber(10));
console.log(sayNumber(117));
console.log(sayNumber(201101));
console.log(sayNumber(999999999999999));

module.exports = sayNumber;

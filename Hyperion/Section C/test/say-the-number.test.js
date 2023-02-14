const sayNumber = require("../say-the-number.js");

// tests to see if the function returns the correct string for a given number
test("sayNumber", () => {
	expect(sayNumber(0)).toBe("zero");
	expect(sayNumber(1)).toBe("one");
	expect(sayNumber(10)).toBe("ten");
	expect(sayNumber(117)).toBe("one hundred and seventeen");
});

/* References:
		https://www.browserstack.com/guide/jest-framework-tutorial

	*/

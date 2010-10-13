var alpha			= /[a-zA-Z]/;
var lowercase 		= /^[a-z]+$/;
var uppercase 		= /^[A-Z]+$/;

var numeric  		= /^(-|\+)?[0-9]+(?:\.[0-9]+)?$/;
var integer			= /^(-|\+)?[0-9]$/;
var currency		= /^(-|\+)?([1-9][0-9]*|0{1})(\.[0-9]{2})?$/;

var emailPattern	= /^[a-zA-Z0-9._-]+@(?:[a-zA-Z0-9-]+\.)+(?:[a-zA-Z]{2,4}|museum)$/;

function isEmpty(value) {
	value = trim(value);
	return !(/\S/.test(value));
}

function isUppercase(value) {
	return uppercase.test(value);
}

function isLowercase(value) {
	return lowercase.test(value);
}

function isAlpha(value) {
	return alpha.test(value);
}

function isNumeric(value) {
	return numeric.test(value);
}

function isCurrency(value) {
	return currency.test(value);
}

function isIntegral(value) {
	return integer.test(value);
}

function isValidEmail(emailAddress) {
	return emailPattern.test(trim(emailAddress)); 
}

function leftTrim(value) {
	value = value.replace(/^\s+/,'');
	return value;
}

function rightTrim(value) {
	value = value.replace(/\s+$/,'');
	return value;
}

function trim(value) {
	if (value === null || value === undefined) return "";
	value = leftTrim(value);
	value = rightTrim(value);
	return value;
}

function removeSpaces(value) {
	value = value.replace(/\s/g, '');
	return value;
}

function executeFunctionWithDelay(functionName, element, delay) {
	var t = setTimeout(function() { element.value = functionName(element.value); }, delay);

}

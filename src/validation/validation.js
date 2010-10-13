var alpha			= /[a-zA-Z]+/;
var lowercase 		= /^[a-z]+$/;
var uppercase 		= /^[A-Z]+$/;

var numeric  		= /^(-|\+)?[0-9]+(?:\.[0-9]+)?$/;
var integer			= /^(-|\+)?[0-9]+$/;
var currency		= /^(-|\+)?([1-9][0-9]*|0{1})(\.[0-9]{2})?$/;

var alphaNumeric	= /^[a-zA-Z0-9]+$/;

var emailPattern	= /^([^\.][a-zA-Z0-9!#$%\^&'*\+-\/=\?_{}\|~\.]+[^\.]|(\".*\"))@((?:[a-zA-Z0-9\-]+\.)+(?:[a-zA-Z]{2,4}|museum)|(\[([1-9]\d{0,2})\.([1-9]\d{0,2})\.([1-9]\d{0,2})\.([1-9]\d{0,2})\]))$/;

function isEmpty(value) {
	if (value === null || value === undefined) return true;
	return !(/\S/.test(trim(value)));
}

function isUppercase(value) {
	return uppercase.test(value);
}

function isLowercase(value) {
	return lowercase.test(value);
}

function isAlpha(value) {
	if (value === null || value === undefined) return false;
	return alpha.test(value);
}

function isNumeric(value) {
	if (value === null || value === undefined) return false;
	return numeric.test(value);
}

function isAlphaNumeric(value) {
	if (value === null || value === undefined) return false;
	return alphaNumeric.test(value);
}

function isCurrency(value) {
	return currency.test(value);
}

function isIntegral(value) {
	return integer.test(value);
}

function isValidEmail(emailAddress) {
	if (emailAddress === null || emailAddress === undefined || emailAddress.length > 254) return false;
	return emailPattern.test(emailAddress); 
}

function leftTrim(value) {
	if (value === null || value === undefined) return "";
	return value.replace(/^\s+/,'');
}

function rightTrim(value) {
	if (value === null || value === undefined) return "";
	return value.replace(/\s+$/,'');
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

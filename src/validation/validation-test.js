ValidationTest = TestCase("DodoJS ValidationTest");

ValidationTest.prototype.testEmpty = function() {
	assertFalse(isEmpty("ABC"));
	assertTrue(isEmpty(""));
	assertTrue(isEmpty(" "));
	assertTrue(isEmpty("	"));
};

ValidationTest.prototype.testIsUppercase = function() {
	assertTrue(isUppercase("ABC"));
	assertFalse(isUppercase(""));
	assertFalse(isUppercase("Abc"));
	assertFalse(isUppercase("aBc"));
	assertFalse(isUppercase("abC"));
	assertFalse(isUppercase("abc"));
};

ValidationTest.prototype.testIsLowercase = function() {
	assertTrue(isLowercase("abc"));
	assertFalse(isLowercase(" "));
	assertFalse(isLowercase(""));
	assertFalse(isLowercase("Abc"));
	assertFalse(isLowercase("aBc"));
	assertFalse(isLowercase("abC"));
	assertFalse(isLowercase("ABC"));
};

ValidationTest.prototype.testIsAlpha = function() {
	assertTrue(isAlpha("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
	assertFalse(isAlpha("!@#$%^&*()_+}{][\":';?>/.,<*\'"));
	assertFalse(isAlpha(""));
	assertFalse(isAlpha(" "));
	assertFalse(isAlpha("	"));
	assertFalse(isAlpha(null));
	assertFalse(isAlpha(undefined));
};

ValidationTest.prototype.testIsNumeric = function() {
	assertTrue(isNumeric(0));
	assertTrue(isNumeric(3));
	assertTrue(isNumeric(3.14));
	assertFalse(isNumeric("3.14.00"));
	assertFalse(isNumeric(".14"));
	assertFalse(isNumeric("3..14"));
	assertFalse(isNumeric(" "));
	assertFalse(isNumeric("	"));
	assertFalse(isNumeric("abc"));
	assertFalse(isNumeric(null));
	assertFalse(isNumeric(undefined));
};

ValidationTest.prototype.testIsAlphaNumeric = function() {
	assertTrue(isAlphaNumeric(0));
	assertTrue(isAlphaNumeric(3));
	assertFalse(isAlphaNumeric(3.14));
	
	assertFalse(isAlphaNumeric("3.14.00"));
	assertFalse(isAlphaNumeric(".14"));
	assertFalse(isAlphaNumeric("3..14"));
	
	assertTrue(isAlphaNumeric("abc"));
	assertTrue(isAlphaNumeric("ABC"));
	assertFalse(isAlphaNumeric(" abc "));
	assertFalse(isAlphaNumeric(" ABC "));
	assertFalse(isAlphaNumeric(" "));
	assertFalse(isAlphaNumeric("	"));
	assertFalse(isAlphaNumeric(null));
	assertFalse(isAlphaNumeric(undefined));
};

ValidationTest.prototype.testIsCurrency = function() {
	assertTrue(isCurrency("9.99"));
	assertTrue(isCurrency("-9.99"));
	assertTrue(isCurrency("987654321"));
	assertTrue(isCurrency("-987654321"));
	assertTrue(isCurrency("+987654321"));
	assertTrue(isCurrency("987654321.00"));
	assertTrue(isCurrency("-987654321.00"));
	assertTrue(isCurrency("+987654321.00"));
	assertTrue(isCurrency("0.00"));
	assertTrue(isCurrency("-0.00"));
	assertTrue(isCurrency("+0.00"));
	assertTrue(isCurrency("0.99"));
	assertTrue(isCurrency("-0.99"));
	assertTrue(isCurrency("+0.99"));
	assertFalse(isCurrency(".99"));
	assertFalse(isCurrency("-.99"));
	assertFalse(isCurrency("+.99"));
	assertFalse(isCurrency("0987654321"));
	assertFalse(isCurrency("-0987654321"));
	assertFalse(isCurrency("+0987654321"));
	assertFalse(isCurrency("0987654321.00"));
	assertFalse(isCurrency("-0987654321.00"));
	assertFalse(isCurrency("+0987654321.00"));
	assertFalse(isCurrency("abc"));
	assertFalse(isCurrency("-abc"));
	assertFalse(isCurrency("+abc"));
};

ValidationTest.prototype.testIsIntegral = function() {
	assertTrue(isIntegral("123456789"));
	assertTrue(isIntegral("-123456789"));
	assertTrue(isIntegral("+123456789"));
	assertFalse(isIntegral("123456789.00"));
	assertFalse(isIntegral("-123456789.00"));
	assertFalse(isIntegral("+123456789.00"));
	assertFalse(isIntegral("123,456,789"));
	assertFalse(isIntegral("-123,456,789"));
	assertFalse(isIntegral("+123,456,789"));
	assertFalse(isIntegral("123,456,789.00"));
	assertFalse(isIntegral("-123,456,789.00"));
	assertFalse(isIntegral("+123,456,789.00"));
	assertFalse(isIntegral("abc"));
	assertFalse(isIntegral("-abc"));
	assertFalse(isIntegral("+abc"));
};

ValidationTest.prototype.testIsValidEmail = function() {
	//Testing Local - Odd cases.
	assertTrue(isValidEmail("\"John.Doe\"@example.com"));
	assertTrue(isValidEmail("johndoe@[10.10.10.10]"));
	assertTrue(isValidEmail("john+doe@example.com"));
	assertFalse(isValidEmail(".johndoe@example.com"));
	assertFalse(isValidEmail("johndoe.@example.com"));
	assertFalse(isValidEmail(".johndoe.@example.com"));
	
	//Domain
	assertTrue(isValidEmail("john.doe@example.com"));
	assertTrue(isValidEmail("john.doe@gauteng.gov.za")); 					//Country Code.
	assertTrue(isValidEmail("john.doe@example-domain.com"));				//Hyphenated Domain name
	assertTrue(isValidEmail("john.doe@example.museum"));					//Long Domain name
	assertTrue(isValidEmail("john.doe@sanfrancisco.office.example.com")); 	//Domain hierarchy
	assertFalse(isValidEmail("john.doe@example..com"));

	//Too Long Address - Maximum = 254 characters.
	assertFalse(isValidEmail("\"Interpretation of the local-part of an email address is dependent on the conventions and policies implemented in the mail server. For example, case-sensitivity may distinguish mailboxes differing only in capitalization of characters of the local-part\"@example.com"));
};

ValidationTest.prototype.testLeftTrim = function() {
	assertEquals("", 				leftTrim(undefined));
	assertEquals("", 				leftTrim(null));
	assertEquals("ABC", 			leftTrim("ABC"));
	assertEquals("ABC ", 			leftTrim("ABC "));
	assertEquals("ABC", 			leftTrim(" ABC"));
	assertEquals("ABC ", 			leftTrim(" ABC "));
	assertEquals("ABC   ", 			leftTrim("   ABC   "));
	assertEquals("ABC	", 			leftTrim("ABC	"));
	assertEquals("ABC", 			leftTrim("	ABC"));
	assertEquals("ABC	", 			leftTrim("	ABC	"));
	assertEquals("ABC			", 	leftTrim("			ABC			"));
};

ValidationTest.prototype.testRightTrim = function() {
	assertEquals("", 				rightTrim(undefined));
	assertEquals("", 				rightTrim(null));
	assertEquals("ABC", 			rightTrim("ABC"));
	assertEquals("ABC", 			rightTrim("ABC "));
	assertEquals(" ABC", 			rightTrim(" ABC"));
	assertEquals(" ABC",			rightTrim(" ABC "));
	assertEquals("   ABC", 			rightTrim("   ABC   "));
	assertEquals("ABC",			rightTrim("ABC	"));
	assertEquals("	ABC", 			rightTrim("	ABC"));
	assertEquals("	ABC", 			rightTrim("	ABC	"));
	assertEquals("			ABC", 	rightTrim("			ABC			"));
};

ValidationTest.prototype.testTrim = function() {
	assertEquals("", trim(undefined));
	assertEquals("", trim(null));
	assertEquals("ABC", trim("ABC"));
	assertEquals("ABC", trim("ABC "));
	assertEquals("ABC", trim(" ABC"));
	assertEquals("ABC", trim(" ABC "));
	assertEquals("ABC", trim("   ABC   "));
	assertEquals("ABC", trim("ABC	"));
	assertEquals("ABC", trim("	ABC"));
	assertEquals("ABC", trim("	ABC	"));
	assertEquals("ABC", trim("			ABC			"));
};

ValidationTest.prototype.testRemoveSpaces = function() {
	assertEquals("ABC", removeSpaces("ABC"));
	assertEquals("ABC", removeSpaces(" ABC"));
	assertEquals("ABC", removeSpaces("ABC "));
	assertEquals("ABC", removeSpaces(" ABC "));
	assertEquals("ABC", removeSpaces("	ABC"));
	assertEquals("ABC", removeSpaces("ABC	"));
	assertEquals("ABC", removeSpaces("	ABC	"));
	assertEquals("ABC", removeSpaces("A B C"));
	assertEquals("ABC", removeSpaces(" A B C "));
	assertEquals("ABC", removeSpaces("  A  B  C  "));
	assertEquals("ABC", removeSpaces("	A	B	C	"));
	assertEquals("ABC", removeSpaces("		A		B		C		"));
};

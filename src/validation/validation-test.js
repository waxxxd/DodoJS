ValidationTest = TestCase("DodoJS ValidationTest");

ValidationTest.prototype.testTrim = function() {
	assertEquals("", trim(undefined));
	assertEquals("", trim(null));
	assertEquals("ABC", trim("ABC"));
	assertEquals("ABC", trim("ABC "));
	assertEquals("ABC", trim(" ABC"));
	assertEquals("ABC", trim(" ABC "));
	assertEquals("ABC", trim("       	ABC      "));
};

ValidationTest.prototype.testEmpty = function() {
	assertFalse(isEmpty("Test"));
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

ValidationTest.prototype.testIsNumeric = function() {
	assertTrue(isNumeric(0));
	assertTrue(isNumeric(3));
	assertTrue(isNumeric(3.14));
	assertFalse(isNumeric("3.14.00"));
	assertFalse(isNumeric("3.14.00"));
	assertFalse(isNumeric(".14"));
	assertFalse(isNumeric("3..14"));
	assertFalse(isNumeric(" "));
	assertFalse(isNumeric("abc"));
	
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

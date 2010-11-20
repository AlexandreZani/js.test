function TestDummy() {
  this.test_AssertTrue = function() {
    assert(true);
  }

  this.test_AssertFalse = function() {
    assert(false);
  }

  this.test_EqualsTrue = function() {
    assertEquals("hello", "hello");
  }

  this.test_EqualsFalse = function() {
    assertEquals("hello", "hello2");
  }

  this.test_EqualsFalseBool = function() {
    assertEquals(true, false);
  }

  this.test_EqualsFalseNum = function() {
    assertEquals(3, 21);
  }
}

RhinoTestEngine(new TestDummy(), "TestDummy");

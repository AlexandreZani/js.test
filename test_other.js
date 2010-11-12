function TestDummy() {
  this.test_AssertTrue = function() {
    assert(true);
  }

  this.test_AssertFalse = function() {
    assert(false);
  }

  this.stuff = "Hello";


}

RhinoTestEngine(new TestDummy(), "TestDummy");


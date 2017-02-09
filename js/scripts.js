$(document).ready(function(){

});
var Calculate = (function() {
  var sum = 0;

  return {
    plus: function() {
      var myArguments = arguments[0] || 0;
      sum += myArguments;
      return this;
    },
    minus: function() {
      var myArguments = arguments[0] || 0;
      sum -= myArguments;
      return this;
    },
    multiply: function() {
      var myArguments = arguments[0] || 1;
      sum *= myArguments;
      return this;
    },
    divide: function() {
      var myArguments = arguments[0] || 1;
      if (myArguments != 0) {
        sum /= myArguments;
      }
      return this;
    },
    print: function() {
      console.log(sum);
      return sum;
    }
  };
})();

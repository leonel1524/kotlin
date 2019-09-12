if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'test_kotlin'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'test_kotlin'.");
}
var test_kotlin = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    var message = 'Hello JavaScript!';
    println(message);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('test_kotlin', _);
  return _;
}(typeof test_kotlin === 'undefined' ? {} : test_kotlin, kotlin);

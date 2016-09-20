(function(global, angular) {
  'use strict'

  var lazyWeather = angular.module('lazyWeather', ['ngAnimate']);

  lazyWeather.animation('.shift', [function() {
    return {
      addClass: function(element, className, doneFn) {
      },
      removeClass: function(element, className, doneFn) {

      },
      setClass: function(element, addedClassName, removeClass, doneFn) {
        
      }
    }
  }]);

})
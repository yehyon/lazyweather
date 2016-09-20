(function(global, angular) {
  'use strict'

  var lazyWeather = angular.module('lazy-weather');

  lazyWeather.factory('getCurrentDt', ['', function(){
    return function(){
    
    };
  }])
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var mm = currentTime.getMonth()+1;
    mm = mm > 10 ? mm : '0' + mm;
    var dd = currentTime.getDate() + 1;
    dd = dd > 10 ? dd : '0' + dd;

    return {
      'mm_dd': mm + ',' + dd,
      'hour_minute': hour + ':' + minute
    };

  };
  document.getElementById('current-time').innerHTML = getCurrentTime();


}) (this, this.anguarl);
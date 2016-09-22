(function(global, angular) {
  'use strict';

  var lazyWeather = angular.module('lazy-weather');

  lazyWeather.factory('convertDate', [function(){
    var week = 'Sun Mon Tues Wednes Thurs Fri Satur'.split(' ');
    return function(timestamp){
      if(!timestamp) {
        console.error('timestamp 값을 전달해야 합니다.');
      }
      var d = new Date( timestamp * 1000);
      var yyyy = d.getFullYear();
      var mm = d.getMonth()+1;
      mm = mm > 10 ? mm : '0' + mm;
      var dd = d.getDate();
      dd = dd > 10 ? dd : '0' + dd;
      var day = week[ d.getDay() ] + 'day';
      var hour = d.getHours();
      hour = hour >= 10 ? hour : '0' + hour;
      var minute = d.getMinutes();
      minute = minute >= 10 ? minute : '0' + minute;


      return {
        'yyyy_mm_dd': yyyy + '-' + mm + '-' + dd,
        'day': day,
        'time': hour + ':' + minute
      };
    };
  }]);



})(this, this.angular);


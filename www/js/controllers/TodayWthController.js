(function(global, angular) {
  'use strict';

  var lazyWeather = angular.module('lazy-weather');

  lazyWeather.controller('TodayWthController', ['$http', 'convertDate', 'convertIcon', function($http, convertDate, convertIcon) {
    var lazyWeatherToday = this;

    lazyWeatherToday.todayWeather = [];

    $http({
      'method': 'GET',
      'url': 'http://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&APPID=b87a29cdc2db8cd57d8d8c85ca8c4fd8'
    }).then(successAjax, errorAjax);
    function successAjax(response) {
      lazyWeatherToday.todayWeather = response.data;
      console.log(response);
      angular.forEach(response.data.list, function(item, index) {
        item.dt = convertDate(item.dt);
      });
      angular.forEach(response.data.list, function(item, index) {
        item.weather[0].main = convertIcon(item.weather[0].main);
      });
    }
    function errorAjax(response) {
      console.error();
    }


  }]);


})(this, this.angular);


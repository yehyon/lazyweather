(function(global, angular) {
  'use strict';

  var lazyWeather = angular.module('lazy-weather');

  lazyWeather.controller('CurrentWthController', ['$http', 'convertDate', 'convertIcon', function($http, convertDate, convertIcon) {
    var lazyWeatherCurrent = this;

    lazyWeatherCurrent.currentWeather = [];

    $http({
      'method': 'GET',
      'url': 'http://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=b87a29cdc2db8cd57d8d8c85ca8c4fd8'
    }).then(successAjax, errorAjax);
    function successAjax(response) {
      lazyWeatherCurrent.currentWeather = response.data;
      console.log(response.data);
      response.data.weather[0].main = convertIcon(response.data.weather[0].main);
      response.data.dt = new Date();
    }
    function errorAjax(response) {
      console.log()
    }

  }]);

})(this, this.angular);


(function(global, angular) {
  'use strict'

  var lazyWeather = angular.module('lazy-weather');

  lazyWeather.controller('SlideCtrl', function($scope, $ionicSlideBoxDelegate, $timeout,ModalService,classService){

    $scope.galleryClassActive = !$scope.galleryClassActive;
    
    var modalshow;
    $scope.changeActive = function(){
      $scope.galleryClassActive = !$scope.galleryClassActive
      $scope.offerClassActive = !$scope.galleryClassActive
          classService.setClass(true);
          // console.log(classService.getClass());
    }

    $scope.changeSlideOnClick = function($slidebox){
        var SlideHandle = $ionicSlideBoxDelegate.$getByHandle($slidebox)
        if(SlideHandle.currentIndex()==0){
          SlideHandle.slide(1);
        }else{
          SlideHandle.slide(0);
        }
    }
  });

  lazyWeather.service('ModalService', function($ionicModal, $rootScope) {
    var init = function(tpl, $scope) {

      var promise;
      $scope = $scope || $rootScope.$new();
      
      promise = $ionicModal.fromTemplateUrl(tpl, {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
        return modal;
      });

      $scope.openModal = function() {
         $scope.modal.show();
       };
       $scope.closeModal = function() {
         $scope.modal.hide();
       };
       $scope.$on('$destroy', function() {
         $scope.modal.remove();
       });
      
      return promise;
    }
    
    return {
      init: init
    }
    
  });

  lazyWeather.service('classService',function(){
    var classes = '';
    //Array of Objects
    this.setClass = function(customClass){ classes = customClass;}
    this.getClass = function(){return classes;}

  });

})(this, this.angular);




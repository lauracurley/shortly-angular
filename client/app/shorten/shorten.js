angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    console.log('we got into the addLink function')
    Links.addOne($scope.link)
      .then(function() {
        //$scope.link = data.url;
      });
  };

});

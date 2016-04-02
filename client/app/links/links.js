angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.getAll = function() {
    $scope.links = Link.getLinks($scope.user);
  };

  $scope.addOne = function() {
    var link = Link.addOne($scope.link);
  };
});

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = [];
  $scope.links = {}

  $scope.getAll = function(links) {
    var data = Link.getLinks(links);
    data.forEach(function(item) {
      $scope.links.push(item['url']);
    });
    console.log('This is scope.links in getAll on the links.js file', $scope.links);
    return $scope.links;
  };

  $scope.addOne = function(url) {
    var data = Link.addOne(url);
    console.log('Here is our link from our addOne method', data.url, data.title);
    return data.url;
  };
});

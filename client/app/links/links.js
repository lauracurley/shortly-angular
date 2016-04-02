angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};


  var intialize = function() {
    // var responseData = Link.getLinks(links);
    Links.getAll()
      .then(function(links) {
        $scope.data.links = links;
      });

    console.log('This is scope.links in getAll on the links.js file', $scope.data.links);
    return $scope.data;
  };

  intialize();

  

});

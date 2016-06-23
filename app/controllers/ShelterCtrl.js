"use strict"; 
// this controller is getting the shelters from ShelterFactory and changing the URL path

App.controller('ShelterCtrl', 
  [
    "$scope",
    "$location",
    "ShelterFactory",
    "$route",

    function ($scope, $location, ShelterFactory, $route) {
      $scope.shelterCollection = [];
      $scope.shelter = {
        zip: ""
      }

      $scope.searchShelters = function () {
        ShelterFactory.findShelters($scope.shelter.zip)
        .then(
          function () { 
            $location.path("/shelters")
            $route.reload();
            // passed in $route as a dependency above
            // $route.reload(); refreshes the DOM on each search
          },
          function (err) {
            console.log(err);
          }
        );


      } // closing $scope.searchShelters function
    }
]);

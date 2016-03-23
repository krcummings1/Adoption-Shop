"use strict"; 
// this controller is getting the shelters from ShelterFactory and changing the URL path

App.controller('ShelterCtrl', 
  [
    "$scope",
    "$location",
    "ShelterFactory",

    function ($scope, $location, ShelterFactory) {
      $scope.shelterCollection = [];
      $scope.shelter = {
        zip: ""
      }

       
      
      $scope.searchShelters = function () {
        ShelterFactory.findShelters($scope.shelter.zip)
        .then(
          function () { 
            $location.path("/shelters")
          },
          function (err) {
            console.log(err);
          }
        );


      } // closing $scope.searchShelters function
    }
]);

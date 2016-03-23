"use strict";

App.controller('ShelterResultsCtrl', 
  [
    "$scope",
    "ShelterFactory",

    function ($scope, ShelterFactory) {
      $scope.shelterArray = ShelterFactory.getShelters()
    }
]);






      // ).then(
      //   function (shelter) {
      //     $scope.shelterCollection.push(shelter);
      //     return ShelterFactory();
      //   },
      //   function () {}
      // ).then(
      //   function (shelter) {
      //     $scope.shelterCollection.push(shelter);          
      //     return ShelterFactory();
      //   },
      //   function () {}
      // ).then(
      //   function (shelter) {
      //     $scope.shelterCollection.push(shelter);          
      //   },
      //   function () {}
      // );
//     }

// ]);


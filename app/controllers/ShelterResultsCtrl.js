"use strict";

App.controller('ShelterResultsCtrl', 
  [
    "$scope",
    "ShelterFactory",

    function ($scope, ShelterFactory) {
      $scope.shelterArray = ShelterFactory.getShelters()
    }
]);



"use strict";

App.controller('PetDisplayCtrl', 
  [
    "$scope",
    "PetFactory",

    function ($scope, PetFactory) {
      $scope.petCollection = [];
      $scope.petOfTheDay = null;

      PetFactory().then(
        (randomPet) => $scope.petOfTheDay = randomPet,
        () => false
      );
    }

]);


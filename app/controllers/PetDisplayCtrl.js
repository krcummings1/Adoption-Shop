// displays random pet pics in DOM on load

"use strict";

App.controller('PetDisplayCtrl', 
  [
    "$scope",
    "PetFactory",

    function ($scope, PetFactory) {
      $scope.petCollection = [];

      PetFactory().then(
        function (randomPet) {
          $scope.petCollection.push(randomPet);
          return PetFactory();
        },
        function (error) {}
      ).then(
        function (randomPet) {
          $scope.petCollection.push(randomPet);
          return PetFactory();
        },
        function (error) {}
      ).then(
        function (randomPet) {
          $scope.petCollection.push(randomPet);          
          return PetFactory();
        },
        function (error) {}
      ).then(
        function (randomPet) {
          $scope.petCollection.push(randomPet);          
        },
        function (error) {}
      );
    }

]);


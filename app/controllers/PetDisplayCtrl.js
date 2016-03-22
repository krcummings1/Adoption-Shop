"use strict";

App.controller('PetDisplayCtrl', 
  [
    "$scope",
    "PetFactory",

    function ($scope, PetFactory) {
      $scope.petCollection = [];
      $scope.petOfTheDay = null;

      PetFactory().then(
        function (randomPet) {
          $scope.petCollection.push(randomPet);
          return PetFactory();
        },
        function (error) {

        }
      ).then(
        function (randomPet) {
          $scope.petCollection.push(randomPet);
          return PetFactory();
        },
        function () {}
      ).then(
        function (randomPet) {
          $scope.petCollection.push(randomPet);          
          return PetFactory();
        },
        function () {}
      ).then(
        function (randomPet) {
          $scope.petCollection.push(randomPet);          
        },
        function () {}
      );
    }

]);


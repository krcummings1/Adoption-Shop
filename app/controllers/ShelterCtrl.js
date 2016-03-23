"use strict";

App.controller('ShelterCtrl', 
  [
    "$scope",
    "ShelterFactory",

    function ($scope, ShelterFactory) {
      $scope.shelterCollection = [];
      $scope.shelter = {
        zip: ""
      }

      console.log(ShelterFactory);
      
      $scope.searchShelters = function () {
        ShelterFactory($scope.shelter.zip);
      };

      // ShelterFactory().then(
      //   function (randomPet) {
      //     $scope.petCollection.push(randomPet);
      //     return ShelterFactory();
      //   },
      //   function (error) {

      //   }
      // ).then(
      //   function (randomPet) {
      //     $scope.petCollection.push(randomPet);
      //     return ShelterFactory();
      //   },
      //   function () {}
      // ).then(
      //   function (randomPet) {
      //     $scope.petCollection.push(randomPet);          
      //     return ShelterFactory();
      //   },
      //   function () {}
      // ).then(
      //   function (randomPet) {
      //     $scope.petCollection.push(randomPet);          
      //   },
      //   function () {}
      // );
    }

]);


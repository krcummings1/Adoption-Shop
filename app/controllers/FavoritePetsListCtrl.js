"use strict";

App.controller("FavoritePetsListCtrl",
[
  "$scope",
  "$routeParams",
  "$http",
  "$location",
  "PetFirebaseFactory",
  "$route",

  function ($scope, $routeParams, $http, $location, PetFirebaseFactory, $route) {

    // Default properties for bound variables
    $scope.favoritePets = [];
    $scope.selectedPet = {};

    // Invoke the promise that reads from Firebase
    PetFirebaseFactory().then(

      // Handle resolve() from the promise
      userCollection => {

        for (let key in userCollection) {
          $scope.favoritePets.push(userCollection[key]);
        }

        $scope.selectedPet = $scope.favoritePets.filter(pet => pet.id === $routeParams.petId)[0];

      }, // closes userCollection function

      // Handle reject() from the promise
      err => console.log(err)
    ); // closes PetFirebaseFactory().then(




    /*
      This function is bound to an ng-click directive deletePet(pet)
      on the button in the favorite-pets partial 
    */
    $scope.deletePet = function (pet) {

      //remove pet from favoritePets
      let petIndex = $scope.favoritePets.indexOf(pet);
      if (petIndex >= 0) {
        $scope.favoritePets.splice(petIndex, 1);
      }

      $http.delete(`https://capstone-kaylee.firebaseio.com/pets/${pet.id}.json`)
        .then(() => 
          $location.path("/favorites"));
    } // closes deletePet function

  } // closing main function
]);











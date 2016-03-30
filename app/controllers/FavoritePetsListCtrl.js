"use strict";

App.controller("FavoritePetsListCtrl",
[
  "$scope",
  "$routeParams",
  "$http",
  "$location",
  "FirebaseFactory",
  "$route",

  function ($scope, $routeParams, $http, $location, FirebaseFactory, $route) {

    // Default properties for bound variables
    $scope.favoritePets = [];
    $scope.selectedPet = {};

    // Invoke the promise that reads from Firebase
    FirebaseFactory().then(

      // Handle resolve() from the promise
      userCollection => {

        // Object.keys(userCollection).forEach(key => {
        //   userCollection[key].id = key;
        //   $scope.favoritePets.push(userCollection[key]);
        // });
        for (let key in userCollection) {
          $scope.favoritePets.push(userCollection[key]);
        }
        console.log("userCollection in FavePetsCtrl", userCollection);
        console.log("favoritePets result", $scope.favoritePets);


        $scope.selectedPet = $scope.favoritePets.filter(pet => pet.id === $routeParams.petId)[0];

      }, // closes userCollection function

      // Handle reject() from the promise
      err => console.log(err)
    ); // closes FirebaseFactory().then(

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

    // $scope.deletePet = () => $http
    //     .delete(`https://nss-demo-instructor.firebaseio.com/pets/${$routeParams.songId}.json`)
    //     .then(() => $location.url("/"));

  } // closing main function
]);











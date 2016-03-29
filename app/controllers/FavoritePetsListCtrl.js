"use strict";

App.controller("FavoritePetsListCtrl",
[
  "$scope",
  "$routeParams",
  "$http",
  "$location",
  "FirebaseFactory",

  function ($scope, $routeParams, $http, $location, FirebaseFactory) {

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
    ); // closes .then(

    /*
      This function is bound to an ng-click directive
      on the button in the view
    */
    // $scope.deleteSong = () => $http
    //     .delete(`https://nss-demo-instructor.firebaseio.com/pets/${$routeParams.songId}.json`)
    //     .then(() => $location.url("/"));

  } // closing main function
]);

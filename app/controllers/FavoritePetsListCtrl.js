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

        // Object.keys(userCollection).forEach(key => {
        //   userCollection[key].id = key;
        //   $scope.favoritePets.push(userCollection[key]);
        // });

        // function chunk(arr, size) {
        //   var newArr = [];
        //   for (var i=0; i<arr.length; i+=size) {
        //     newArr.push(arr.slice(i, i+size));
        //   }
        //   return newArr;
        // }

        // $scope.chunkedData = chunk(myData, 3);
        
        // console.log("chunkedData", $scope.chunkedData);
        // console.log("newArr", newArr);


        for (let key in userCollection) {
          $scope.favoritePets.push(userCollection[key]);
        }
        console.log("userCollection in FavePetsCtrl", userCollection);
        console.log("favoritePets result", $scope.favoritePets);


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

    // $scope.deletePet = () => $http
    //     .delete(`https://nss-demo-instructor.firebaseio.com/pets/${$routeParams.songId}.json`)
    //     .then(() => $location.url("/"));

  } // closing main function
]);











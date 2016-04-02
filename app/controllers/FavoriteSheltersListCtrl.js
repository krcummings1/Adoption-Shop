"use strict";

App.controller("FavoriteSheltersListCtrl",
[
  "$scope",
  "$routeParams",
  "$http",
  "$location",
  "ShelterFirebaseFactory",
  "$route",

  function ($scope, $routeParams, $http, $location, ShelterFirebaseFactory, $route) {

    // Default properties for bound variables
    $scope.favoriteShelters = [];
    $scope.selectedShelter = {};

    // Invoke the promise that reads from Firebase
    ShelterFirebaseFactory().then(

      // Handle resolve() from the promise
      userCollection => {

        // Object.keys(userCollection).forEach(key => {
        //   userCollection[key].id = key;
        //   $scope.favoriteShelters.push(userCollection[key]);
        // });
        for (let key in userCollection) {
          $scope.favoriteShelters.push(userCollection[key]);
        }
        console.log("userCollection in FavoriteSheltersListCtrl", userCollection);
        console.log("favoriteShelters result", $scope.favoriteShelters);


        $scope.selectedShelter = $scope.favoriteShelters.filter(shelter => shelter.id === $routeParams.shelterId)[0];

      }, // closes userCollection function

      // Handle reject() from the promise
      err => console.log(err)
    ); // closes ShelterFirebaseFactory().then(

    /*
      This function is bound to an ng-click directive deletePet(shelter)
      on the button in the favorite-pets partial 
    */

    $scope.deleteShelter = function (shelter) {



  //remove shelter from favoriteShelters
      let shelterIndex = $scope.favoriteShelters.indexOf(shelter);
      if (shelterIndex >= 0) {
        $scope.favoriteShelters.splice(shelterIndex, 1);
      }





      $http.delete(`https://capstone-kaylee.firebaseio.com/shelters/${shelter.id}.json`)
        .then(() => 
          $location.path("/favorites"));
    } // closes deletePet function


  } // closing main function
]);











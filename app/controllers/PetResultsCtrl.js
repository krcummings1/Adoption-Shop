"use strict";

App.controller('PetResultsCtrl', 
  [
    "$scope",
    "$http",
    "PetSearchFactory",
    "FirebaseFactory",
    "firebaseURL",

    function ($scope, $http, PetSearchFactory, FirebaseFactory, firebaseURL) {
      $scope.petArray = PetSearchFactory.getPets();

      $scope.petList = [];

      $scope.favoritePet = function (pet) {
        console.log("pet", pet);

        let x = pet.breeds.breed.map(b => b.$t);
        console.log(x);

        let favePet = {
            name: pet.name.$t,
            breed: pet.breeds.breed.map((b) => b.$t).join(","),
            age: 0,
            gender: pet.sex.$t,
            shelter: pet.shelterId.$t
          };

        console.log("favePet", favePet);

        // POST the song to Firebase
          // Remember to stringify objects/arrays before
          // sending them to an API
          // The $http.post() method returns a promise, so you can use then()
        $http.post(
          "https://capstone-kaylee.firebaseio.com/pets.json",
          JSON.stringify(favePet)
        ).then(
          () => console.log("Added pet to firebase"),// Handle resolve
          (response) => console.log(response)  // Handle reject
        );
        //find the index of the OMDB movie in the movielist that we want to add
        //overwrite that index to be the newMovie object (firebase format) with watched and tracked keys
        let index = $scope.petList.indexOf(pet);
        $scope.petList[index] = favePet;

      };
      
    }





]);




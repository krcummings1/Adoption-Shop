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

      $scope.getBreed = function (pet) {
        console.log("pet in getBreed", pet);
        if (typeof pet.breeds.breed.$t === "string") {
            return pet.breeds.breed.$t;
        } else {
          console.log("I'm an array!");
          return pet.breeds.breed.map(b => b.$t).join(",");
        // let x = pet.breeds.breed.map(b => b.$t);
        // console.log(x);
            // return pet.breeds.breed.map((b) => b.$t).join(",");
            // console.log(">1 breed", pet.breeds.breed.map((b) => b.$t).join(","));
        }

      }

      $scope.favoritePet = function (pet) {
        console.log("pet", pet);



        let favePet = {
            name: pet.name.$t,
            breed: $scope.getBreed(pet),
            // getBreed(),
            // pet.breeds.breed.map((b) => b.$t).join(","),

            // function() {
            //   if (pet.breeds.breed.length === 1){
            //     return pet.breeds.breed.$t;
            //   } else {
            //     pet.breeds.breed.map((b) => b.$t).join(",")
            //   }
            // },
            

            // breed: pet.breeds.breed.map((b) => b.$t).join(",")
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

      }; // closes favorite pet function
      
    } // closes controller function





]); // closing controller




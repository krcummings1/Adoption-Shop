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
          return pet.breeds.breed.map(b => b.$t).join(", ");
          // like below... 
          // if more than one breed, b becomes all breeds to iterate over
          //      pet.breeds.breed.map(function (b) {
          //       return b.$t;
          //      }).join(","); --> joins the breeds into a string with , separating them
        }

      } // closes getBreed function

      $scope.favoritePet = function (pet) {
        console.log("pet", pet);

        let urlString;
        // i = URL for single photo in photo array
        for(var i in pet.media.photos.photo){
          // if any URL in the photo array contains pn.
          if (pet.media.photos.photo[i].$t.indexOf("pn.") > -1){
          // set urlString to the URL containing pn.
          urlString = pet.media.photos.photo[i].$t;
          }
        }

        let favePet = {
            name: pet.name.$t,
            breed: $scope.getBreed(pet),
            age: 0,
            gender: pet.sex.$t,
            shelter: pet.shelterId.$t,
            imgURL: urlString
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




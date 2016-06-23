"use strict";

App.controller('PetResultsCtrl', 
  [
    "$scope",
    "$http",
    "PetSearchFactory",
    "PetFirebaseFactory",
    "firebaseURL",
    "authFactory",

    function ($scope, $http, PetSearchFactory, PetFirebaseFactory, firebaseURL, authFactory) {
      $scope.petArray = PetSearchFactory.getPets();
      $scope.petList = [];

      $scope.getBreed = function (pet) {
        if (typeof pet.breeds.breed.$t === "string") {
            return pet.breeds.breed.$t;
        } else {
          return pet.breeds.breed.map(b => b.$t).join(", ");
        }

      } // closes getBreed function

      $scope.favoritePet = function (event, pet) {

        event.currentTarget.innerHTML = "Added to Favorites";

        $( "div button:contains('Added to Favorites')").prop( "disabled", true );

        let urlString;
        // i = URL for single photo in photo array
        for(var i in pet.media.photos.photo){
          // if any URL in the photo array contains pn.
          if (pet.media.photos.photo[i].$t.indexOf("pn.") > -1){
          // set urlString to the URL containing pn.
          urlString = pet.media.photos.photo[i].$t;
          }
        } // closes for loop

        let favePet = {
            name: pet.name.$t,
            breed: $scope.getBreed(pet),
            age: 0,
            gender: pet.sex.$t,
            shelter: pet.shelterId.$t,
            imgURL: urlString
          };
        
        // POST the pet to Firebase
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
        //find the index of the pet in the petlist that we want to add
        //overwrite that index to be the favePet object (firebase format) with watched and tracked keys
        let index = $scope.petList.indexOf(pet);
        $scope.petList[index] = favePet;

      }; // closes favorite pet function
      
    } // closes controller function


]); // closing controller




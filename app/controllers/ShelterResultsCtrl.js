"use strict";

App.controller('ShelterResultsCtrl', 
  [
    "$scope",
    "$http",
    "ShelterFactory",
    "ShelterFirebaseFactory",
    "firebaseURL",

    function ($scope, $http, ShelterFactory, ShelterFirebaseFactory, firebaseURL) {
      $scope.shelterArray = ShelterFactory.getShelters();

      $scope.shelterList = [];

      $scope.favoriteShelter = function (event, shelter) {

        event.currentTarget.innerHTML = "Added to Favorites";

        let faveShelter = {
            name: shelter.name.$t,
            address: shelter.address1.$t,
            city: shelter.city.$t,
            state: shelter.state.$t,
            zip: shelter.zip.$t,
            phone: shelter.phone.$t,
            email: shelter.email.$t,
            shelterID: shelter.id.$t
            // uid: ""
          };
        
          console.log("faveShelter", faveShelter);

        // POST the shelter to Firebase
          // Remember to stringify objects/arrays before
          // sending them to an API
          // The $http.post() method returns a promise, so you can use then()
        $http.post(
          "https://capstone-kaylee.firebaseio.com/shelters.json",
          JSON.stringify(faveShelter)
        ).then(
          () => console.log("Added shelter to firebase"),// Handle resolve
          (response) => console.log(response)  // Handle reject
        );
        //find the index of the OMDB movie in the movielist that we want to add
        //overwrite that index to be the newMovie object (firebase format) with watched and tracked keys
        let index = $scope.shelterList.indexOf(shelter);
        $scope.shelterList[index] = faveShelter;

      }; // closes favorite shelter function
    }
]);



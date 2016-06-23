"use strict"; 
// this controller is getting the pets from PetSearchFactory and changing the URL path

App.controller('PetCtrl', 
  [
    "$scope",
    "$location",
    "PetSearchFactory",
    "$route",

    function ($scope, $location, PetSearchFactory, $route) {
      $scope.petCollection = [];
      $scope.pet = {
        breed: "",
        age: "",
        sex: "",
        zip: ""
      }

      $scope.searchPets = function () {
        PetSearchFactory.findPets($scope.pet.breed, $scope.pet.zip)
        .then(
          function () { 
            $location.path("/pets")
            $route.reload();
            // passed in $route as a dependency above
            // $route.reload(); refreshes the DOM on each search
          },
          function (err) {
            console.log(err);
          }
        );


      } // closing $scope.searchPets function
    } //closing main function
]);

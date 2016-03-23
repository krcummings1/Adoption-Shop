"use strict"; 
// this controller is getting the pets from PetSearchFactory and changing the URL path

App.controller('PetCtrl', 
  [
    "$scope",
    "$location",
    "PetSearchFactory",

    function ($scope, $location, PetSearchFactory) {
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
          },
          function (err) {
            console.log(err);
          }
        );


      } // closing $scope.searchPets function
    }
]);

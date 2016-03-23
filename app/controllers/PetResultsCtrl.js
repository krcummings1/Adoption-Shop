"use strict";

App.controller('PetResultsCtrl', 
  [
    "$scope",
    "PetSearchFactory",

    function ($scope, PetSearchFactory) {
      $scope.petArray = PetSearchFactory.getPets();
    }
]);


// App.controller('PetResultsCtrl', 
//   [
//     "$scope",
//     "PetSearchFactory",

//     function ($scope, PetSearchFactory) {
//       $scope.petCollection = [];

//       $scope.petArray = PetSearchFactory.getPets()
//       $scope.pet = null;


//       // console.log(PetSearchFactory);

//       PetSearchFactory.getPets().then(
//         function (pet) {
//           $scope.petCollection.push(pet);
//           return PetSearchFactory.getPets();
//         },
//         function (error) {

//         }
//       ).then(
//         function (pet) {
//           $scope.petCollection.push(pet);
//           return PetSearchFactory.getPets();
//         },
//         function () {}
//       ).then(
//         function (pet) {
//           $scope.petCollection.push(pet);          
//           return PetSearchFactory.getPets();
//         },
//         function () {}
//       ).then(
//         function (pet) {
//           $scope.petCollection.push(pet);          
//         },
//         function () {}
//       );
//     }

// ]);


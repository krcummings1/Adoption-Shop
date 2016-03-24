// "use strict";

// App.controller('FavoriteCtrl', 
//   [
//     "$scope",
//     "$http",
//     "PetSearchFactory",
//     "FirebaseFactory",
//     "firebaseURL",

//   function($scope, $http, PetSearchFactory, FirebaseFactory, firebaseURL) {
//     $scope.petList = "";

//     $scope.favoritePet = function (pet) {
//     console.log("pet", pet);
//     console.log("petList", $scope.petList);

//     let favePet = {
//         name: pet.name,
//         breed: pet.breed,
//         age: 0,
//         gender: pet.sex,
//         shelter: pet.shelter
//         // imdbID: pet.imdbID
//         // img: pet.img,
//       };

//     // POST the song to Firebase
//       // Remember to stringify objects/arrays before
//       // sending them to an API
//       // The $http.post() method returns a promise, so you can use then()
//     $http.post(
//       "https://capstone-kaylee.firebaseio.com/pets.json",
//       JSON.stringify(favePet)
//     ).then(
//       () => console.log("Added pet to firebase"),// Handle resolve
//       (response) => console.log(response)  // Handle reject
//     );
//     //find the index of the OMDB movie in the movielist that we want to add
//     //overwrite that index to be the newMovie object (firebase format) with watched and tracked keys
//     let index = $scope.petList.indexOf(pet);
//     $scope.petList[index] = favePet;

//     };



//   }
// ]);
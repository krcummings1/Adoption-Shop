"use strict";


App.factory("PetSearchFactory", function ($q, $http) {

  let foundPets = [];

  return {
    getPets: function () { 
    // getPets is being called in PetResultsCtrl 
      return foundPets;
    },
    findPets: function (breed, zip) {
      return $q((resolve, reject) => {
        $http
          .jsonp(`http://api.petfinder.com/pet.find?key=8e5f1dc37136499111d4b4b2b45d51ed&animal=dog&breed=${breed}&location=${zip}&output=full&format=json&callback=JSON_CALLBACK`)
          .success(
            petSearchResult => {
              foundPets = petSearchResult.petfinder.pets.pet;
              resolve(foundPets)
            },  
            error => reject(error)
          )
      });

    }

  }
});

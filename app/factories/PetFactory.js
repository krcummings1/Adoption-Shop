"use strict";


App.factory("PetFactory", function ($q, $http) {

  return function () {

    return $q((resolve, reject) => {
      $http
        .jsonp(`http://api.petfinder.com/pet.getRandom?key=8e5f1dc37136499111d4b4b2b45d51ed&animal=dog&output=full&format=json&callback=JSON_CALLBACK`)
        .success(
          randomPet => {
            console.log("from petfinder", randomPet);
            resolve(randomPet.petfinder.pet)
          },  
          error => reject(error)
        )
    });
  }

});








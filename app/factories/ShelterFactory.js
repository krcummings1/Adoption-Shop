"use strict";

App.factory("ShelterFactory", function ($q, $http) {

  let foundShelters = [];

  return {
    getShelters: function () {
      return foundShelters;
    }, // findShelters is like a setter
    findShelters: function (zip) {
      return $q((resolve, reject) => {
        $http
          .jsonp(`http://api.petfinder.com/shelter.find?key=8e5f1dc37136499111d4b4b2b45d51ed&location=${zip}&format=json&callback=JSON_CALLBACK`)
          .success(
            shelter => {
              console.log("shelter from petfinder", shelter);
              foundShelters = shelter.petfinder.shelters.shelter;
              resolve(shelter.petfinder.shelters.shelter)
            },  
            error => reject(error)
          )
      });

    }

  }
});

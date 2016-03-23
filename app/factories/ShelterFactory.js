"use strict";

App.factory("ShelterFactory", function ($q, $http) {

  return function (zip) {

    return $q((resolve, reject) => {
      $http
        .jsonp(`http://api.petfinder.com/shelter.find?key=8e5f1dc37136499111d4b4b2b45d51ed&location=${zip}&format=json&callback=JSON_CALLBACK`)
        .success(
          shelter => {
            console.log("shelter from petfinder", shelter);
            resolve(shelter.petfinder.shelter)
          },  
          error => reject(error)
        )
    });
  }

});







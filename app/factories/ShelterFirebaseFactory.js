"use strict";

App.factory("ShelterFirebaseFactory", function ($q, $http) {
  return () =>
    $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get("https://capstone-kaylee.firebaseio.com/shelters.json")
        .success(
          userCollection => {
            for (let key in userCollection){
              userCollection[key].id = key;
            }
            console.log("userCollection in ShelterFirebaseFactory", userCollection);
            resolve(userCollection)
          },
          error => reject(error)
        )
    )
});

"use strict";

App.factory("FirebaseFactory", function ($q, $http) {
  return () =>
    $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get("https://capstone-kaylee.firebaseio.com/pets.json")
        .success(
          userCollection => {
            for (let key in userCollection){
              userCollection[key].id = key;
            }
            resolve(userCollection)
          },
          error => reject(error)
        )
    )
}
);
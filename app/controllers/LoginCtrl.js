"use strict";

App.controller("LoginCtrl",
[
  "$scope",
  "$location",
  "$http",
  "authFactory",
  "firebaseURL",

  function ($scope, $location, $http, authFactory, firebaseURL) {

    // Local variables
    let ref = new Firebase(firebaseURL);

    // Variables on $scope for use in DOM
    $scope.account = { email: "", password: "" };
    $scope.message = "";

    // Unauthenticate user when /logout path used
    if ($location.path() === "/logout") {
      ref.unauth();
    }

    /*
      Attempt to register a new user account.
      If successful, immediately log user in.
     */
    $scope.register = () => {
      ref.createUser({
        email    : $scope.account.email,
        password : $scope.account.password
      }, (error, userData) => {
        if (error) {
          console.log(`Error creating user: ${error}`);
        } else {
          console.log(`Created user account with uid: ${userData.uid}`);
          $scope.login();
        }
      });
    };

    /*
      Attempt to authenticate the user with the
      supplied credentials.
     */
    $scope.login = () => 
      authFactory
        .authenticate($scope.account)
        .then(() => {
          authFactory.isAuthenticated();
          $location.path("/favorites");
          $scope.$apply();  // Needed for $location.path() to succeed
        });


  }
]);











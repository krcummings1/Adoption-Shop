"use strict";

App.controller('HeaderCtrl', 
  [
  "$scope",
  "authFactory",
  "firebaseURL",
   
  function ($scope, authFactory, firebaseURL) {
    
    let ref = new Firebase(firebaseURL);

    $scope.tab = "a";

    $scope.isAuthenticated = () => {

      // have to return authFactory.isAuthenticated (from authFactory) in order to use it
      return authFactory.isAuthenticated();
      // returns TRUE or FALSE
    }

    $scope.logout = () => {
      console.log("Unauthenticating user");
      ref.unauth();  
    };


  }

]);
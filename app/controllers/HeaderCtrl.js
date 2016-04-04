"use strict";

App.controller('HeaderCtrl', 
  [
  "$scope",
  "authFactory",
  "firebaseURL",
   
  function ($scope, authFactory, firebaseURL) {
    
    let ref = new Firebase(firebaseURL);

    $scope.tab = "a";

// can name this $scope.whatever because it's just connecting the header.html partial (VIEW) to the authFactory so that the view can use it
// MUST connect view to factory with controller in order to use it
    $scope.isAuthenticated = () => {
  // same as $scope.isAuthenticated = function () {

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
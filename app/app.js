"use strict";

var App = angular.module("AdoptionShop", ["ngRoute", "firebase"]).constant("firebaseURL", "https://capstone-kaylee.firebaseio.com/");

/*
  Define a promise for any view that needs an authenticated user
  before it will resolve
 */
let isAuth = (authFactory) => new Promise((resolve, reject) => {
  if (authFactory.isAuthenticated()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    alert("Please log in.")
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

App.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/pet-display.html",
        controller: "PetDisplayCtrl",
      }).
      when("/shelters", {
        templateUrl: "partials/shelter-results.html",
        controller: "ShelterResultsCtrl",
      }).
      when("/pets", {
        templateUrl: "partials/pet-results.html",
        controller: "PetResultsCtrl"
      }).
      when("/favorites", {
        templateUrl: "partials/favorite-pets.html",
        controller: "FavoritePetsListCtrl",
        resolve: { isAuth }
      }).
      when("/login", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
      }).
      when("/logout", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
      }).
      otherwise({
        redirectTo: "/"
      });
  }]);



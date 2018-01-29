// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'angularPromiseButtons',
    'toastr'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
         .state('about', {
            url: "/about",
            templateUrl: tempateURL,
            controller: 'AboutCtrl'
        })
          .state('franchise', {
            url: "/franchise",
            templateUrl: tempateURL,
            controller: 'FranchiseCtrl'
        })
            .state('gallery', {
            url: "/gallery",
            templateUrl: tempateURL,
            controller: 'GalleryCtrl'
        })
            .state('serve', {
            url: "/serve",
            templateUrl: tempateURL,
            controller: 'ServeCtrl'
        })
           .state('socialhub', {
            url: "/socialhub",
            templateUrl: tempateURL,
            controller: 'SocialhubCtrl'
        })
          .state('storelocator', {
            url: "/storelocator",
            templateUrl: tempateURL,
            controller: 'StorelocatorCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('grid', {
            url: "/grid",
            templateUrl: tempateURL,
            controller: 'GridCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
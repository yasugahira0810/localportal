localportal.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    })

    .when('/insert', {
        templateUrl: 'pages/insert.html',
        controller: 'InsertController'
    })

    .when('/import', {
        templateUrl: 'pages/import.html',
        controller: 'ImportController'
    })

    .when('/display', {
        templateUrl: 'pages/display.html',
        controller: 'DisplayController'
    });
})

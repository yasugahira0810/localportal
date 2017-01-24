localportal.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    })

    .when('/insert', {
        templateUrl: 'insert.html',
        controller: 'InsertController'
    })

    .when('/import', {
        templateUrl: 'import.html',
        controller: 'ImportController'
    })

    .when('/display', {
        templateUrl: 'display.html',
        controller: 'DisplayController'
    });
})

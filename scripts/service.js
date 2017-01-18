localportal.service('storageService', ['$localStorage', function($localStorage) {

    this.$storage = $localStorage;
    this.$storage.links = this.$storage.links || [{
        "title": "Google",
        "url": "https://www.google.co.jp",
        "tag": "portal",
        "date": new Date(),
        "count": 0
    }, {
        "title": "ngStorage",
        "url": "https://github.com/gsklee/ngStorage",
        "tag": "github,angularjs",
        "date": new Date(),
        "count": 0
    }, {
        "title": "localportal",
        "url": "https://github.com/yasugahira0810/localportal",
        "tag": "github,angularjs,original",
        "date": new Date(),
        "count": 0
    }];
}]);

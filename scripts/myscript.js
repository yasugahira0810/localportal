angular.module('myapp', ['ngStorage', 'ngSanitize'])
    .controller('MainController', ['$scope', '$localStorage', '$log', '$filter',
        function($scope, $localStorage, $log, $filter) {
            $scope.$storage = $localStorage;
            $scope.$storage.links = $scope.$storage.links || [{
                "title": "Google",
                "url": "https://www.google.co.jp",
                "tag": ["portal"],
                "date": new Date(),
                "count": 0
            }, {
                "title": "ngStorage",
                "url": "https://github.com/gsklee/ngStorage",
                "tag": ["github", "angularjs"],
                "date": new Date(),
                "count": 0
            }, {
                "title": "localportal",
                "url": "https://github.com/yasugahira0810/localportal",
                "tag": ["github", "angularjs", "original"],
                "date": new Date(),
                "count": 0
            }];

            $scope.addNew = function() {
                $scope.$storage.links.push({
                    "title": $scope.newLinkTitle,
                    "url": $scope.newLinkUrl,
                    "tag": $scope.newLinkTag,
                    "date": new Date(),
                    "count": 0
                });
                $scope.newLinkBody = '';
            }

            $scope.bulkImport = function() {
                importJson = angular.fromJson($scope.importStr);
                $log.log(importJson);
                for (i = 0; i < importJson.length; i++) {
                    $scope.$storage.links.push(importJson[i]);
                }
            }

            $scope.sort = function(exp, reverse) {
                $scope.$storage.links = $filter('orderBy')($scope.$storage.links, exp, reverse);
            }

        }
    ]);

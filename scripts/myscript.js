angular.module('myapp', ['ngStorage', 'ngSanitize'])
    .controller('MainController', ['$scope', '$localStorage', '$log', '$filter',
        function($scope, $localStorage, $log, $filter) {
            $scope.$storage = $localStorage;
            $scope.$storage.links = $scope.$storage.links || [{
                "title": "ngStorage",
                "url": "https://github.com/gsklee/ngStorage",
                "date": new Date()
            }, {
                "title": "localportal",
                "url": "https://github.com/yasugahira0810/localportal",
                "date": new Date()
            }];

            $scope.addNew = function() {
                $scope.$storage.links.push({
                    "title": $scope.newTaskTitle,
                    "url": $scope.newTaskUrl,
                    "date": new Date()
                });
                $scope.newTaskBody = '';
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

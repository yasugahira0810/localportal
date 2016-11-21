angular.module('myapp', ['ngStorage', 'ngSanitize'])
    .controller('MainController', ['$scope', '$localStorage', '$log',
        function($scope, $localStorage, $log) {
            $scope.$storage = $localStorage;
            $scope.$storage.tasks = $scope.$storage.tasks || [{
                "title": "ngStorage",
                "url": "https://github.com/gsklee/ngStorage",
                "date": new Date()
            }, {
                "title": "localportal",
                "url": "https://github.com/yasugahira0810/localportal",
                "date": new Date()
            }];

            $scope.addNew = function() {
                $scope.$storage.tasks.push({
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
                    $scope.$storage.tasks.push(importJson[i]);
                }
            }
        }
    ]);

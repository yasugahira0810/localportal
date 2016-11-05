angular.module('myapp', ['ngStorage'])
    .controller('MainController', ['$scope', '$localStorage',
        function($scope, $localStorage) {
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
        }
    ]);

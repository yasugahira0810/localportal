localportal.controller('HomeController', ['$scope', '$localStorage', '$log', '$filter', '$location', 'storageService',
        function($scope, $localStorage, $log, $filter, $location, storageService) {
            $scope.$storage = storageService.$storage;
            $scope.pageLimit = 10; // リストの表示件数
            $scope.limitBegin = 0; // リストの表示開始位置

            // ページャークリック時
            $scope.pagerClick = function(num) {
                $scope.limitBegin = num * $scope.pageLimit;
            };

            // ページャー用の配列を返す
            $scope.pagerArr = function(num) {
                num = Math.ceil(num); // numの切り上げ
                var array = [];
                for (var i = 0; i < num; i++) {
                    array[i] = i; // ページャー数分の配列を作成
                }
                return array;
            };

            $scope.sort = function(exp, reverse) {
                $scope.$storage.links = $filter('orderBy')($scope.$storage.links, exp, reverse);
            }

        }
    ])
    .service('linkService', LinkService)
    .filter('customFilter', CustomFilter);

localportal.controller('InsertController', ['$scope', '$localStorage', '$location', 'storageService',
    function($scope, $localStorage, $location, storageService) {
        $scope.$storage = storageService.$storage;
        $scope.addNew = function() {
            $scope.$storage.links.push({
                "title": $scope.newLinkTitle,
                "url": $scope.newLinkUrl,
                "tag": $scope.newLinkTag,
                "date": new Date(),
                "count": 0
            });
            $scope.newLinkBody = '';
            window.location.reload();
        }
    }
]);

localportal.controller('ImportController', ['$scope', '$localStorage', '$location', 'storageService',
    function($scope, $localStorage, $location, storageService) {
        $scope.$storage = storageService.$storage;
        $scope.bulkImport = function() {
            importJson = angular.fromJson($scope.importStr);
            for (i = 0; i < importJson.length; i++) {
                $scope.$storage.links.push(importJson[i]);
            }
        }
    }
]);

localportal.controller('DisplayController', ['$scope', '$localStorage', '$location', 'storageService',
    function($scope, $localStorage, $location, storageService) {
        $scope.$storage = storageService.$storage;
    }
]);

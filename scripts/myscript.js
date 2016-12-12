angular.module('myapp', ['ngStorage', 'ngSanitize'])
    .controller('MainController', ['$scope', '$localStorage', '$log', '$filter',
        function($scope, $localStorage, $log, $filter) {
            $scope.$storage = $localStorage;
            $scope.$storage.links = $scope.$storage.links || [{
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
                for (i = 0; i < importJson.length; i++) {
                    $scope.$storage.links.push(importJson[i]);
                }
            }

            $scope.sort = function(exp, reverse) {
                $scope.$storage.links = $filter('orderBy')($scope.$storage.links, exp, reverse);
            }
        }
    ]);

angular.module('myapp').directive('cmEditableText', function() {
    return {
        restrict: 'A',
        require: '^ngModel',
        link: function(scope, element, attrs, ngModel) {

            ngModel.$render = function() {
                element.html(ngModel.$viewValue);
            };

            element.on('dblclick', function() {
                var clickTarget = angular.element(this);
                var EDITING_PROP = 'editing';
                if (!clickTarget.hasClass(EDITING_PROP)) {
                    clickTarget.addClass(EDITING_PROP);
                    clickTarget.html('<input type="text" value="' + ngModel.$viewValue + '" />');
                    var inputElement = clickTarget.children();
                    inputElement.on('focus', function() {
                        inputElement.on('blur', function() {
                            var inputValue = inputElement.val() || this.defaultValue;
                            clickTarget.removeClass(EDITING_PROP).text(inputValue);
                            inputElement.off();
                            scope.$apply(function() {
                                ngModel.$setViewValue(inputValue);
                            });
                        });
                    });
                    inputElement[0].focus();
                }
            });
            var destroyWatcher = scope.$on('$destroy', function() {
                if (angular.equals(destroyWatcher, null)) {
                    return;
                }
                element.off();
                destroyWatcher();
                destroyWatcher = null;
            });
        }
    };
});

Array.prototype.unique = function() {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

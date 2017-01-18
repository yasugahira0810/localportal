localportal.directive('cmEditableText', function() {
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

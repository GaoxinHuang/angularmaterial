app.controller('AppCtrl',
    function ($scope, $mdDialog) {
        $scope.showConfirm = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('This is title')
                .textContent('Information')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .clickOutsideToClose(true)
                .ok('Please Yes')
                .cancel('Please Cancel');

            $mdDialog.show(confirm).then(function () {
                $scope.status = 'Yes';
            },
                function () {
                    $scope.status = 'No';
                });
        };
        $scope.showTabDialog = function (ev) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: '/app/controller/tabDialog.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
        };

        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }
    });

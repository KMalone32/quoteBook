angular.module("app").controller("ctrl", function($scope, svc) {
    svc.setLocalStorage();
    $scope.get = svc.getQuotes();
    $scope.add = function() {
        var q = $scope.Q;
        var a = $scope.A;
        $scope.Q = "";
        $scope.A = "";
        return svc.addQuotes(q, a);
    };
    $scope.rem = function() {
        return svc.removeQuotes($scope.selected);
    };
    $scope.setSelected = function(selected) {
        $scope.selected = selected;
        $scope.rem();
    }
});
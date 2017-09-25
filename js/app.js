"use strict"

var myApp = angular.module("myApp", []);

myApp.controller("myController", ['$scope', '$http', function($scope, $http) {
  $http.get('https://ergast.com/api/f1/2017/5/driverStandings.json').then(function(results) {
    $scope.racers = results.data;
    console.log($scope.racers)
    // $scope.changeInt = function(n){
    //   newNum = parseInt(n)
    //
    //   console.log(newNum)
    //   return newNum
    // }
    // $scope.orderByField = 'position';
    // $scope.reverseSort = true;
    $scope.column = '';

    /*    $scope.resetAll = function () {
        $scope.filteredList = $scope.racers;
        $scope.searchText = '';
      }

        $scope.search = function () {

          $scope.filteredList = _.filter($scope.racers,
          function (item) {
              return searchUtil(item, $scope.searchText);
          });

          if ($scope.searchText == '') {
              $scope.filteredList = $scope.racers;

          }

      }

      $scope.resetAll();
      $scope.query = {};
      $scope.queryBy = '';
      $scope.orderProp="position";*/





  })
}])

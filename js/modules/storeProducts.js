var storeProducts=angular.module("storeProducts",[])


myApp.directive("gemPanels", function(){
      return {
           restrict: 'A',
           templateUrl: 'templates/panels.html',
           controller: function($scope){
             var tab=1;
             $scope.tab=tab;
             $scope.selectTab=function(newTab){
             $scope.tab= newTab;
           }
           }
           }
         })


  myApp.directive("storeReviews", function(){
    return {
         restrict: 'A',
         templateUrl: 'templates/store-reviews.html',
         controller: function($scope){
            $scope.newReview={};

             $scope.addReview= function(i){
               if (!i.reviews) {
                 i.reviews = []
                 i.reviews.push ($scope.newReview)
               };
                 console.log($scope.newReview)
                 $scope.newReview={};

          }
        }
      }
  })

/**
 * Created by renminghe on 16-10-14.
 */
var app = angular.module('myApp',[]);
app.controller('content',['$scope','$http',function ($scope,$http) {
    getData("北京");
    $scope.searchOther = function () {
        getData($scope.searchText);
    };
    $('body').on('keydown',function (e) {
       if(e.keyCode == 13){
           getData($scope.searchText);
       }
    });

    function getData(city) {
        $http.get('http://api.map.baidu.com/telematics/v3/weather',{params:{location:city,output:"json",ak:'7c8hlAVQmqSqWc9qlP0NFkM7DDe8suYH'}}).success(function (data) {
            $scope.data = data.results[0];
            console.log($scope.data);
        }).error(function () {
            console.error("获取数据失败！");
        });
    }
}]);
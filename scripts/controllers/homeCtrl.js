angular.module('movieApp')
.controller('homeCtrl',function($scope,$http,$location,movieData){
	$scope.movies = [];
	$scope.startPage = 0;
	$scope.arrow = "glyphicon glyphicon-arrow-up";
	$scope.sortDirect = '';

	$http.get('data/dma-interview.json')
	.success(function(resp){
		$scope.movies = resp.items;
	})
	.error(function(e){
		alert('error connecting to server...');
	});

	$scope.arrowChange = function(){
		if ($scope.arrow == 'glyphicon glyphicon-arrow-up'){
			$scope.arrow = 'glyphicon glyphicon-arrow-down';
			$scope.sortDirect = '-';
		}else{
			$scope.arrow = 'glyphicon glyphicon-arrow-up';
			$scope.sortDirect = '+';
		}
	}
	$scope.nextPage = function(mov){
		movieData.mov = mov;
		console.log(movieData.mov);
		$location.path('/detail');
	}


})
angular.module('ionicSound')
.controller('MyPlaylistCtrl', 
				['$scope', '$ionicLoading', 'SoundCloudQuery', 'Utils', '$stateParams', '$ionicModal', '$moment', 'KeyboardService',
function( $scope,   $ionicLoading,   SoundCloudQuery,   Utils ,  $stateParams ,  $ionicModal,   $moment, KeyboardService ) {
	var idle 	= false;
	var query;

		/**
	 * Search action
	 * @param  {[type]} so [description]
	 * @return {[type]}    [description]
	 */
	// $scope.search = function(so){
	$scope.search = function(){
		KeyboardService.hide();
		$ionicLoading.show();
	  query =  SoundCloudQuery.query({q:'justin'});
		query.getNextPage().then(function(results){
			console.log(results);
			$scope.results = results;
  		$ionicLoading.hide();
  	});    
	};

	$scope.search();

	function init(){
		console.log('play list');
		$scope.title = 'My Playlist';
	}

	init();
}]);
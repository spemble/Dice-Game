angular.module('sampleApp', []).controller('sampleCtrl', function($scope) {
	$scope.position = 0;
	$scope.max = 15;
	$scope.score = 0;
	$scope.move = 0;
	$scope.end = false;
	
	// set up the board with random values
	$scope.board = [ 
	    {value : -1,	mark : 1}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0}, 
	    {value : Math.floor(Math.random() * 10),	mark : 0} ];	

	$scope.rollDie = function() { 
		
		// until the last square is reached
		if ($scope.position < $scope.max) {
			
			// remove the initial pawn at the beginning of each game
			if ($scope.move === 0) {
				$scope.board[0].mark = 0;
			}

			// generate a roll of the die
			$scope.move = Math.floor(Math.random() * 6 + 1);

			// move the pawn, if there's room
			if ($scope.position + $scope.move <= $scope.max) {
				
				$scope.position = $scope.position + $scope.move;
				
				// this flag is used to change the scorebox border 
				if ($scope.position === $scope.max) {
					$scope.end = true;
				}
				
				$scope.board[$scope.position].mark = 1;

				// add the new points to our sum (zero-indexed array)
				$scope.score = $scope.score + $scope.board[$scope.position].value;
			}
		}
	};
	
	$scope.newGame = function() {
		$scope.apply();
	};

});



angular.module('sampleApp', []).controller('sampleController', function($scope) {
    $scope.email= "John@aol.com";
    $scope.password= "12345";
    
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});

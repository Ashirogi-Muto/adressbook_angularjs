angular.module("addressModule",[])
.controller("addressController",function($scope){

		$scope.contacts=[
				{name:"Ashirogi Muto",number:123456,address:"Japan"},
				{name:"Monkey D. Luffy",number:223,address:"Japan"},
				{name:"Naruto Uzumaki",number:4745,address:"Japan"},
				{name:"Ichigo Kurosaki",number:123456,address:"Japan"},

		];

		$scope.saveContact = function(){

			 $scope.contacts.push({'name':$scope.name,'number':$scope.number,'address':$scope.address})
			 $scope.name="";
			 $scope.number="";
			 $scope.address="";
		}
});

//=======================================================
//client side: customersController
//=======================================================
orderscustomersModule.controller('customersController', function($scope, customersFactory)
{
	function dateFormat(dateToFormat)
	{
		var date = new Date(dateToFormat);
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var month = monthNames[date.getMonth()];
		var day = date.getDate();
		var year = date.getFullYear();
		var newDate = month + ' ' + day + ' ' + year;
		return newDate;
	}

	$scope.customers = [];
	
	var getCustomerList = function()
	{
		customersFactory.getCustomers(function(data)
		{
			for(var x in data)
			{
				data[x].created_at = dateFormat(data[x].created_at);
			}
			$scope.customers = data;
		})
	}

	getCustomerList();

	$scope.addCustomer = function() 
	{
		var exists = false;
		for(var i=0; i < $scope.customers.length; i++)
		{
			if ($scope.customers[i].name == $scope.newCustomer.name)
			{
				$('#error').text('Name in use. Please enter different name.');
				exists = true;
			}
		}

		if (exists == false)
		{
			console.log('1', $scope.newCustomer);
			customersFactory.addCustomer($scope.newCustomer, function(){
				getCustomerList();
			});
		}
	}

	$scope.destroyCustomer = function(id)
	{
		customersFactory.destroyCustomer(id, function()
		{
			getCustomerList();
		})
	}

})
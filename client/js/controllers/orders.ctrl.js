//=======================================================
//client side: ordersController
//=======================================================
orderscustomersModule.controller('ordersController', function($scope, customersFactory, ordersFactory)
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

	$scope.orders = [];
	var getOrderList = function()
	{
		ordersFactory.getOrders(function(data)
		{
			for(var x in data)
			{
				data[x].created_at = dateFormat(data[x].created_at);
			}
			$scope.orders = data;
		})
	}

	getOrderList();

	$scope.addOrder = function() 
	{
		var check = $scope.newOrder;
		if(angular.isDefined($scope.newOrder.customer_name) == false || angular.isDefined($scope.newOrder.product) == false || angular.isDefined($scope.newOrder.qty) == false)
		{
			$('#error').text('Not all selections have been made.');
			return;
		}
		else 
		{
			ordersFactory.addOrder($scope.newOrder, function(){
				getOrderList();
			})
			$('#error').text('');
		}
	}
	// setting scope as empty so that I can evaluate for non-selected fields inside the addOrder function
	$scope.newOrder= {};

})
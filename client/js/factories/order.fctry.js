//=======================================================
//ordersFactory -- New Orders
//=======================================================
orderscustomersModule.factory('ordersFactory', function($http)
{
	var factory = {};

	factory.getOrders = function (callback)
	{
		$http.get('/getOrders').success(function(output){ callback(output); });
	}

	factory.addOrder = function(data, callback)
	{
		$http.post('/addOrder', data).success(function(output){ callback(output); });
	}

	return factory;
});
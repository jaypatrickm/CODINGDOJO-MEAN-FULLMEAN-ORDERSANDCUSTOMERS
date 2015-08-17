//=======================================================
//customersFactory -- New Customers
//=======================================================
orderscustomersModule.factory('customersFactory', function($http)
{
	var factory = {};

	factory.getCustomers = function (callback)
	{
		$http.get('/getCustomers').success(function(output){ callback(output); });
	}

	factory.addCustomer = function(data, callback)
	{
		$http.post('/addCustomer', data).success(function(output){ callback(output); });
	}

	factory.destroyCustomer = function(id, callback)
	{
		$http.delete('/destroyCustomer/' + id).success(function(output){ callback(output); });
	}

	return factory;
});
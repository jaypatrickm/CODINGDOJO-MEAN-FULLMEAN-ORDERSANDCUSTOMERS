//=======================================================
//server side: customers controller
//=======================================================
//=======================================================
//attach customer.js model
//=======================================================
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
//=======================================================
//customers.js Controller
//=======================================================
module.exports = (function() 
{
	return {
		getCustomers: function(req, res)
		{
			Customer.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},
		addNewCustomer: function(req, res)
		{
			var customer = new Customer(req.body);
  			customer.save(function(err, record){
  				if(err)
  				{
  					res.json({status:'failed', err:err})
  				}else
  				{
  					res.json({status:'success'})
  				}
  			})
		},
		destroyCustomer: function(req, res)
		{
			Customer.remove({ _id: req.params.id}, function (err, status) {
				if (err){
					console.log('ERR');
				} else {
					res.json({status:'success'});
				}
			})
		}
	}
})();
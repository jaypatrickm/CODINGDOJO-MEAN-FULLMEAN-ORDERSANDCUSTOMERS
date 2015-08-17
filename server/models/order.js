//=======================================================
//order model
//=======================================================
var mongoose = require('mongoose');
//=======================================================
//OrderSchema
//=======================================================
var OrderSchema = new mongoose.Schema({
	customer_name: { type: String, trim: true },
	product: {type: String},
	qty: {type: Number},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Order', OrderSchema);
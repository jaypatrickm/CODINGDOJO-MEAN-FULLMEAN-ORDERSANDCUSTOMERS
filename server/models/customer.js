//=======================================================
//customer model
//=======================================================
var mongoose = require('mongoose');
//=======================================================
//CustomerSchema
//=======================================================
var CustomerSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	created_at: { type: Date, default: Date.now }
});

mongoose.model('Customer', CustomerSchema);
CustomerSchema.path('name').required(true, "Name field is required");
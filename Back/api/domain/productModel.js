let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    comments: {type: String, required: true, max: 100},
    isGood: {type: Boolean, required: true},
    price: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);
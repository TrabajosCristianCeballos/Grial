let Product = require('../domain/productModel');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    Product.find({}, function(err, docs) {
        if (!err){
            res.send(docs);
        } else {throw err;}
    })
};

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            comments: req.body.comments,
            isGood: req.body.isGood,
        }
    );

    product.save(function (err) {
        console.log(product);
        if (err) {
            return err;
        }
        res.send('Product Created successfully')
    })
};

exports.get_all_products = function(req, res){
    Product.find({}, function(err, docs) {
        if (!err){
            console.log(docs);
            process.exit();
            res.send(docs);
        } else {throw err;}
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return err;
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return err;
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Deleted successfully!');
    })
};
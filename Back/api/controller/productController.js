let Product = require('../domain/productModel');
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'grialdbl.cvzb1l5sgvxf.us-east-1.rds.amazonaws.com',
   user: 'xltiagoxl',
   password: 'santii14',
   port: 3306,
   database : 'griallogin'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.get_login = function (req, res){
  var user = "\'"+req.body.user+"\'";
  var password = "\'"+req.body.password+"\'";
  var sql = "SELECT * FROM Users WHERE  Nameuser = "+user+" AND UserPassword = "+password;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    if(result[0]){
      res.send(true);
    }else{
      res.send(false);
    }

  });

}

exports.set_register = function (req, res){
  var user = "\'"+req.body.user+"\'";
  var password = "\'"+req.body.password+"\'";
  var age = "\'"+req.body.age+"\'";
  var city = "\'"+req.body.city+"\'";
  var address = "\'"+req.body.address+"\'";
  var estrato = "\'"+req.body.estrato+"\'";
  var email = "\'"+req.body.email+"\'";
  var values = user+","+age+","+city+","+address+","+email+","+estrato+","+password;
  var sql = "INSERT INTO Users( Nameuser,UserAge,UserCity,UsersDirection,UsersEmail,Estrato,UserPassword)VALUES("+values+")";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    if(result[0]){
      res.send(true);
    }else{
      res.send(false);
    }

  });

}
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

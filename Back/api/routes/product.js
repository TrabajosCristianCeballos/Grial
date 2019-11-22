let express = require('express');
let router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
let product_controller = require('../controller/productController');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.get('/everything', product_controller.test);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

router.post('/login', product_controller.get_login);

router.post('/register', product_controller.set_register);

module.exports = router;

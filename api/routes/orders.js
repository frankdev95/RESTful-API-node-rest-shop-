const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const ordersController = require('../controllers/orders');

router.get('/', checkAuth, ordersController.orders_get_all);
router.get('/:id', checkAuth, ordersController.orders_get_single);
router.post('/', checkAuth, ordersController.orders_create_order);
router.delete('/:id', checkAuth, ordersController.orders_delete_order);

module.exports = router;

const { createOrder, getOrders } = require("../../controller/orders/orderController");
const authGuard = require("../../midlewere/authGuard");

const router = require("express").Router();

router.post("/order/create", createOrder)
router.get("/order/all", authGuard, getOrders)
router.delete("/order/delete/:orderId", createOrder)

module.exports = router
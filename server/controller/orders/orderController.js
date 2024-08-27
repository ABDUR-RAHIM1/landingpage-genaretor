const errorHelpers = require("../../helpers")
const userModal = require("../../model/auth/auth.modal");

const createOrder = async (req, res) => {
    const { businessName } = req.body;
    try {
        const user = await userModal.findOne({ username: businessName })

        if (!user) {
            return res.status(404).json({
                message: "User Not Found !"
            })
        }

        const newOrder = req.body;
        user.orders.push(newOrder);
        await user.save();
        res.json({
            message: "Order Successful",
            ok: true
        })
    } catch (error) {
        errorHelpers(res, error)
        console.log(error)
    }
}

const getOrders = async (req, res) => {
    const { userid, username, email } = req.user;

    try {
        const user = await userModal.findOne({ username })
        console.log(user)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }


    } catch (error) {
        errorHelpers(res, error)
    }
}


module.exports = { createOrder, getOrders }
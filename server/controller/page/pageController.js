const errorHelpers = require("../../helpers");
const userModal = require("../../model/auth/auth.modal");

const createPage = async (req, res) => {
    const { userId, email, username } = req.user;

    try {

        const isUser = await userModal.findOne({ _id: userId })

        if (!isUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const newPage = req.body

        isUser.pages.push(newPage);
        await isUser.save();
        res.json({
            message: "create Successful",
            ok: true
        })
    } catch (error) {
        errorHelpers(res, error)
    }
}


// by userId
const getPage = async (req, res) => {
    const { username, pageId } = req.params;

    try {
        const user = await userModal.findOne({ username }).select("-password");;

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        const pageById = user.pages.id(pageId);

        if (!pageById) {
            return res.status(404).json({ message: 'Page not found' });
        }

        res.status(200).json(pageById)

    } catch (error) {
        errorHelpers(res, error)
    }
}

// edit page
const editPage = async (req, res) => {
    const { username } = req.user;
    const { pageId } = req.params;
    try {
        const user = await userModal.findOne({ username }).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User Not Found", ok: false });
        }

        const pageById = user.pages.id(pageId);
        if (!pageById) {
            return res.status(404).json({ message: "Page Not Found", ok: false });
        }

        pageById.set({ ...req.body });
        await user.save();
        return res.status(200).json({
            message: "Page Updated",
            ok: true,
            page: pageById
        });
    } catch (error) {
        errorHelpers(res, error)
    }
}

const deletePage = async (req, res) => {
    const { username } = req.user;
    const { pageId } = req.params;

    try {
        const user = await userModal.findOne({ username }).select("-password");;

        if (!user) {
            return res.status(404).json({ message: "User Not Found", ok: false });
        }
        const updatedPages = user.pages.filter(page => page._id.toString() !== pageId);

        if (updatedPages.length === user.pages.length) {
            return res.status(404).json({ message: 'Page not found', ok: false });
        }
        user.pages = updatedPages;

        await user.save();

        res.status(200).json({ message: 'Page deleted successfully', ok: true });

    } catch (error) {
        errorHelpers(res, error);
    }
};




module.exports = { createPage, getPage, editPage, deletePage }
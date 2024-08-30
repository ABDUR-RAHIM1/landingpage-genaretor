// const { getAllPages, createPage, getPageById } = require("../../controller/page/page.controller");
const { createPage, getPage, deletePage, editPage } = require("../../controller/page/pageController");
const authGuard = require("../../midlewere/authGuard")
const router = require("express").Router();

// router.get("/page/all/:username", authGuard, getAllPages);
// router.get("/page/one/:username/:pageId", getPageById);
// router.post("/page/create", authGuard, createPage)

// router.get("/page/all/:username", authGuard, getAllPages);
// router.get("/page/one/:username/:pageId", getPageById);

router.post("/page/create", authGuard, createPage)
router.get("/page/one/:username/:pageId", getPage)  // public route
router.put("/page/one/:pageId", authGuard, editPage)
router.delete("/page/delete/:pageId", authGuard, deletePage)


module.exports = router;
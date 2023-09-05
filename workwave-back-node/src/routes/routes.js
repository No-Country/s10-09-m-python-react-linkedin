const { Router } = require("express");

const router = Router();
const experience = require("./experience");
const typesOfUbication = require("./types_of_ubications");
const typesOfEmployment = require("./types_of_employment");
const post = require("./post");
const users = require("./users");
const likes = require("./likes");
const comments = require("./comments");

router.use("/experience", experience);
router.use("/typesofubication", typesOfUbication);
router.use("/typesofemployment", typesOfEmployment);
router.use("/post", post);
router.use("/users", users);
router.use("/likes", likes);
router.use("/comments", comments);

module.exports = router;

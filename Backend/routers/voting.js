const express = require("express");
const { createVoting, getAllVoting, voteByUser } = require("../controllers/voting");
const { verify } = require("jsonwebtoken");
const router = express.Router();

router.post("/create", createVoting);

router.post("/vote/:id", verify, voteByUser);

router.get("/all" , getAllVoting);

module.exports = router;
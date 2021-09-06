const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const { 
    addItem,
    getAllItems,
} = require("../controller/Store.controller");

//http://localhost:5000/api/store/add
router.post("/add", addItem);

//http://localhost:5000/api/store/all
router.get("/all", getAllItems);

module.exports = router;
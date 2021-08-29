const { response } = require('express');
const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    res.send("get req")
});
router.post('', (req, res) => {
    res.send("post req")
});
router.put('', (req, res) => {
    res.send("put req")
});

router.delete('', (req, res) => {
    res.send("delete req")
});



module.exports = router
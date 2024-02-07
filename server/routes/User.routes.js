const express = require('express');

const router = express.Router()
console.log('ehh', router)
router.get('/', (req, res) => {
    res.send('Express JS on Vercel or not');
});

router.get('/ping', (req, res) => {
    res.send('pong');
});
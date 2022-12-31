const express = require('express');

const router = express.Router();

router.get('/', (req, res)=> {
    res.send('A new Hello World from IndexRouter of Coffeebrain.');
});

module.exports = router;
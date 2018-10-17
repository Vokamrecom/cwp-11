const express = require('express');
const router = express.Router();

router.get('*', function (req, res, next) {
    console.log(req.url.toString());
    res.sendFile('00-6.jpg', { root: './public/images/actors'}, function (err) {
        if (err) {
            next(err);
        }
    });
});

module.exports = router;
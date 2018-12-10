var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/triangle', function (req, res, next) {
    res.render('study/triangle/index', {title: '삼각형'});
});

module.exports = router;

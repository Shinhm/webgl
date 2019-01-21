var express = require('express');
var router = express.Router();
const https = require('https');


/* GET home page. */
router.get('/triangle', function (req, res, next) {
    let result = new Array(300).fill(0);
    let index = 1;
    let subIndex = 0;
    const callData = function() {
        https.get(`https://jsonmock.hackerrank.com/api/movies/search?Title=spider&page=${index}`, (res) => {
            res.on('data', (data) => {
                let allData = JSON.parse(data.toString('utf8'));
                let movieData = allData.data;
                movieData.map((v) => {
                    result[subIndex] = v.Title;
                    subIndex++;
                });
                if (parseInt(allData.page) !== parseInt(allData.total_pages)) {
                    index++;
                    callData();
                } else {
                    console.log(result.filter((x)=>x!==0).sort().join('\n'));
                }
            });
        }).on('error', (e) => {
            console.log(e);
        });
    };
    callData();
    res.render('study/triangle/index', {title: '삼각형'});
});

router.get('/tetragon', function (req, res, next) {
    res.render('study/tetragon/index', {title: '사각형'});
});

router.get('/cube', function (req, res, next) {
    res.render('study/cube/index', {title: '사각형'});
});

module.exports = router;

var express = require('express')
var router = express.Router();
var randomstring = require('randomstring');

router.get('/',(req,res,next)=>{
    msg = {
        'id': randomstring.generate(10)
    };
    res.send(msg);
});

module.exports = router;
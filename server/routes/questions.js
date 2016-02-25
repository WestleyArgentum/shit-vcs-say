var express = require('express'),
    router = express.Router(),
    aws = require('aws-sdk'),
    questions = require('../models/questions.js');

router.get('/', questions.getTopQuestions, function(req, res, next) {
    console.log('bleep bloop: ', req.questions);
});

module.exports = router;

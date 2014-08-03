/**
 * @desc Test server to host and respond to client and e2e testing
 */
(function () {
    'use strict';

    var app = require('express')();
    var upper = new (require('../../lib/upper.js'))();

    app.set('port', 9000);
    app.use(upper.client({ express: true, angular: true }))
    .use(require('express').static(__dirname + '/../../test/resources/public'))
    .get('/', function (req, res) {
        res.write(require('fs').readFileSync(__dirname + '/html/index.html'));
        res.end();
    })
    .get('/angular', function (req, res) {
        res.write(require('fs').readFileSync('./html/angular.html'));
        res.end();
    })
    .get('/amd', function (req, res) {
        res.write(require('fs').readFileSync('./html/amd.html'));
        res.end();
    })
    .listen(app.get('port'), function () {
        console.log('Listening on port ' + app.get('port'));
    });
})();
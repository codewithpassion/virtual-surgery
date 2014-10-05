/**
 * Module dependencies.
 */

var express  = require('express'),
    path     = require('path');


var app = express();

/**
 * Express configuration.
 */
app.set('port', 3000);
app.use(express.static(__dirname));
app.use(function (req, res) {
  res.status(404).render('404', {title: 'Not Found :('});
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

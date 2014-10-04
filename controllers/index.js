/**
 * do something with the user model
 * var User = require('../models/user');
 */

exports.index = function (req, res) {
  res.render('index', {
    title: 'Virtual surgery - a #schiencehackday experiment'
  });
};
exports.course1 = function (req, res) {
  res.render('course1', {
    title: 'Virtual surgery - Course1'
  });
};

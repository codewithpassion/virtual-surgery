var controllers = require('../controllers');


module.exports = function (app) {
  app.get('/', controllers.index);
  app.get('/course1', controllers.course1);
};

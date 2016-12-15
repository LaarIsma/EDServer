'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session');

var projects = require('./controllers/projects');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);
    
  
  app.get('/api/projects', projects.getProject); 
  app.post('/api/projects', projects.setProject);
  app.put('/api/projects/:project_id', projects.updateProject); 
  app.delete('/api/projects/:project_id', projects.removeProject);    
    
  app.post('/api/session', session.login);
  app.delete('/api/session', session.logout);

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};

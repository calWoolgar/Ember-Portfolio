import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' })
  this.route('work', { path: '/work' })
  this.route('contact', { path: '/contact' })
  this.route('blog', function() {
    this.route('selected-blog', { path: '/:blog_id'});
  });
});

export default Router;

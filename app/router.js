import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('prevresults');
  this.route('polls', function() {
    this.route('newpoll');
    this.route('vote', { path: '/:poll_id' });
  });
});

export default Router;

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-rezerv-план-l');
  this.route('i-i-s-rezerv-план-e',
  { path: 'i-i-s-rezerv-план-e/:id' });
  this.route('i-i-s-rezerv-план-e.new',
  { path: 'i-i-s-rezerv-план-e/new' });
  this.route('i-i-s-rezerv-проект-l');
  this.route('i-i-s-rezerv-проект-e',
  { path: 'i-i-s-rezerv-проект-e/:id' });
  this.route('i-i-s-rezerv-проект-e.new',
  { path: 'i-i-s-rezerv-проект-e/new' });
  this.route('i-i-s-rezerv-участник-l');
  this.route('i-i-s-rezerv-участник-e',
  { path: 'i-i-s-rezerv-участник-e/:id' });
  this.route('i-i-s-rezerv-участник-e.new',
  { path: 'i-i-s-rezerv-участник-e/new' });
});

export default Router;

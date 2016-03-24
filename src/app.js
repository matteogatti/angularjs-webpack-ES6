/**
 * Created by Matteo Gatti on 24/03/16.
 * Mail: matteo.gatti@codinglab.it
 */
import css from 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';

angular.module('app', [uirouter, home]).config(routing);
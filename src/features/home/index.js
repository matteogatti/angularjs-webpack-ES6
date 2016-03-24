/**
 * Created by Matteo Gatti on 24/03/16.
 * Mail: matteo.gatti@codinglab.it
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import './home.css';
import randomNames from '../../services/randomNames.service';

export default angular.module('app.home', [uirouter, randomNames])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;
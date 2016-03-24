/**
 * Created by Matteo Gatti on 24/03/16.
 * Mail: matteo.gatti@codinglab.it
 */

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home.html'),
            controller: 'HomeController',
            controllerAs: 'home'
        });
}
/**
 * Created by Matteo Gatti on 24/03/16.
 * Mail: matteo.gatti@codinglab.it
 */
import angular from 'angular';

function greeting() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: `<h1>Welcome, {{ name }}</h1>`
    }
}

export default angular.module('directives.greeting', [])
    .directive('greeting', greeting)
    .name;
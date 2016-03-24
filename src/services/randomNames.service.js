/**
 * Created by Matteo Gatti on 24/03/16.
 * Mail: matteo.gatti@codinglab.it
 */
import angular from 'angular';

class RandomNames {
    constructor() {
        this.names = ['Matteo', 'Emma', 'Irene', 'Barbara'];
    }

    getName() {
        const totalNames = this.names.length;
        const rand = Math.floor(Math.random() * totalNames);

        return this.names[rand];
    }
}

export default angular.module('services.random-names', [])
    .service('randomNames', RandomNames)
    .name;
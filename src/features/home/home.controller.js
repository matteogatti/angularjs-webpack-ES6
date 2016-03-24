/**
 * Created by Matteo Gatti on 24/03/16.
 * Mail: matteo.gatti@codinglab.it
 */
export default class HomeController {
    constructor(randomNames) {
        this.random = randomNames;
        this.name = 'Home';
    }

    changeName() {
        this.name = 'Codinglab';
    }

    randomName() {
        this.name = this.random.getName();
    }
}

HomeController.$inject = ['randomNames'];
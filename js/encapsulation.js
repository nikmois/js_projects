'use strict';

class User {
    constructor(name, age) {
    this.name = name;
    this._age = age;
    }

    #surname = 'Petrov';

    say = () => {
        console.log(`User name: ${this.name}${this.#surname}, user age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Unacceptable number');
        }
    }

    get surname() {
        return this.#surname;
    }

}

const ivan = new User('Ivan', 25);
console.log(ivan.surname);
ivan.say();


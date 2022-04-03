const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, work) {
        super(name, id, email);

        this.work = work
    }
    getWork() {
        return this.work;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;
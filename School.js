module.exports = class School {
    constructor(name, level, numberOfStudent) {
        this._name = name;
        this._level = level;
        this._numberOfStudent = numberOfStudent;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudent() {
        return this._numberOfStudent;
    }

    set numberOfStudent(value) {
        if (typeof value === 'number') {
            this._numberOfStudent = value;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudent} students at the ${this.level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const rand = Math.floor(substituteTeachers.length * Math.random());
        return substituteTeachers[rand];
    }
}

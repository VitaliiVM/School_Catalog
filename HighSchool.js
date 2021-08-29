const School = require("./School");

module.exports = class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'High', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}

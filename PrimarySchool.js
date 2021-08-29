const School = require("./School");

module.exports = class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'Primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

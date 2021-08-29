const School = require("./School");
const PrimarySchool = require("./PrimarySchool");
const HighSchool = require("./HighSchool");

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 400, 'Students must be picked up by a parent,' +
    ' guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams',
    'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);


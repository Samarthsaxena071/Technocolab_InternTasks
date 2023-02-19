class School{
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents =numberOfStudents;
    }

    get name() { return this._name;}
    get level() { return this._level;}
    get numberOfStudents(){ return this._numberOfStudents;}

    set numberOfStudents(newNumberOfStudents){
      if (typeof newNumberOfStudents === 'number' && newNumberOfStudents > 0){
      this._numberOfStudents = newNumberOfStudents;}

      else {console.log('Invalid input: numberOfStudents must be set to a Number.');}
    }

    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level`);
    }

    static pickSubstituteTeacher(substituteTeachers){
        const noOfArrayElements = substituteTeachers.length -1;
        const randomNumber = Math.floor(Math.random()* noOfArrayElements);
        return substituteTeachers[randomNumber];
    }
}  

class Primary extends School{
    constructor(name, numberOfStudents, pickupPolicy){
        super(name,'primary',numberOfStudents);
        this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){ return this._pickupPolicy;}
}

class MediumSchool extends School{
  constructor(name,numberOfStudents){
    super(name,'medium',numberOfStudents);
  }
}

class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams,averageTestScores, schoolOverview){
      super(name,'high',numberOfStudents);
      this._sportsTeams = sportsTeams;
      this._averageTestScores = averageTestScores;
      this._schoolOverview = schoolOverview;
    }
    get sportsTeams() { console.log(this._sportsTeams);}
    get averageTestScores() { console.log(this._averageTestScores);}
    get schoolOverview() { console.log(this._schoolOverview);}
    set averageTestScores(avgTestScore) {
      if (typeof avgTestScore === 'number' && avgTestScore > 0){
      this._averageTestScores = avgTestScore;}
      else console.log(`The Average Test score should be a numeric and greater than zero!`); }
    set sportsTeams(inputSportsTeams) {
      this._sportsTeams.push(inputSportsTeams);
    }
  }

  //Primary School Instance
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

  lorraineHansbury.quickFacts();

  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

  //High School Instance
  const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

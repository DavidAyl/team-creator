const Employee = require('./employee')
class Interns extends Employee {
    constructor(id, name, email, School) {
     super(id,
       name,
        email,)   
        this.School = School;
        this.role = 'Intern'
    }

    whatSchool() {
        return this.School;
    }

    getRole() { 
        return this.getRole;
    }

}

module.exports = Interns;
const Employee = require('./employee')
class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
     super(id,
       name,
        email,)   
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }

    whatOfficeNumber() {
        return this.officeNumber;
    }

    getRole() { 
        return this.role;
    }

}

module.exports = Manager;
const Employees = require('./employee')
class Engineers extends Employees {
    constructor(id, name, email, GitHub) {
     super(id,
       name,
        email,)   
        this.GitHub = GitHub;
        this.role = 'Engineer'
    }

    whatGithub() {
        return this.GitHub;
    }

    getRole() { 
        return this.role;
    }

}

module.exports = Engineers;
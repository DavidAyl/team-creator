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
        return this.Github;
    }

    getRole() { 
        return this.getRole;
    }

}

module.exports = Engineers;
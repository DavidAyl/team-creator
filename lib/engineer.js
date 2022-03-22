class Engineers {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    whatId(){
        return this.id;
    }

    whatName() {
        return this.name;
    }

    whatEmail() {
        return this.email;
    }

    whatGithub(){
        return this.Github;
    }

    getRole() { 
        return this.getRole;
    }

}

module.exports = Employees;
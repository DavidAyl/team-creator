class Employees {
    constructor(name, id, email) {
       
        this.name = name;
        this.id = id;
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

    getRole() { 
        return this.getRole;
    }

}

module.exports = Employees;
const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('init', () => {
        it('should require a name, id, and email', () => {
            const employee = new Employee('Kelly', 3, 'kelly@hotmail.org');
            expect('name' in employee).toBe(true)
            expect('id' in employee).toBe(true)
            expect('email' in employee).toBe(true)
        })
    });
describe('whatName', () => {
    it('should return the name of the employee', () => {
        const employee = new Employee('Kelly', 3, 'kelly@hotmail.org')

        expect(employee.whatName()).toBe('Kelly')
    })
})
describe('whatId', () => {
    it('should return the Id of the employee', () => {
        const employee = new Employee('Kelly', 3, 'kelly@hotmail.org')

        expect(employee.whatId()).toBe(3)
    })
})
describe('whatEmail', () => {
    it('should return the email of the employee', () => {
        const employee = new Employee('Kelly', 3, 'kelly@hotmail.org')

        expect(employee.whatEmail()).toBe('kelly@hotmail.org')
    })
})
})
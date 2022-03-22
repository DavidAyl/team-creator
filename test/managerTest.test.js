const Manager = require('../lib/manager')

describe('Manager', () => {
    describe('init', () => {
       it('should require a officeNumber', () => {
           const manager = new Manager('Mike', 8, 'mike@prison.com', 19);
           expect('officeNumber' in manager).toBe(true)
       })
    })
})

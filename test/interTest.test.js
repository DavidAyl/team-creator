const Intern = require('../lib/intern')

describe('Intern', () => {
    describe('init', () => {
       it('should require a School username', () => {
           const intern = new Intern('Ryan', 5, 'ryan@fire.com', 'UNCC');
           expect('School' in intern).toBe(true)
       })
    })
})

describe('whatSchool', () => {
   it('should return the school of the intern', () => {
    const intern = new Intern('Ryan', 5, 'ryan@fire.com', 'UNCC');

       expect(intern.whatSchool()).toBe('UNCC')
   })
})
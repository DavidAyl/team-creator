 const Engineer = require('../lib/engineer')

 describe('Engineer', () => {
     describe('init', () => {
        it('should require a GitHub username', () => {
            const engineer = new Engineer('Johnny', 2, 'Johnny@jonface.net', 'jongit332');
            expect('GitHub' in engineer).toBe(true)
        })
     });


 describe('whatGithub', () => {
    it('should return the github of the engineer', () => {
        const engineer = new Engineer('Johnny', 2, 'Johnny@jonface.net', 'jongit332');

        expect(engineer.whatGithub()).toBe('jongit332')
    })
})
})
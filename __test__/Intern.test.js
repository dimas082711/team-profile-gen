const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Alex', '201211', 'alex@gmail.com', 'PDC');

    expect(intern.work).toBe('PDC');
})

test('retrival of work', () => {
    const intern = new Intern('Alex', '201211', 'alex@gmail.com', 'PDC');

    expect(intern.getWork()).toBe('PDC');
    expect(intern.getWork().length).toBeGreaterThan(0);
    expect(intern.getRole()).toBe('Intern');
})
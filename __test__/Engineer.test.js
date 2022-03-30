const Engineer = require("../lib/Engineer");



test('creates an engineer object', () => {
    const engineer = new Engineer('Alex', '201211', 'alex@gmail.com', 'alex2112');

    expect(engineer.github).toBe('alex2112');
})

test('retrieval of github', () => {
    const engineer = new Engineer('Alex', '201211', 'alex@gmail.com', 'alex2112')

    expect(engineer.getGithub()).toBe('alex2112')
    expect(engineer.getGithub().length).toBeGreaterThan(0)
    expect(engineer.getRole()).toBe('Engineer');
})
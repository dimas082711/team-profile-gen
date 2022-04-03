const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Alex', '201211', 'alex@gmail.com', '15');

    expect(manager.officeNumber).toBe('15');
})

test('retrival of office number', () => {
    const manager = new Manager('Alex', '201211', 'alex@gmail.com', '15');

    expect(manager.getOfficeNumber()).toBe('15');
    expect(manager.getOfficeNumber().length).toBeGreaterThan(0);
    expect(manager.getRole()).toBe('Manager');
})
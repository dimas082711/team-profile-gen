const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Alex', '201211', 'alex@gmail.com');

    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe('201211');
    expect(employee.email).toBe('alex@gmail.com');
});

test('retrival of name, id, email, and role', () => {
    const employee = new Employee('Alex', '201211', 'alex@gmail.com');

    expect(employee.getName()).toBe('Alex');
    expect(employee.getName().length).toBeGreaterThan(0);
    expect(employee.getId()).toBe('201211');
    expect(employee.getEmail()).toBe('alex@gmail.com');
    expect(employee.getEmail()).toContain('@');
    expect(employee.getRole()).toBe('Employee');
});
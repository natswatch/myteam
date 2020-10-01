const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', '123452', 'dave@me.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('123452');
    expect(employee.email).toBe('dave@me.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Dave', '123452', 'dave@me.com');

    expect(employee.getName()).toBe('Dave');
});

test("gets employee's id", () => {
    const employee = new Employee('Dave', '123452', 'dave@me.com');

    expect(employee.getId()).toBe('123452');
});

test("gets employee's email", () => {
    const employee = new Employee('Dave', '123452', 'dave@me.com');

    expect(employee.getEmail()).toBe('dave@me.com');
});

test("gets employee's role", () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
});
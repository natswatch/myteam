const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager("Jenney", '11100', 'jenney@me.com', '702-544-4444');
    
    expect(manager.name).toBe('Jenney');
    expect(manager.id).toBe('11100');
    expect(manager.email).toBe('jenney@me.com');
    expect(manager.officeNumber).toBe('702-544-4444');
});

test("gets intern's role", () => {
    const manager = new Manager();

    expect(intern.getRole()).toBe('Manager');
});
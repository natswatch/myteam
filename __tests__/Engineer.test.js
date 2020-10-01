const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('John', '88882', 'john@me.com', 'johnsmith');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('88882');
    expect(engineer.email).toBe('john@me.com');
    expect(engineer.github).toBe('johnsmith');
});

test("gets engineer's github username", () => {
    const engineer = new Engineer('John', '88882', 'john@me.com', 'johnsmith');

    expect(engineer.getGithub()).toBe('johnsmith');
});

test("gets engineer's role", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});
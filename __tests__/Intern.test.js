const { exportAllDeclaration } = require('@babel/types');
const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Chrissy', '45323', 'chrissy@me.com', 'USC');

    expect(intern.name).toBe('Chrissy');
    expect(intern.id).toBe('45323');
    expect(intern.email).toBe('chrissy@me.com');
    expect(intern.school).toBe('USC');
});

test("gets intern's school", () => {
    const intern = new Intern('Chrissy', '45323', 'chrissy@me.com', 'USC');

    expect(intern.getSchool()).toBe('USC');
});

test("gets intern's role", () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});
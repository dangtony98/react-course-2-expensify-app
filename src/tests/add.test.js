const add = (a, b) => (a + b);
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
    const result = add(3, 7);
    expect(result).toBe(10);
});

test('Should generate greeting from name', () => {
    const greeting = generateGreeting('Tony');
    expect(greeting).toBe('Hello Tony!');
});

test('Should generate greeting for no name', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!');
});
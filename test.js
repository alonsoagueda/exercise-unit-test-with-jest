const { sum,euroToUsd, dollarToYen } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// EURO TO USD
test ('sum, and euroToUsd',() =>{
    expect(euroToUsd(5)).toBe(6);
});
test('sum, and euroToUsd',()=>{
    expect(euroToUsd (-5)).toBe();
})


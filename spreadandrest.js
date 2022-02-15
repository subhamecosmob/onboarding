/** Spread and Rest operator */


// Rest

const sum = (...numbers) =>
{
    return numbers.reduce((acc, number) =>
    {
        return acc + number;
    }, 0)
}

let sumValue = sum(1, 2, 34);
console.log(sumValue);


//Spread 
const sum2 = (numbersList) =>
{
    return [...numbersList].reduce((acc, number) =>
    {
        return acc + number;
    }, 0)
}

const sum2Value = sum2([1, 2, 34])


console.log(sum2Value)
/** Es6 Arrow function */


// add function with arrow function

const add = (a, b) =>
{
    return a + b;
}


/* add function can also abbreviated,
using implicit return ,by remove curly braces and return keyword 
if body of the function only have single code expression */

const add2 = (a, b) => a + b;


// a arrow function can also be more abbreviated if has only one argument by remove function brackets

const tripleYourValue = value => 3 * value;



// apart of abbreviation , arrow function does not loose the context of this operator.


let obj = {
    numbers: [1, 2, 3, 4, 5],
    even: "this is even",
    odd: "this is odd",
    loop()
    {

        // the arrow function inside foreach will retain the value of this 
        // and will print correct value of even and odd variable
        this.numbers.forEach((number) =>
        {

            if (number % 2 === 0) return console.log(this.even);
            console.log(this.odd)

        })


        // the  function inside foreach will not retain the value of this 
        // and will print undefined value 

        this.numbers.forEach(function (number)
        {
            if (number % 2 === 0) return console.log(this.even);
            console.log(this.odd)

        })
    }
}


obj.loop();













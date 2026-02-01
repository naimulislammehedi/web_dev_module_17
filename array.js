// Objective: Write a function to give me the sum of all numbers in an array
/*
1. declare a funcation 
2. call check wehther the function is called properly 
3. set a parameter(s)
4. pass the paramater(s), check wheter paramater is passed in a proper format 
5. do the function tasks (step by step)
*/
function sumOfNumbers(numbers) {
    let sum = 0; 
    for (const number of numbers) {
        console.log(number); 
        sum = sum + number; 
        
    }
    return sum; 
}

const numbs = [54, 62, 12, 6]; 
const sum = sumOfNumbers(numbs); 
console.log("Sum of numbers is", sum); 
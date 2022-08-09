/*
১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 
*/


// একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।
function smallestNumberArray(numbers) {
    // say first number is smallest
    let small = numbers[0];

    // compare other number with small number
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // compare with small
        if (element < small) {
            small = element;
        }
    }

    return small;
}

// smallest number in array function invoke
console.log(smallestNumberArray([2, 0, -2, 23, 56, 3]));


//একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।
function smallestNumber(numOne, numTwo, numThree) {
    // declare variable
    let small;

    // check which number is smallest
    if (numOne < numTwo && numOne < numThree) {
        small = numOne;
    }
    else if (numTwo < numOne && numTwo < numThree) {
        small = numTwo;
    }
    else {
        small = numThree;
    }

    // return small number
    return small;
}

console.log(smallestNumber(3, 1, 87));


// একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

function averageOfArray(numbers) {
    // declare necessary variable
    let sum, length, average;

    // make sum of whole array using reduce function, length property
    sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
    length = numbers.length;

    // calculate average
    average = sum / length;

    // return average
    return average;
}

// average function invoke
console.log(averageOfArray([2, 4, 5]));
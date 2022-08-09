/*
৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 
*/

function rectangleArea(length, width) {
    // rectangle area === length * width
    return length * width;
}

console.log(rectangleArea(23, 45));


// second largest number in array function declaration
function secondLargestNumber(numbers) {
    // sort javascript integer array
    // sort function only sorted alphabatically like a, b, c or 1.., 2.., 3..
    let sortedNumbers = numbers.sort(
        function (a, b) {
            return a - b;
        }
    );

    // reverse the sorted array 
    sortedNumbers.reverse();

    // get second element from sorted array
    const secondLargestNumber = sortedNumbers[1];

    // return second largest element
    return secondLargestNumber;
}

console.log(secondLargestNumber([2, 300, 54, 98, 23]));
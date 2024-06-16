// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
//this function returns true if a card is valid or false if it is not.
let validateCred = arr => {
    // defining the sum of all credit card digits with the check digit
    let digitSum = arr[arr.length-1];
    let digit = 0;
    

    // every other digit starting from the right, except the check digit, is doubled and summed up.
    // if the doubled digit is greater than 9 then 9 is subtracted from it and the result is summed instead.
    for (let i = arr.length - 2; i >= 0; i-=2) {
        
        if ((arr[i] * 2) > 9) {
            digit = (arr[i] * 2) - 9;
        } else {
            digit = arr[i] * 2;            
        }
        digitSum += digit;
    }
    // summing up all the other digits that remain
    for (let j = arr.length - 3; j >= 0; j -= 2) {
        digit = arr[j];
        digitSum += digit;
    }

    //if modulo 10 of the sum equal to 0 then we have a valid number, otherwise we don't
    let modulo = digitSum % 10;
    return (modulo === 0) ? true : false;
}

// loops through a batch of numbers and returns those that are invalid
let findInvalidCards = nestedArray => {
    let invalidNumbers = [];
    for (i = 0; i < nestedArray.length; i++) {
        if (validateCred(nestedArray[i]) === false) {
            invalidNumbers.push(nestedArray[i]);            
        }        
    }
    return invalidNumbers;
}

//console.log(validateCred(valid4));
//console.log(findInvalidCards(batch));


//return an array of companies that have issued faulty cards without duplicating
let idInvalidCardCompanies = faultyNumsArr => {
    let companies = [];
    for (i = 0; i < faultyNumsArr.length; i++) {
        
        switch (faultyNumsArr[i][0]) {
            case 3:
                if (companies.includes('Amex (American Express)') === false) {
                    companies.push('Amex (American Express)');
                };
                break;
            case 4:
                if (companies.includes('Visa') === false) {
                    companies.push('Visa');
                };                
                break;
            case 5:
                if (companies.includes('MasterCard') === false) {
                    companies.push('MasterCard');
                };                
                break;
            case 6:
                if (companies.includes('Discover') === false) {
                    companies.push('Discover');
                };                
                break;
            default:
                companies.push('Company not found');
        }
    }
    return companies;
}

console.log(idInvalidCardCompanies(findInvalidCards(batch)));



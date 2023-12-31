(function() {
    ('use strict');

    // ---------------------
    // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    // ---------------------

    // ---------------------
    // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // ---------------------

    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------

    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------

    // ---------------------
    // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
    // ---------------------

    // ---------------------
    // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------

    // ---------------------
    // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------

    ////////////////////////////////////////////////////////////////////////
    /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
    ////////////////////////////////////////////////////////////////////////

    console.assert(max(2, 4) === 4, 'function max error');

    console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

    console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

    console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

    console.assert(isVowel('a') === true, 'ERROR function isVowel');

    console.assert(isVowel('b') == false, 'ERROR function isVowel');

    console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

    console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

    console.assert(
        reverse('jag testar') === 'ratset gaj',
        'ERROR function reverse'
    );

    console.assert(
        findLongestWord([
            'hello',
            'world',
            'does',
            'anyone',
            'really',
            'know',
            'what',
            'time',
            'it',
            'is',
        ]) === 6,
        'ERROR function findLongestWord'
    );

    console.assert(
        filterLongWords(
            [
                'hello',
                'world',
                'does',
                'anyone',
                'really',
                'know',
                'what',
                'time',
                'it',
                'is',
            ],
            4
        ).length === 4,
        'ERROR function filterLongWords'
    );
})();

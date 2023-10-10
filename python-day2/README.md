# Python Day 2 Exercises

Put these files in a folder called `python_day2`. You'll initialize the repo in this folder and commit the _entire_ folder to a repo.

## Conditionals

Save these in a file called `conditionals.py`.

* First, import the [`random()` module](https://www.pythoncheatsheet.org/modules/random-module)
  * `import random` (It's built in to Python, it just needs to be imported!)
* Ask the user to guess a number between a certain range, i.e. between 1-10
* Make a variable called `magic_number`
* Assign a value to `magic_number` using the `random()` module, have it select an integer between the same range.
* Print the value of the `magic_number`
* Respond to the user based on their guess:
  * If they're correct give a victory message, i.e. "ARE YOU A MIND READER!?!?!"
  * If they're out of the range, i.e. they guess 12, reply with: "YOU'RE OUT OF RANGE!!"
  * If they're incorrect, tell them to try again.

## Lists

Save these in a file called `lists.py`.

### Part 1 - Change a List

* Use the following list: `numbers = [1, 2, 3, 4, 5, 99, 2600, 300]`
* There is a Python method that will [reverse a list](https://realpython.com/python-reverse-list/).
* Create a new variable called `reversed_list` and assign it the reversed value of `numbers`.
* Print the values of each list.

### Part 2 - String to List

* Make a string with at least 6 characters.
* Make an empty list (hint: create a variable, it's value will look like an empty array in JavaScript)
* Loop through each letter in your string and for each letter in the string, append it to the empty list.
* Revese the list.
* Create a new variable that is an empty string (just like in JavaScript).
* Loop through the list, for each letter in the list, add it to the new string your created.
* Print out the new string. It should be the reversed version of the string you created. i.e. "sean" -> "neas".

### Part 3 - List + Conditional

* Make a new list containing members of your favorite band/sports team/television show.
* Write a conditional statement to check if a specific person is in that list.
  * If they are in the list, remove them.
  * If they're not in the list, add them.
* Can you write a condition that does _both_ of these checks.
  * **HINT:** Think like this: "If the person exists, then remove them. Otherwise, if they don't, add them.
* Print the updated list.

## While Loop

Save these in a file called `loops.py`.

## Part 1 - Start/End

* Ask the user for a starting number, assign it to a variable.
* Ask the user for an ending number, assign it to a variable.
* Write a loop that increments the starting number by `1` until it matches the ending number.

### Bonus

* Can you write a loop that increments by more than `1`?
* Can you create a range of numbers from which the user can choose?
* Can you let the user know when they choose something out of that range?

## Part 2 - Multi-Condition Check

* Create string with at least 2 words and at least 16 characters total.
* Create a variable called `counter` with a starting value of `0`
* Loop through the string
  * Increment the `counter` by `1`
  * Stop the loop when `counter` is greater than the length of your string.
* _IN THE LOOP_
  * Write a condition to see If the `counter` value is an even number.
  * Also make sure the value of your string at the index of `counter` isn't a blank space!
  * If **both** of those conditions are met, print the value of your string at that counter position
* The result should be only _letters_ that occur in even numbered indexes.

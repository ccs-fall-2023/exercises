# Warrior 2 - The Sequel

## Part 1 - Stayin' Alive

- Add a method to the `Warrior` class called `alive`
  - This method will check the `health` attribute for an instance of the `Warrior` class.
  - If the `health` is greater than 0 it should return `true`, otherwise return `false`

## Part 2 - Bring out the (un)Dead

- Create a new child class of `Warrior` called `Zombie`
- The `alive` method for Zombies will _always_ return `true`
  - (because zombies are never truly dead!!)
- Create a new zombie object with the `Zombie` class. Name it whatever you'd like.
  - **NOTE** If you'd like, you can make a _lot_ of zombies, like an entire _horde_ of zombies. But I'd start with one.

## Part 3 - Enemies Everywhere

- Create an array called `enemies`
- Add the villain object and any/all zombie objects to the array

## Part 4 - We're Under Attack

- Incorporate the `alive` method to check if your characters are alive
- If the hero is alive, have them attack the villain
- Select an enemy at _random_ (villain or zombie) from the enemies array.
  - Use the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) method to generate a number that will be used as the _index_ for the array.
  - Use the random number to reference the enemy using the index notation, i.e. `array[0]`
- Have that enemy attack the hero

## LEVEL UP

### The State of the Battle

Let's create a global object to keep track of the **state** of our warriors. (emphasis intended)

**NOTE** I intentionally chose ridiculous names here. Don't use my names, they're simply examples to demonstrate the pattern.

- Create a global object to store your hero and villain objects
  - Hint: Use the curly brackets, `{}`, the identify something as an `Object`. i.e. `const stateObjectTokeepTrackOfMyCharacters = {}`
  - When you create assign two variables in the object, `hero` and `villain`
  - Make the initial value of those variables equal to `null` **THEY WILL CHANGE!**
- Refactor your code to add your hero object as the value in your global object, i.e. `hero: TheHeroObjectThatYouCreated`
- Refactor your code to add your villain object as the value in you global object, i.e. `villain: TheVillainObjectThatYouCreated`
- Use this object to report the `health` attribute of your hero and villain. Log these to the console.

### DOM DOOM LEVEL

- Refactor _all_ of the work you've done to work in the browser via an HTML page.
- Add a `form` and `input` elements to create each warrior, instead of having them hardcoded in the JavaScript file.
- Start thinking about how to accept user input with regards to having the characters fight!
  - This could be asking a user what they want to do...
  - Or it could be a button that triggers an attack...
  - The possibilites are (mostly) endless















if you read down this far, here's a [CodeSandbox Link](https://codesandbox.io/s/state-objects-p6qyql) that works out how to use the global object to store your hero and villain information.
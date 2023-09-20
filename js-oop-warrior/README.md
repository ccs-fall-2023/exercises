# WARRIORS

**NOTE:** For your first pass on this, you can use something like CodeSandbox and log everything to the console.

**LEVEL UP:** Make a directory and associated folders/files (like every other assignment) and incorporate DOM updates/interaction instead of printing to the console.

## Create Some Warriors

Given the following `Warrior` class:

```js
class Warrior {
    constructor(characterName, details, health = 10, power = 5) {
        this.characterName = characterName;
        this.health = health;
        this.power = power;
    }
}
```

Write code to:

### Part 1: Set the Stage

- Make a `greet` method on the `Warrior` Class.
  - This will return a message where the characters introduce themselves.
  - You decide what they say, but it must include their name.
- Make an `attack` method on the `Warrior` Class.
  - When one warrior attacks another it should subtract the attacker's power value from the other character's health value.

### Part 2: Heroes and Villains

- Make a new Class called `Hero` that extends `Warrior`
- Make a new Class called `Villain` that extends `Warrior`
- Give the `Hero` a method called `announce` to annouce their presence, this is different than the `greet`!
- Give the `Villain` a method called `taunt` to taunt adversaries, this is different than the `greet`!

### Part 3: Warriors Enter

- Make a hero object with the `Hero` class. Name it whatever you'd like.
- Make a villain object with the `Villain` class. Name it whatever you'd like.

### Part 4: The Battle

- Have your hero announce themselves, log the announcment to the console.
- Have your villain taunt the hero, log the taunt to the console.
- Have your hero attack the villain. Log the villain's health to the console.
- Have your villain attack the hero. Log the hero's health to the console.

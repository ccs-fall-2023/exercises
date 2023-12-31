# Python RPG Game

It's like the JavaScript version, but 100% more 🐍 and a healthy does of refactoring!

## Getting started

Take the starter code of the RPG game and _rewrite it_ using objects.

> In this simple RPG game, the hero fights the goblin.
> The hero has the options to:
>
>    1. fight goblin
>    2. do nothing - in which case the goblin will attack him anyway
>    3. flee

```python
def main():
    hero_health = 10
    hero_power = 5
    goblin_health = 6
    goblin_power = 2

    while goblin_health > 0 and hero_health > 0:
        print("You have %d health and %d power." % (hero_health, hero_power))
        print("The goblin has %d health and %d power." % (goblin_health, goblin_power))
        print()
        print("What do you want to do?")
        print("1. fight goblin")
        print("2. do nothing")
        print("3. flee")
        print("> ",)
        user_input = input()
        if user_input == "1":
            # Hero attacks goblin
            goblin_health -= hero_power
            print("You do %d damage to the goblin." % hero_power)
            if goblin_health <= 0:
                print("The goblin is dead.")
        elif user_input == "2":
            pass
        elif user_input == "3":
            print("Goodbye.")
            break
        else:
            print("Invalid input %r" % user_input)

        if goblin_health > 0:
            # Goblin attacks hero
            hero_health -= goblin_power
            print("The goblin does %d damage to you." % goblin_power)
            if hero_health <= 0:
                print("You are dead.")

main()
```

## Step 1

Make a `Hero` class to store the health and power of the hero, and make a `Goblin` class to store the health and power of the goblin. Use a hero object in place of the variables hero_health and hero_power and use a goblin object in place of the variables `goblin_health` and `goblin_power` all through out the app.

## Step 2

Take the code for the hero attacking the goblin and extract it into a method (call it `attack`) of the Hero class.

Replace the existing code with a call to the `attack` method.

Hint: attack should take in the `goblin` (enemy) as a parameter: `hero.attack(goblin)`

## Step 3

Similarly, take the code for the goblin attacking the hero and extract it into a method (also call it `attack`) of the Goblin class.

Replace the existing code with a call to the attack method. It should look like `goblin.attack(hero)`.

## Step 4

Refactor the while condition:

`while goblin.health > 0 and hero.health > 0:`

to

`while goblin.alive() and hero.alive():`

The health checks should be moved to within the alive methods of `Hero` and `Goblin` respectively.

## Step 5

Take the code for printing the health status of the hero and move it into a method called `print_status` of `Hero`. Do the same for the goblin.

## Step 6

Do you see a lot of duplicated or similar code between `Hero` and `Goblin`? What if you can share the duplicated code between them? You can by using inheritance! Create a new class called `Character` and make both `Hero` and `Goblin` inherit from it.

## Step 7

The alive methods on `Hero` and `Goblin` should be identical. Move it into `Character`, and remove them from `Hero` and `Goblin` - now they can simply inherit it from `Character`.

## Step 7: Bonus Challenge

The methods attack and `print_status` method in `Hero` and `Goblin` look almost identical, but not quite.

Is it possible to move them into the Character class as well? Give it a try.

## Step 8: Bonus Challenge 2

Create a zombie character that cannot die and have it fight the hero instead of the goblin.

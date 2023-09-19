# Working with Classes in JavaScript

**NOTE:** For your first pass on this, you can use something like CodeSandbox and log everything to the console.
**LEVEL UP:** Make a directory and associated folders/files (like every other assignment) and incorporate DOM updates/interaction.

## Work with an Existing Class

Given the following `Person` class:

```js
class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    greet(otherPerson) {
        console.log(`Hello ${otherPerson.name}, I am ${this.name}!`);
    }
}
```

Write code to:

- Instantiate an instance object of Person with name of 'Sonny', email of '<sonny@hotmail.com>', and phone of '483-485-4948', store it in the variable `sonny`.
- Instantiate another person with the name of 'Jordan', email of '<jordan@aol.com>', and phone of '495-586-3456', store it in the variable `jordan`.
- Have `sonny` greet `jordan` using the greet method.
- Have `jordan` greet `sonny` using the greet method.
- Write a print statement to print the contact info (email and phone) of Sonny.
- Write another print statement to print the contact info of Jordan.

---

## Make Your Own

Create a class `Vehicle`. A `Vehicle` object will have 3 attributes:

- make
- model
- year

A vehicle is created like this:

```js
const car = new Vehicle('VW', 'GTI', 2018)
```

And you can access it's attributes individually like so:

```js
console.log(car.make, car.model, car.year)
```

### Add a Method

Add a `print_info` method to the `Vehicle` class. It will print out the vehicle's information:

```js
console.log(car.print_info());
```

Will output:

```js
2018 VW GTI
```

## Expanding an Existing Class

Go back to the `Person` class.

```js
class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    greet(otherPerson) {
        console.log(`Hello ${otherPerson.name}, I am ${this.name}!`);
    }
}
```

### Add a New Method

Add a `print_contact_info` method to the `Person` class that will print out the contact info for a object instance of Person.

```js
console.log(sonny.print_contact_info())
```

Should generate this output:

```
Sonny's email: sonny@hotmail.com
Sonny's phone number: 483-485-4948
```

#### Add an instance variable (attribute)

Add a `friends` instance variable (attribute) to the `Person` class.

You will initialize it to an empty array within the constructor.

Once you've done this you should be able to add a friend to a person via `array.push()`:

```js
jordan.friends.push(sonny)
sonny.friends.push(jordan)
```

You should also be able to get the number of friends a person has by using the length attribute:

```js
jordan.friends.length
```

Will return:

```
1
```

#### Add an `add_friend` method

A person's friends attribute is an array, which itself  is an implementation detail of the `Person` class.

Occassionally you'll want to hide implementation details from the users of your object/class. Implement an `add_friend` method to `Person`, so that in order to add a friend you call this method:

```js
jordan.add_friend(sonny)
```

instead of the example we saw above:

```js
jordan.friends.append(sonny)
```

#### Add a `num_friends` method

We also want to hide the implementation detail that there is a friends attribute containing a list of friends.

To do this, we'll implement a `num_friends` method which returns the number of friends for a person.

For example:

```js
console.log(jordan.num_friends());
// will return the following:
1
```

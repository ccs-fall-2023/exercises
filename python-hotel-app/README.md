# Hotel Management Python App

Imagine that you're running a hotel, and you want to keep track of guests by floor and room number.

## Learning Objectives

After completing this assignment, you should be able to...

* Write simple, well-organized CLI applications in Python
* Handle long-running user input loops
* Run different conditions based on user input

## Details

### Deliverables

* A repo containing a Python script.

### Get Started

Start with the following dictionary:

```python
 hotel = {
  '1': {
    '185': ['George Jefferson', 'Wheezy Jefferson'],
  },
  '2': {
    '237': ['Jack Torrance', 'Wendy Torrance'],
  },
  '3': {
    '333': ['Neo', 'Trinity', 'Morpheus']
  }
}
```

Write a program that does the following:

* Display a menu asking whether to check in or check out.
* Prompt the user for a floor number, then a room number.
  * If checking in, ask for the number of occupants and what their names are.
  * If checking out, remove the occupants from that room.
* After checking in or out, display a list of all the occupants and their rooms.

### Level Up

* Do not allow anyone to check into a room that is _already occupied_!
* Do not allow checking out of a room that _isn't occupied_!

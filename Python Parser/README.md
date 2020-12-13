# Simple Math Parser in Python

This is a simple math parser made in python. 

## Considerations and Assumptions

There are a few considerations:

- It only works with integers
- It alows the following operators: '+', '-', '*', '/'
- It allows parenthesis

Even though it validates the individual characters on the given string, it doesn't check if the user enters multiple operators together (i.e. '++').

It assumes that there's always going to be spaces in between operands and operators. This is used to diferenciate between a negative integer and a '-' operator.

## How to run it

The file `modules.py` must be in the same directory as the `stacked.py` file.
To run it just do `python stacked.py` on the console and type in the expression you want to evaluate
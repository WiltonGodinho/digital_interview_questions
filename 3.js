/*
QUESTION 3

You are given a 2d array (array of arrays)
Each sub-array is an array of integer numbers

If you sum all the values of a given sub-array:
    1. Find the sub-array with the SECOND LARGEST summed value
    2 .Find the sub-array with the SECOND SMALLEST summed value

If you take the largest value from each of the found sub-arrays above and multiply these two values together, what do you get?

NOTE: all sub-arrays will have a unique sum

e.g.

const input = [
    [1, 2, 3],  //sum is 6
    [4, 5, 6],  //sum is 15
    [7, 8, 9],  //sum is 24
    [2, 3, 4],  //sum is 9
    [3, 4, 5]   //sum is 12
]

2nd largest sum is 15 and the largest value from this sub-array is 6
2nd smallest sum is 9 and the largest value from this sub-array is 4

6 * 4 = 24
*/

//DO NOT modify this
const input = require('./3-input')

//Hint, the final multiplication is: 933 * 438 =  408654
/*
QUESTION 4

You are given a String of characters and numbers in a random order

1. Rewrite the String so that all characters are sorted in alphanumerical order
2. Create a new String that contains, in order and comma-separated, the number of each unique character in the original string

e.g. 

const input = 'a8g9jf82j202als92o23ln3f921kj29fj32ojaozoinvnb820nbn2pjkas09asd9j39t'
const sortedInput = '0001222222222233338889999999aaaaabbdfffgijjjjjjjkkllnnnnnoooopssstvz'

Final output should read '3,1,10,4,3,7,5,2,1,3,1,1,7,2,2,5,4,1,3,1,1'

Because: 
'000' = 3
'1' = 1
'2222222222' = 10
'3333' = 4
etc.
*/

//DO NOT modify this
const input = require('./4-input')

//Hint: the final answer should be: '147,295,263,284,244,266,238,288,281,138,48,111,103,100,104,92,80,112,102,99,114,98,104,113,101,84,92,101,116,95,127,100,117,100,93'
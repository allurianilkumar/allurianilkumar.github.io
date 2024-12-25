import React, { useState } from "react";

const mcqs = [
  {
    question:
      "Which of the following is considered the first electronic computer?",
    options: ["A) ENIAC", "B) UNIVAC", "C) IBM PC", "D) Altair 8800"],
    answer: "A) ENIAC",
  },
  {
    question: "What does ALU stand for?",
    options: [
      "A) Arithmetic Logic Unit",
      "B) Array Logic Unit",
      "C) Advanced Logic Unit",
      "D) Analog Logic Unit",
    ],
    answer: "A) Arithmetic Logic Unit",
  },
  {
    question:
      "Which component is responsible for executing instructions in a computer?",
    options: ["A) Input Unit", "B) Control Unit", "C) ALU", "D) Output Unit"],
    answer: "C) ALU",
  },
  {
    question: "The Program Counter (PC) is used to:",
    options: [
      "A) Store data temporarily",
      "B) Hold the address of the next instruction to be executed",
      "C) Perform arithmetic calculations",
      "D) Control input/output devices",
    ],
    answer: "B) Hold the address of the next instruction to be executed",
  },
  {
    question: "Which of the following is NOT a programming language?",
    options: ["A) Python", "B) Java", "C) HTML", "D) C++"],
    answer: "C) HTML",
  },
  {
    question: "In programming, what is an algorithm?",
    options: [
      "A) A type of programming language",
      "B) A sequence of steps to solve a problem",
      "C) A graphical representation of code",
      "D) A hardware component",
    ],
    answer: "B) A sequence of steps to solve a problem",
  },
  {
    question: "What is a flowchart?",
    options: [
      "A) A list of variables",
      "B) A visual representation of a process",
      "C) A type of programming language",
      "D) A debugging tool",
    ],
    answer: "B) A visual representation of a process",
  },
  {
    question: "Pseudo code is best described as:",
    options: [
      "A) A programming language",
      "B) A method of visual programming",
      "C) An informal high-level description of a computer program",
      "D) A binary code representation",
    ],
    answer: "C) An informal high-level description of a computer program",
  },
  {
    question: "What is the primary function of a compiler?",
    options: [
      "A) To execute code directly",
      "B) To translate source code into machine code",
      "C) To create flowcharts",
      "D) To debug programs",
    ],
    answer: "B) To translate source code into machine code",
  },
  {
    question: "Which of the following is a primitive data type in C?",
    options: ["A) String", "B) Array", "C) Integer", "D) Object"],
    answer: "C) Integer",
  },
  {
    question: "In C, what keyword is used to define a constant?",
    options: ["A) define", "B) const", "C) final", "D) static"],
    answer: "B) const",
  },
  {
    question: "Which of the following functions is used for basic output in C?",
    options: ["A) input()", "B) print()", "C) printf()", "D) output()"],
    answer: "C) printf()",
  },
  {
    question: "Type casting in C is used to:",
    options: [
      "A) Convert one data type to another",
      "B) Define a new variable",
      "C) Create an array",
      "D) Perform arithmetic operations",
    ],
    answer: "A) Convert one data type to another",
  },
  {
    question: "What is the result of casting an integer to a float in C?",
    options: [
      "A) Loss of precision",
      "B) No change",
      "C) Conversion to an integer",
      "D) The integer becomes a double",
    ],
    answer: "B) No change",
  },
  {
    question: "Which of the following best describes an algorithm?",
    options: [
      "A) A step-by-step procedure for solving a problem",
      "B) A programming language",
      "C) A type of data structure",
      "D) A graphical representation of data",
    ],
    answer: "A) A step-by-step procedure for solving a problem",
  },
  {
    question: "Which of the following is NOT a characteristic of an algorithm?",
    options: [
      "A) Finiteness",
      "B) Definiteness",
      "C) Infinity",
      "D) Effectiveness",
    ],
    answer: "C) Infinity",
  },
  {
    question: "What is a top-down approach?",
    options: [
      "A) Breaking a problem into smaller sub-problems",
      "B) Solving a problem from the bottom up",
      "C) Using trial and error to find a solution",
      "D) None of the above",
    ],
    answer: "A) Breaking a problem into smaller sub-problems",
  },
  {
    question: "Which of the following describes time complexity?",
    options: [
      "A) The amount of memory an algorithm uses",
      "B) The number of operations an algorithm performs",
      "C) The total runtime of an algorithm",
      "D) The efficiency of an algorithm in terms of code",
    ],
    answer: "B) The number of operations an algorithm performs",
  },
  {
    question:
      "Which of the following control statements is used for conditional execution?",
    options: ["A) for", "B) while", "C) if-else", "D) do-while"],
    answer: "C) if-else",
  },
  {
    question: "What does the 'break' statement do in a loop?",
    options: [
      "A) Exits the loop immediately",
      "B) Skips the current iteration",
      "C) Restarts the loop",
      "D) Continues to the next iteration",
    ],
    answer: "A) Exits the loop immediately",
  },
  {
    question: "Which loop will always execute at least once?",
    options: ["A) for", "B) while", "C) do-while", "D) None of the above"],
    answer: "C) do-while",
  },
  {
    question:
      "Which of the following statements is true about the 'continue' statement?",
    options: [
      "A) It exits the loop",
      "B) It skips the current iteration and moves to the next one",
      "C) It restarts the loop",
      "D) It does nothing",
    ],
    answer: "B) It skips the current iteration and moves to the next one",
  },
  {
    question: "Which approach combines both top-down and bottom-up strategies?",
    options: [
      "A) Hybrid approach",
      "B) Recursive approach",
      "C) Iterative approach",
      "D) Dynamic programming",
    ],
    answer: "A) Hybrid approach",
  },
  {
    question: "What is space complexity?",
    options: [
      "A) The total amount of space an algorithm uses",
      "B) The size of the code",
      "C) The number of variables in an algorithm",
      "D) The speed of execution",
    ],
    answer: "A) The total amount of space an algorithm uses",
  },
  {
    question:
      "Which of the following statements is used to perform conditional execution in C?",
    options: ["A) for", "B) if", "C) switch", "D) while"],
    answer: "B) if",
  },
  {
    question:
      "What will the following code output? if (x > 10) { printf('x is greater than 10'); } else { printf('x is 10 or less'); } (assuming x = 5)",
    options: [
      "A) x is greater than 10",
      "B) x is 10 or less",
      "C) No output",
      "D) Error in code",
    ],
    answer: "B) x is 10 or less",
  },
  {
    question:
      "In C, which of the following constructs can be used to select one of many possible execution paths?",
    options: [
      "A) if-else",
      "B) switch",
      "C) both A and B",
      "D) none of the above",
    ],
    answer: "C) both A and B",
  },
  {
    question: "What does the 'continue' statement do in a loop?",
    options: [
      "A) It exits the loop.",
      "B) It skips the current iteration and proceeds to the next one.",
      "C) It restarts the loop.",
      "D) It terminates the program.",
    ],
    answer: "B) It skips the current iteration and proceeds to the next one.",
  },
  {
    question:
      "Which loop will check its condition at the end of the loop body?",
    options: ["A) for", "B) while", "C) do-while", "D) None of the above"],
    answer: "C) do-while",
  },
  {
    question:
      "What is the result of the following code snippet? for (int i = 0; i < 5; i++) { if (i == 3) break; } printf('%d', i);",
    options: ["A) 0", "B) 3", "C) 4", "D) 5"],
    answer: "B) 3",
  },
  {
    question: "Which of the following statements correctly defines a for loop?",
    options: [
      "A) for (initialization; condition; increment/decrement)",
      "B) while (condition)",
      "C) do { } while (condition)",
      "D) if (condition) { }",
    ],
    answer: "A) for (initialization; condition; increment/decrement)",
  },
  {
    question:
      "What will the following code output if x is 1? switch(x) { case 1: printf('One'); break; case 2: printf('Two'); break; default: printf('Default'); }",
    options: ["A) One", "B) Two", "C) Default", "D) No output"],
    answer: "A) One",
  },
  {
    question:
      "What does the following code snippet do? for (int i = 0; i < 5; i++) { if (i == 2) continue; printf('%d ', i); }",
    options: [
      "A) Prints: 0 1 2 3 4",
      "B) Prints: 0 1 3 4",
      "C) Prints: 2",
      "D) Results in an error",
    ],
    answer: "B) Prints: 0 1 3 4",
  },
  {
    question:
      "Which of the following statements is true about the if-else statement?",
    options: [
      "A) It can have multiple else-if conditions.",
      "B) It can only have two branches.",
      "C) It must have at least one else branch.",
      "D) None of the above.",
    ],
    answer: "A) It can have multiple else-if conditions.",
  },
  // New MCQs based on the provided points
  {
    question:
      "Which of the following statements is true about C programming language?",
    options: [
      "A) C is an independent platform.",
      "B) C is a dependency platform.",
      "C) C is primarily used for web development.",
      "D) C is only for system programming.",
    ],
    answer: "B) C is a dependency platform.",
  },
  {
    question: "What type of programming paradigm does C primarily follow?",
    options: [
      "A) Object-oriented",
      "B) Functional",
      "C) Structure-oriented",
      "D) Logic-based",
    ],
    answer: "C) Structure-oriented.",
  },
  {
    question:
      "Which of the following statements is correct regarding the C programming language?",
    options: [
      "A) C is a low-level language.",
      "B) C is a high-level language.",
      "C) C does not support data structures.",
      "D) C is a platform-independent language.",
    ],
    answer: "B) C is a high-level language.",
  },
  {
    question: "What does it mean that C is case-sensitive?",
    options: [
      "A) It ignores uppercase and lowercase letters.",
      "B) It treats uppercase and lowercase letters as different.",
      "C) It only allows lowercase letters in variable names.",
      "D) It requires all keywords to be written in uppercase.",
    ],
    answer: "B) It treats uppercase and lowercase letters as different.",
  },
  {
    question: "In C, which of the following is true about keywords?",
    options: [
      "A) Keywords can be written in any case.",
      "B) Keywords are not case-sensitive.",
      "C) All keywords must be written in lowercase.",
      "D) Keywords are user-defined.",
    ],
    answer: "C) All keywords must be written in lowercase.",
  },
  {
    question: "Which of the following is NOT a type of operator in C?",
    options: [
      "A) Arithmetic operator",
      "B) Logical operator",
      "C) Relational operator",
      "D) String operator",
    ],
    answer: "D) String operator.",
  },
  {
    question: "Which operator is used to perform addition in C?",
    options: ["A) *", "B) /", "C) +", "D) -"],
    answer: "C) +.",
  },
  {
    question:
      "Which of the following is an example of a logical operator in C?",
    options: ["A) &&", "B) ++", "C) ==", "D) ="],
    answer: "A) &&.",
  },
  {
    question: "What is the purpose of the assignment operator (=) in C?",
    options: [
      "A) To compare two values",
      "B) To assign a value to a variable",
      "C) To perform arithmetic calculations",
      "D) To declare a variable",
    ],
    answer: "B) To assign a value to a variable.",
  },
  {
    question:
      "Which operator would you use to increment a variable's value by one?",
    options: ["A) --", "B) +=", "C) ++", "D) =+"],
    answer: "C) ++.",
  },
  {
    question: "Who is known as the 'father of computers'?",
    options: [
      "A) Charles Babbage",
      "B) Alan Turing",
      "C) John von Neumann",
      "D) Ada Lovelace",
    ],
    answer: "A) Charles Babbage",
  },
  {
    question: "Who is the author of the C programming language?",
    options: [
      "A) Dennis Ritchie",
      "B) Bjarne Stroustrup",
      "C) James Gosling",
      "D) Linus Torvalds",
    ],
    answer: "A) Dennis Ritchie",
  },
  {
    question: "Which of the following statements is true about a compiler?",
    options: [
      "A) It translates source code line by line.",
      "B) It translates the entire source code into machine code before execution.",
      "C) It requires an interpreter to run.",
      "D) It executes the code as it translates.",
    ],
    answer:
      "B) It translates the entire source code into machine code before execution.",
  },
  {
    question: "Which of the following statements is true about an interpreter?",
    options: [
      "A) It translates the entire code before execution.",
      "B) It executes the code line by line.",
      "C) It generates an executable file.",
      "D) It is generally faster than a compiler.",
    ],
    answer: "B) It executes the code line by line.",
  },
  {
    question:
      "Which of the following is an advantage of using a compiler over an interpreter?",
    options: [
      "A) Compilers are easier to use.",
      "B) Compilers produce an executable file which can run without source code.",
      "C) Compilers execute code faster than interpreters.",
      "D) Compilers provide better error messages.",
    ],
    answer:
      "B) Compilers produce an executable file which can run without source code.",
  },
  {
    question: "Which of the following is a disadvantage of using a compiler?",
    options: [
      "A) Compilers are slower to execute code than interpreters.",
      "B) Compilers provide immediate error feedback.",
      "C) Compilers require a separate compilation step before execution.",
      "D) Compilers can only handle high-level programming languages.",
    ],
    answer:
      "C) Compilers require a separate compilation step before execution.",
  },
  {
    question: "What is a common use case for interpreters?",
    options: [
      "A) Developing mobile applications.",
      "B) Writing large software applications.",
      "C) Scripting and automation tasks.",
      "D) Compiling system-level software.",
    ],
    answer: "C) Scripting and automation tasks.",
  },
  {
    question: "In terms of memory usage, which is generally more efficient?",
    options: [
      "A) Compiler",
      "B) Interpreter",
      "C) They use the same amount of memory.",
      "D) It depends on the programming language.",
    ],
    answer: "A) Compiler",
  },
  {
    question: "Which programming language is typically compiled?",
    options: ["A) Python", "B) JavaScript", "C) C", "D) Ruby"],
    answer: "C) C",
  },
  {
    question:
      "Which programming language typically uses an interpreter for execution?",
    options: ["A) C++", "B) Java", "C) Python", "D) C"],
    answer: "C) Python",
  },
  // New MCQs based on provided points
  {
    question: "What does GCC stand for?",
    options: [
      "A) General C Compiler",
      "B) GNU Compiler Collection",
      "C) Global Compiler Code",
      "D) Generalized Code Compiler",
    ],
    answer: "B) GNU Compiler Collection",
  },
  {
    question: "Which of the following is a feature of GCC?",
    options: [
      "A) It only compiles C programs.",
      "B) It supports multiple programming languages.",
      "C) It is only available on Windows.",
      "D) It cannot optimize code.",
    ],
    answer: "B) It supports multiple programming languages.",
  },
  {
    question: "What is Turbo C primarily used for?",
    options: [
      "A) Compiling Java programs",
      "B) Compiling C and C++ programs",
      "C) Developing web applications",
      "D) Writing scripts in Python",
    ],
    answer: "B) Compiling C and C++ programs.",
  },
  {
    question:
      "Which of the following platforms is Turbo C primarily associated with?",
    options: ["A) Linux", "B) Windows", "C) macOS", "D) Android"],
    answer: "B) Windows",
  },
  {
    question: "Which IDE is primarily used for C/C++ development on Windows?",
    options: [
      "A) Eclipse",
      "B) Turbo C++",
      "C) Visual Studio",
      "D) All of the above",
    ],
    answer: "D) All of the above",
  },
  {
    question:
      "Which command is used to compile a C program using GCC in the terminal?",
    options: [
      "A) gcc compile file.c",
      "B) gcc -o output file.c",
      "C) gcc run file.c",
      "D) gcc execute file.c",
    ],
    answer: "B) gcc -o output file.c",
  },
  {
    question:
      "What is the primary disadvantage of using Turbo C in modern development?",
    options: [
      "A) It is too fast.",
      "B) It lacks support for modern C/C++ standards.",
      "C) It is free to use.",
      "D) It is compatible with Linux.",
    ],
    answer: "B) It lacks support for modern C/C++ standards.",
  },
  // New MCQs based on error types
  {
    question:
      "What type of error occurs when there is a syntax mistake in the code?",
    options: [
      "A) Runtime error",
      "B) Logical error",
      "C) Compile-time error",
      "D) System error",
    ],
    answer: "C) Compile-time error",
  },
  {
    question: "Which of the following is an example of a compile-time error?",
    options: [
      "A) Division by zero",
      "B) Using an undeclared variable",
      "C) Infinite loop",
      "D) Incorrect logic",
    ],
    answer: "B) Using an undeclared variable",
  },
  {
    question:
      "What type of error occurs when the program is syntactically correct but fails to execute properly?",
    options: [
      "A) Compile-time error",
      "B) Logical error",
      "C) Runtime error",
      "D) Syntax error",
    ],
    answer: "C) Runtime error",
  },
  {
    question: "Which of the following is NOT a compile-time error?",
    options: [
      "A) Type mismatch",
      "B) Missing semicolon",
      "C) Accessing an array out of bounds",
      "D) Undefined function",
    ],
    answer: "C) Accessing an array out of bounds",
  },
  {
    question: "Which of the following is a common cause of runtime errors?",
    options: [
      "A) Syntax errors",
      "B) Incorrect use of operators",
      "C) Memory allocation failures",
      "D) Misspelled variable names",
    ],
    answer: "C) Memory allocation failures",
  },
  {
    question:
      "What type of error occurs when the logic of the code does not produce the expected output?",
    options: [
      "A) Compile-time error",
      "B) Logical error",
      "C) Runtime error",
      "D) Syntax error",
    ],
    answer: "B) Logical error",
  },
  {
    question:
      "Which of the following errors will prevent the code from compiling?",
    options: [
      "A) Off-by-one error",
      "B) Stack overflow",
      "C) Incorrect data type used",
      "D) Array index out of range",
    ],
    answer: "C) Incorrect data type used",
  },
  {
    question:
      "What is the typical output of a program that has a runtime error?",
    options: [
      "A) The program compiles successfully and runs without issues.",
      "B) The program crashes and provides an error message.",
      "C) The program runs but produces incorrect results.",
      "D) The program compiles but fails to link.",
    ],
    answer: "B) The program crashes and provides an error message.",
  },

  {
    question: "In C, what type of error does the compiler check for?",
    options: [
      "A) Logical errors",
      "B) Runtime errors",
      "C) Syntax errors",
      "D) All types of errors",
    ],
    answer: "C) Syntax errors",
  },
  {
    "question": "What is the highest index for an array with 10 elements in C?",
    "options": [
      "A) 5",
      "B) 9",
      "C) 10",
      "D) 11"
    ],
    "answer": "B) 9"
  },
  {
    "question": "Which function is used to compare two strings in C?",
    "options": [
      "A) strcmp",
      "B) strcat",
      "C) strlen",
      "D) strncmp"
    ],
    "answer": "A) strcmp"
  },
  {
    "question": "An array's elements are always stored in ……………… memory locations?",
    "options": [
      "A) sequential",
      "B) random",
      "C) both A & B",
      "D) None of the above"
    ],
    "answer": "A) sequential"
  },
  {
    "question": "A pointer to a pointer stores …………. of another ………………… variable.",
    "options": [
      "A) index, array",
      "B) address, pointer",
      "C) address, union",
      "D) none"
    ],
    "answer": "B) address, pointer"
  },
  {
    "question": "In C, what is a double pointer (int)?",
    "options": [
      "A) a pointer to an integer",
      "B) A pointer to a pointer",
      "C) A pointer to a double data type",
      "D) none of the above"
    ],
    "answer": "B) A pointer to a pointer"
  },
  {
    "question": "What is the purpose of the malloc() function?",
    "options": [
      "A) Allocate memory on the stack",
      "B) Allocate memory on the heap",
      "C) Allocate memory on the variable",
      "D) Allocate memory on the function"
    ],
    "answer": "B) Allocate memory on the heap"
  },
  {
    "question": "While declaring a pointer variable, which operator do we use?",
    "options": [
      "A) dot",
      "B) Arrow",
      "C) Address",
      "D) indirection"
    ],
    "answer": "D) indirection"
  },
  {
    "question": "The default storage class of a local variable is?",
    "options": [
      "A) Auto",
      "B) Static",
      "C) extern",
      "D) Register"
    ],
    "answer": "A) Auto"
  },
  {
    "question": "In which method is the address of the variable passed by the calling function to the called function?",
    "options": [
      "A) Call-by-value",
      "B) Call-by-reference",
      "C) Both A & B",
      "D) None"
    ],
    "answer": "B) Call-by-reference"
  },
  {
    "question": "The size of a Union is determined by the size of the ………..",
    "options": [
      "A) first member in the union",
      "B) Last member in the union",
      "C) Biggest member in the union",
      "D) sum of the size of all members"
    ],
    "answer": "C) Biggest member in the union"
  },
  {
    "question": "What is the return type of malloc() or calloc()?",
    "options": [
      "A) int *",
      "B) int **",
      "C) void *",
      "D) void **"
    ],
    "answer": "C) void *"
  },
  {
    "question": "The process in which a function calls itself directly or indirectly is called?",
    "options": [
      "A) Recursion",
      "B) type conversion",
      "C) constant",
      "D) storage classes"
    ],
    "answer": "A) Recursion"
  },
  {
    "question": "File is of type ………….",
    "options": [
      "A) int type",
      "B) char type",
      "C) struct type",
      "D) None of the above"
    ],
    "answer": "B) char type"
  },
  {
    "question": "Which function will you choose to join two words?",
    "options": [
      "A) strcpy()",
      "B) strcat()",
      "C) strlen()",
      "D) strncat()"
    ],
    "answer": "B) strcat()"
  },
  {
    "question": "Allocating memory at runtime is known as ……..",
    "options": [
      "A) static memory allocation",
      "B) dynamic memory allocation",
      "C) continuous memory allocation",
      "D) None"
    ],
    "answer": "B) dynamic memory allocation"
  },
  {
    "question": "If an array is declared as arr[] = {1, 3, 5, 7, 9};, then what is the value of arr[3]?",
    "options": [
      "A) 1",
      "B) 9",
      "C) 7",
      "D) 5"
    ],
    "answer": "C) 7"
  },
  {
    "question": "#error is used for?",
    "options": [
      "A) printing error messages",
      "B) printing output",
      "C) Both A & B",
      "D) None"
    ],
    "answer": "A) printing error messages"
  },
  {
    "question": "What can be used to input a string with blank space?",
    "options": [
      "A) inline",
      "B) None",
      "C) getline()",
      "D) putline"
    ],
    "answer": "C) getline()"
  },
  {
    "question": "Which of the following cannot be a structure member?",
    "options": [
      "A) function",
      "B) collection of elements",
      "C) array",
      "D) another structure"
    ],
    "answer": "A) function"
  },
  {
    "question": "Why is calloc() function used for?",
    "options": [
      "A) allocates the specified number of bytes",
      "B) calls the specified block of memory for execution.",
      "C) allocates the specified number of bytes and initializes them to zero",
      "D) increases or decreases the size of the specified block of memory and reallocates it"
    ],
    "answer": "C) allocates the specified number of bytes and initializes them to zero"
  },
  {
    "question": "Array Index start with __ index?",
    "options": [
      "A) 0",
      "B) -0",
      "C) 1",
      "D) -1"
    ],
    "answer": "A) 0"
  },
  {
    "question": "Given the declaration int arr[5] = {10, 20, 30, 40, 50};, what does *(arr + 3) return?",
    "options": [
      "A) 10",
      "B) 30",
      "C) 40",
      "D) 50"
    ],
    "answer": "C) 40"
  },
  {
    "question": "How to print the last element in an array?",
    "options": [
      "A) SIZE+0",
      "B) SIZE+0",
      "C) SIZE+1",
      "D) SIZE-1"
    ],
    "answer": "D) SIZE-1"
  },
  {
    "question": "Which of the following operations is invalid in a two-dimensional array int arr[3][4]?",
    "options": [
      "A) Accessing arr[2][3]",
      "B) Assigning arr[3][3] = 10;",
      "C) Declaring arr with dimensions [3][0]",
      "D) All of the above"
    ],
    "answer": "B) Assigning arr[3][3] = 10;"
  },
  {
    "question": "Why is a null character (\\0) used in strings in C?",
    "options": [
      "A) To indicate the end of the string",
      "B) To store whitespace in the string",
      "C) To determine the length of the string at compile time",
      "D) To reserve memory for additional characters"
    ],
    "answer": "A) To indicate the end of the string"
  },
  {
    "question": "What will the following code print? char str[] = \"Hello\"; printf(\"%s\", str + 2);",
    "options": [
      "A) He",
      "B) llo",
      "C) Hello",
      "D) l"
    ],
    "answer": "B) llo"
  },
  {
    "question": "What does the following code snippet print? int x = 10, *p = &x; printf(\"%d\", *p + x);",
    "options": [
      "A) 10",
      "B) 20",
      "C) 15",
      "D) Compiler error"
    ],
    "answer": "B) 20"
  },
  {
    "question": "Which of the following is invalid for pointer arithmetic?",
    "options": [
      "A) Adding an integer to a pointer",
      "B) Subtracting two pointers",
      "C) Dividing a pointer by an integer",
      "D) Incrementing a pointer"
    ],
    "answer": "C) Dividing a pointer by an integer"
  },
  {
    "question": "In the code below, what does ptr point to after the execution? int arr[] = {1, 2, 3, 4}; int *ptr = arr; ptr += 2;",
    "options": [
      "A) The first element of arr",
      "B) The second element of arr",
      "C) The third element of arr",
      "D) The fourth element of arr"
    ],
    "answer": "C) The third element of arr"
  },
  {
    "question": "What is the size of a pointer variable on a 64-bit system?",
    "options": [
      "A) 4 bytes",
      "B) 8 bytes",
      "C) 16 bytes",
      "D) Depends on the data type being pointed to"
    ],
    "answer": "B) 8 bytes"
  },
  {
    "question": "What is the return type of the following function? int add(int a, int b) { return a + b; }",
    "options": [
      "A) int",
      "B) void",
      "C) float",
      "D) None of the above"
    ],
    "answer": "A) int"
  },
  {
    "question": "What is the output of this code? void func(int *x) { *x = *x + 10; } void main() { int y = 5; func(&y); printf(\"%d\", y); }",
    "options": [
      "A) 5",
      "B) 10",
      "C) 15",
      "D) Compilation error"
    ],
    "answer": "C) 15"
  },
  {
    "question": "What is the correct way to define a structure in C?",
    "options": [
      "A) struct { int a, b; };",
      "B) struct MyStruct { int a, b; };",
      "C) structure MyStruct { int a, b; };",
      "D) struct MyStruct { int a, b; }"
    ],
    "answer": "B) struct MyStruct { int a, b; };"
  },
  {
    "question": "Which operator is used to dereference a pointer?",
    "options": [
      "A) &",
      "B) *",
      "C) ->",
      "D) None of the above"
    ],
    "answer": "B) *"
  },
  {
    "question": "If you declare a union with members of different types, what will be the maximum size of the union?",
    "options": [
      "A) The size of the smallest member",
      "B) The size of the largest member",
      "C) The sum of the sizes of all members",
      "D) The average size of all members"
    ],
    "answer": "B) The size of the largest member"
  },
  {
    "question": "Which of the following is NOT a valid file opening mode in C?",
    "options": [
      "A) \"r\"",
      "B) \"w\"",
      "C) \"rw\"",
      "D) \"a\""
    ],
    "answer": "C) \"rw\""
  },
  {
    "question": "What is the purpose of the fclose function in C?",
    "options": [
      "A) To write data to a file",
      "B) To close an open file and free associated resources",
      "C) To delete the file from the disk",
      "D) None of the above"
    ],
    "answer": "B) To close an open file and free associated resources"
  },
  {
    "question": "Which function writes a single character to a file?",
    "options": [
      "A) fwrite()",
      "B) fputc()",
      "C) fgets()",
      "D) fprintf()"
    ],
    "answer": "B) fputc()"
  },
  {
    "question": "Which of the following represents a correct usage of fprintf in C?",
    "options": [
      "A) fprintf(\"%s\", \"Hello\");",
      "B) fprintf(filePtr, \"Hello World\");",
      "C) fprintf(filePtr, \"%d\", 42);",
      "D) fprintf(\"Hello\");"
    ],
    "answer": "B) fprintf(filePtr, \"Hello World\"); (OR) C) fprintf(filePtr, \"%d\", 42);"
  },
  {
    "question": "Which of the following functions is used to close a file?",
    "options": [
      "A) fread()",
      "B) fclose()",
      "C) fexit()",
      "D) fstop()"
    ],
    "answer": "B) fclose()"
  },
  {
    "question": "In the code below, what does ptr point to after the execution? int arr[] = {1, 2, 3, 4}; int *ptr = arr; ptr += 2;",
    "options": [
      "A) The first element of arr",
      "B) The second element of arr",
      "C) The third element of arr",
      "D) The fourth element of arr"
    ],
    "answer": "C) The third element of arr"
  },
  {
    "question": "Why is a null character (\\0) used in strings in C?",
    "options": [
      "A) To indicate the end of the string",
      "B) To store whitespace in the string",
      "C) To determine the length of the string at compile time",
      "D) To reserve memory for additional characters"
    ],
    "answer": "A) To indicate the end of the string"
  },
  {
    "question": "What does the following code snippet print? int x = 10, *p = &x; printf(\"%d\", *p + x);",
    "options": [
      "A) 10",
      "B) 20",
      "C) 15",
      "D) Compiler error"
    ],
    "answer": "B) 20"
  },
  {
    "question": "What is the output of this code? void func(int *x) { *x = *x + 10; } void main() { int y = 5; func(&y); printf(\"%d\", y); }",
    "options": [
      "A) 5",
      "B) 10",
      "C) 15",
      "D) Compilation error"
    ],
    "answer": "C) 15"
  },
  {
    "question": "Which of the following is invalid for pointer arithmetic?",
    "options": [
      "A) Adding an integer to a pointer",
      "B) Subtracting two pointers",
      "C) Dividing a pointer by an integer",
      "D) Incrementing a pointer"
    ],
    "answer": "C) Dividing a pointer by an integer"
  },
  {
    "question": "Which operator is used to dereference a pointer?",
    "options": [
      "A) &",
      "B) *",
      "C) ->",
      "D) None of the above"
    ],
    "answer": "B) *"
  },
  {
    "question": "What does the following code snippet print? int x = 10, *p = &x; printf(\"%d\", *p + x);",
    "options": [
      "A) 10",
      "B) 20",
      "C) 15",
      "D) Compiler error"
    ],
    "answer": "B) 20"
  },
  {
    "question": "What is the correct way to define a structure in C?",
    "options": [
      "A) struct { int a, b; };",
      "B) struct MyStruct { int a, b; };",
      "C) structure MyStruct { int a, b; };",
      "D) struct MyStruct { int a, b; }"
    ],
    "answer": "B) struct MyStruct { int a, b; };"
  },
  {
    "question": "Given the declaration int arr[5] = {10, 20, 30, 40, 50};, what does *(arr + 3) return?",
    "options": [
      "A) 10",
      "B) 30",
      "C) 40",
      "D) 50"
    ],
    "answer": "C) 40"
  },
  {
    "question": "Which of the following represents a correct usage of fprintf in C?",
    "options": [
      "A) fprintf(\"%s\", \"Hello\");",
      "B) fprintf(filePtr, \"Hello World\");",
      "C) fprintf(filePtr, \"%d\", 42);",
      "D) fprintf(\"Hello\");"
    ],
    "answer": "B) fprintf(filePtr, \"Hello World\"); (OR) C) fprintf(filePtr, \"%d\", 42);"
  },
];

const Mcqs = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [results, setResults] = useState({});

  const handleChange = (index, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [index]: option,
    }));
  };

  const checkAnswer = (index) => {
    const correctAnswer = mcqs[index].answer;
    const selectedAnswer = selectedAnswers[index];
    setResults((prev) => ({
      ...prev,
      [index]: selectedAnswer === correctAnswer,
    }));
  };

  return (
    <div>
      <h1>C Programming MCQs</h1>
      {mcqs.map((mcq, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>
            {index + 1}: {mcq.question}
          </h3>
          {mcq.options.map((option) => (
            <div key={option}>
              <label>
                <input
                  type="radio"
                  name={`${index}`}
                  value={option}
                  checked={selectedAnswers[index] === option}
                  onChange={() => handleChange(index, option)}
                />
                {option}
              </label>
            </div>
          ))}
          <button onClick={() => checkAnswer(index)}>Answer</button>
          {results[index] !== undefined && (
            <div
              style={{
                marginTop: "10px",
                color: results[index] ? "green" : "red",
              }}
            >
              {results[index]
                ? "Correct!"
                : "Incorrect! The correct answer is: " + mcq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Mcqs;

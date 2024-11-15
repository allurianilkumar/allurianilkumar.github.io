import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import Mcqs from "./Mcqs";

function CProgrammingConcepts() {
  return (
    <div className="content">
      <h1>C Programming Concepts</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>
              <p style={{ color: "red" }}>
                UNIT I: Introduction to Programming and Problem Solving
              </p>
              History of Computers, Basic organization of a computer: ALU,
              input-output units, memory, program counter, Introduction to
              Programming Languages, Basics of a Computer ProgramAlgorithms,
              flowcharts (Using Dia Tool), pseudo code. Introduction to
              Compilation and Execution, Primitive Data Types, Variables, and
              Constants, Basic Input and Output, Operations, Type Conversion,
              and Casting.
              <p>
                <b style={{ color: "#8764E0" }}>Problem solving techniques:</b>{" "}
                Algorithmic approach, characteristics of algorithm,
              </p>
              <p>
                <b style={{ color: "#8764E0" }}>Problem solving strategies:</b>{" "}
                Top-down approach, Bottom-up approach, Time and space
                complexities of algorithms.
              </p>
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <strong>Definition:</strong> C is a general-purpose, procedural
            computer programming language supporting structured programming,
            lexical variable scope, and recursion, with a static type system. It
            was originally developed by Dennis Ritchie between 1969 and 1973 at
            Bell Labs.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <b>
              <p style={{ color: "red" }}>UNIT II: Control Structures</p>
              Simple sequential programs Conditional Statements (if, if-else,
              switch), Loops (for, while, dowhile) Break and Continue.
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <p>C programming syntax is very simple and easy to understand.</p>
            <p>
              <strong>Example:</strong>
            </p>
            <pre>{`#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <b>
              <p style={{ color: "red" }}>UNIT III: Arrays and Strings</p>
              Arrays indexing, memory model, programs with array of integers,
              two dimensional arrays, Introduction to Strings.
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Variables are containers for storing data values. In C, variables
              must be declared before they can be used.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
            <pre>{`int myNum = 5;       // Integer (whole number)
float myFloatNum = 5.99;  // Floating point number
char myLetter = 'D';      // Character`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <b>
              <p style={{ color: "red" }}>
                UNIT IV: Pointers & User Defined Data types
              </p>
              Pointers, dereferencing and address operators, pointer and address
              arithmetic, array manipulation using pointers, User-defined data
              types-Structures and Unions.
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <h3>Conditional Statements</h3>
            <p>C supports the usual if-else statement:</p>
            <pre>{`int time = 20;
if (time < 18) {
    printf("Good day.");
} else {
    printf("Good evening.");
}`}</pre>

            <h3>Loops</h3>
            <p>C supports several types of loops:</p>
            <ul>
              <li>
                <strong>while</strong> loop
              </li>
              <li>
                <strong>do...while</strong> loop
              </li>
              <li>
                <strong>for</strong> loop
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <b>
              <p style={{ color: "red" }}>UNIT V: Functions & File Handling</p>
              Introduction to Functions, Function Declaration and Definition,
              Function call Return Types and Arguments, modifying parameters
              inside functions using pointers, arrays as parameters. Scope and
              Lifetime of Variables, Basics of File Handling.
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A function is a block of code which only runs when it is called.
              Functions are used to perform certain actions.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
            <pre>{`

#include <stdio.h>
void myFunction() {
    printf("I just got executed!");
}

int main() {
    myFunction();
    return 0;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h2>C Programming Lab</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p className="">
              <h5>C Lab Assembly code file types?</h5>
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              <p>
                In assembly language programming, different file types are
                commonly used to denote various stages of the development and
                compilation process. Here are the primary types:
              </p>
              <h6>1) .asm</h6>
              <ul>
                <li>
                  <strong>Description:</strong> This is the standard file
                  extension for assembly language source code. It contains the
                  human-readable assembly instructions.
                </li>
                <li>
                  <strong>Usage:</strong> Written by programmers and contains
                  the assembly code.
                </li>
              </ul>
              <h6>2) .s</h6>
              <ul>
                <li>
                  <strong>Description:</strong> Some assemblers (like GNU
                  Assembler) use this extension for assembly files, especially
                  when the code is in a format ready for assembly.
                </li>
                <li>
                  <strong>Usage:</strong> Can be generated from C code by using
                  the -S option in GCC.
                </li>
              </ul>
              <h6>3) .o</h6>
              <ul>
                <li>
                  <strong>Description:</strong> This is an object file that
                  contains machine code produced by the assembler. It is not yet
                  linked into a complete executable.
                </li>
                <li>
                  <strong>Usage:</strong> Generated after assembling the .asm or
                  .s file. It's used in the linking stage.
                </li>
              </ul>
              <h6>4) .exe</h6>
              <ul>
                <li>
                  <strong>Description:</strong> This is a common extension for
                  executable files on Windows.
                </li>
                <li>
                  <strong>Usage:</strong> Contains the final compiled program
                  that can be run directly by the operating system.
                </li>
              </ul>
              <h6>5) .out</h6>
              <ul>
                <li>
                  <strong>Description:</strong> This is often used as a default
                  output name for executables on Unix-like systems.
                </li>
                <li>
                  <strong>Usage:</strong> The output file produced when
                  compiling a program without specifying an output name.
                </li>
              </ul>
              <h6>6) .elf</h6>
              <ul>
                <li>
                  <strong>Description:</strong> The Executable and Linkable
                  Format, used for executable files and shared libraries in
                  Unix-like systems.
                </li>
                <li>
                  <strong>Usage:</strong> Contains all the information needed
                  for the program to run, including headers, sections, and
                  program segments.
                </li>
              </ul>
              <h4>Summary</h4>
              <ul>
                <li>
                  <strong>Source Code:</strong> .asm, .s
                </li>
                <li>
                  <strong>Object Files:</strong> .o
                </li>
                <li>
                  <strong>Executable Files:</strong> .exe, .out, .elf
                </li>
              </ul>
              <h4>A) Compiling and Running</h4>
              <ol>
                <li>
                  <strong>Create the C file:</strong> Save the above code in a
                  file named <code>print_name.c</code>.
                </li>
                <li>
                  <strong>Compile the C code:</strong> Open a terminal and
                  navigate to the directory where you saved the file. Then run:
                  <pre>
                    <code>gcc print_name.c -o print_name</code>
                  </pre>
                </li>
                <li>
                  <strong>Run the executable:</strong> After compilation, run
                  the program with:
                  <pre>
                    <code>./print_name</code>
                  </pre>
                  You should see the output:
                  <pre>
                    <code>ANIL</code>
                  </pre>
                </li>
              </ol>
              <h4>B) Steps to Convert .c to .asm</h4>
              <ol>
                <li>
                  <strong>Create your C file:</strong> Save the following code
                  in a file named <code>print_name.c</code>:
                  <pre>
                    <code>
                      {" "}
                      {`
#include <stdio.h>
int main() {
    printf("ANIL\\n");
    return 0;
}
    `}
                    </code>
                  </pre>
                </li>
                <li>
                  <strong>Open a terminal:</strong> Navigate to the directory
                  where your <code>print_name.c</code> file is located.
                </li>
                <li>
                  <strong>Compile to assembly:</strong> Use the following
                  command:
                  <pre>
                    <code>gcc -S print_name.c</code>
                  </pre>
                </li>
                <li>
                  <strong>Check the output:</strong> This command generates an
                  assembly file named <code>print_name.s</code>. You can view
                  the contents of this file using:
                  <pre>
                    <code>cat print_name.s</code>
                  </pre>
                  <strong>Output:</strong>
                  The <code>print_name.s</code> file will contain the assembly
                  code corresponding to your C program. It will include sections
                  for the .text segment (code), and possibly data segments for
                  the strings used in the printf function.
                </li>
              </ol>
              <h4>C) Example Assembly Code (print_name.asm)</h4>
              <pre>
                <code>{`.section .data
msg:    .asciz "ANIL\\n"  # The string to be printed

.section .text
.globl _start

_start:
    # Write the string to stdout
    mov rax, 1          # syscall: write
    mov rdi, 1          # file descriptor: stdout
    mov rsi, msg        # pointer to the string
    mov rdx, 5          # length of the string
    syscall             # invoke syscall

    # Exit the program
    mov rax, 60         # syscall: exit
    xor rdi, rdi        # exit status 0
    syscall             # invoke syscall
`}</code>
              </pre>
              <h4>Explanation</h4>
              <ul>
                <li>
                  <strong>.section .data:</strong> This section is for
                  initialized data. We define a string <code>msg</code> that
                  contains "ANIL\n".
                </li>
                <li>
                  <strong>.section .text:</strong> This section contains the
                  code. The <code>_start</code> label marks the entry point of
                  the program.
                </li>
                <li>
                  <strong>syscall:</strong> This is used to make system calls.
                  The write syscall (1) outputs to stdout (file descriptor 1),
                  and the exit syscall (60) terminates the program.
                </li>
              </ul>
              <h4>How to Assemble and Run</h4>
              <ol>
                <li>
                  <strong>Save the code:</strong> Save the code in a file named{" "}
                  <code>print_name.asm</code>.
                </li>
                <li>
                  <strong>Assemble the code:</strong> Use nasm (the Netwide
                  Assembler):
                  <pre>
                    <code>nasm -f elf64 print_name.asm</code>
                  </pre>
                </li>
                <li>
                  <strong>Link the object file:</strong> Create an executable:
                  <pre>
                    <code>ld -o print_name print_name.o</code>
                  </pre>
                </li>
                <li>
                  <strong>Run the executable:</strong>
                  <pre>
                    <code>./print_name</code>
                  </pre>
                  You should see the output:
                  <pre>
                    <code>ANIL</code>
                  </pre>
                </li>
              </ol>
              Steps to Generate an Assembly File from a C File 1. Create a C
              file: Save the following C code in a file named sample.c:
              <pre>
                {`

#include <stdio.h>
int main() {
  printf("ANIL\\n");
  return 0;
}

`}
                <b>Program Link:</b>
                <a target="_blank" href="https://onlinegdb.com/ukcRJRcYV">
                  click
                </a>
              </pre>
              <h4>Steps to Generate Assembly Code from C</h4>
              <ol>
                <li>
                  <strong>Open a terminal:</strong> Navigate to the directory
                  where you saved <code>sample.c</code>.
                </li>
                <li>
                  <strong>Run GCC with the -S option:</strong> Use the following
                  command to generate an assembly file:
                  <pre>
                    <code>gcc -S sample.c</code>
                  </pre>
                </li>
                <li>
                  <strong>Check the output:</strong> After running the command,
                  you will see a new file named <code>sample.s</code> in the
                  same directory. You can view its contents with:
                  <pre>
                    <code>cat sample.s</code>
                  </pre>
                  <strong>Output:</strong> The <code>sample.s</code> file will
                  contain the assembly code corresponding to your C program. It
                  will include sections for the .text segment (code) and
                  possibly data segments for the strings used in the printf
                  function.
                </li>
              </ol>
              <h4>Summary</h4>
              <ul>
                <li>
                  <strong>Command:</strong> <code>gcc -S sample.c</code>{" "}
                  generates <code>sample.s</code>.
                </li>
                <li>
                  <strong>File Types:</strong>
                  <ul>
                    <li>
                      <code>.c</code>: C source file
                    </li>
                    <li>
                      <code>.s</code>: Assembly source file
                    </li>
                  </ul>
                </li>
              </ul>
              <h4>Additional Tips</h4>
              <ul>
                <li>
                  <strong>To compile with debugging information:</strong> Add
                  the <code>-g</code> flag:
                  <pre>
                    <code>gcc -g -o sample sample.c</code>
                  </pre>
                </li>
                <li>
                  <strong>To see more compiler warnings:</strong> You can use
                  the <code>-Wall</code> option:
                  <pre>
                    <code>gcc -Wall -o sample sample.c</code>
                  </pre>
                </li>
              </ul>
              <hr />
              <ul>
                <li>Each and every program start from main() function.</li>
                <li>A function should return a value</li>
                <li>
                  <pre>
                    {`
                    {
                    
                    }
                    `}
                  </pre>{" "}
                  are used for scope of the main() function or Body of the
                  function.
                </li>
                <li>
                  main() has two arguments like argument count & argument vector
                </li>
                <li>int is return type for main() function </li>
                <li>argc, argv are arguments.</li>
              </ul>
            </p>
            <p>
              <strong>Examples:</strong>
            </p>
            <p>
              1) main function with return type & Command-line Arguments
              <pre>
                {`  
              include<stdio.h>
              int main(int argc, char *argv[]){
                int i;
                printf("argc: %d\\n",argc);
                printf("argv[0]: %s\\n",argv[0]);
                if(argc==1){
                  printf( "No arguments were passed.\\n" );
                }else{
                  printf( "Arguments:\\n" );
                  for ( i = 1; i < argc; ++i ) {
                    printf( "  %d. %s\\n", i, argv[i] );
                  }
                }
                return 0;
              }
            `}
              </pre>
              <b>Program Link:</b>
              <a target="_blank" href="https://onlinegdb.com/DTryJNn8q">
                click
              </a>
              <p>
                <h6>Compile:</h6>
              </p>
              $gcc argument.c <br />
              <br />
              <h6>Run-1:</h6>
              <br />
              $./a.out first
              <br />
              argc: 2<br />
              argv[0]: ./a.out
              <br />
              <br />
              <br />
              <h6>Run-2:-</h6>
              <br />
              ./a.out first second third fourth fifth sixth seventh eighth ninth
              tenth eleventh twelfth
              <br />
              argc: 13
              <br />
              argv[0]: ./a.out
              <br />
              Arguments:
              <br />
              1. first
              <br />
              2. second
              <br />
              3. third
              <br />
              4. fourth
              <br />
              5. fifth
              <br />
              6. sixth
              <br />
              7. seventh
              <br />
              8. eighth
              <br />
              9. ninth
              <br />
              10. tenth
              <br />
              11. eleventh
              <br />
              12. twelfth
              <br />
              <br />
              2) main() with return type & no Command-line Arguments
              <pre>{`
              #include <stdio.h>
              int main() {
                printf("Hello World!");
                return 0;
              }
              `}</pre>
              <b>Program Link:</b>
              <a target="_blank" href="https://onlinegdb.com/-FYAwz-m6R">
                click
              </a>
              3) main() function has no return type & no Command-line Arguments
              <pre>
                {`
              #include <stdio.h>
              void main() {
                printf("Hello World!");
              }             
              `}
              </pre>
              <a target="_blank" href="https://onlinegdb.com/l4tQ4m7ML">
                Hello World Program
              </a>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <b>
              <h1>Unit I - Week 1</h1>
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <h2>Objective</h2>
            <p>
              To get familiar with the programming environment on the computer
              and write your first program.
            </p>

            <h2>Suggested Experiments/Activities</h2>

            <h3>Tutorial 1: Problem-Solving Using Computers</h3>
            <ol>
              <li>
                <strong>Understanding Problem-Solving:</strong>
                <ul>
                  <li>
                    Discuss the process of problem-solving: Define the problem,
                    plan a solution, write the program, and test it.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Algorithm Development:</strong>
                <ul>
                  <li>
                    Learn to develop algorithms for simple problems (e.g.,
                    finding the maximum of three numbers).
                  </li>
                </ul>
              </li>
            </ol>

            <h3 style={{ color: "red" }}>
              Lab 1: Familiarization with Programming Environment
            </h3>
            <ol>
              <li>
                <strong style={{ color: "red" }}>
                  Basic Linux Environment and Editors
                </strong>
                <ol>
                  <li>
                    <strong>Using the Terminal:</strong>
                    <ul>
                      <li>
                        <code>ls</code>: List files in the current directory.
                      </li>
                      <li>
                        <code>cd</code>: Change directory.
                      </li>
                      <li>
                        <code>mkdir</code>: Create a new directory.
                      </li>
                      <li>
                        <code>rm</code>: Remove files or directories.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Text Editors:</strong>
                    <ul>
                      <li>
                        <strong>Vi:</strong>
                        <ul>
                          <li>
                            Open a file: <code>vi filename.c</code>
                          </li>
                          <li>
                            Switch to insert mode: Press <code>i</code>
                          </li>
                          <li>
                            Save and exit: Press <code>Esc</code>, then type{" "}
                            <code>:wq</code>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Vim:</strong>
                        <ul>
                          <li>Similar to Vi, but offers more features.</li>
                          <li>
                            Use <code>vim filename.c</code> to open.
                          </li>
                          <li>Learn basic navigation and commands.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Emacs:</strong>
                        <ul>
                          <li>
                            Open a file: <code>emacs filename.c</code>
                          </li>
                          <li>
                            Use <code>Ctrl + x, Ctrl + s</code> to save and{" "}
                            <code>Ctrl + x, Ctrl + c</code> to exit.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                <strong style={{ color: "red" }}>
                  Exposure to Turbo C and GCC
                </strong>
                <ol>
                  <li>
                    <strong>Turbo C:</strong>
                    <ul>
                      <li>
                        Usually used in educational settings for learning C.
                      </li>
                      <li>
                        Learn to navigate the IDE and write simple programs.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>GCC (GNU Compiler Collection):</strong>
                    <ul>
                      <li>Open the terminal.</li>
                      <li>
                        To compile a C program:{" "}
                        <code>gcc -o program_name filename.c</code>
                      </li>
                      <li>
                        Run the program: <code>./program_name</code>
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                <strong style={{ color: "red" }}>
                  Writing Simple Programs Using printf() and scanf()
                </strong>
                <ol>
                  <li>
                    <strong>Simple Program Example:</strong> Create a C file
                    named <code>hello.c</code> with the following content:
                    <pre>{`
#include <stdio.h>

void main() {
  char name[50];
  printf("Enter your name: ");
  scanf("%s", name);
  printf("Hello, %s!\\n", name);
}
                `}</pre>
                    <b>Program Link:</b>
                    <a target="_blank" href="https://onlinegdb.com/I9iSvyhOv">
                      click
                    </a>
                  </li>
                  <li>
                    <strong>Steps to Compile and Run:</strong>
                    <ul>
                      <li>
                        Open a terminal and navigate to the directory containing{" "}
                        <code>hello.c</code>.
                      </li>
                      <li>
                        Compile the program: <code>gcc -o hello hello.c</code>
                      </li>
                      <li>
                        Run the program: <code>./hello</code>
                      </li>
                      <li>
                        Enter your name when prompted and observe the output.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <b>
              <h1>Unit I - Week 2</h1>
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <h2>Objective</h2>
            <p>
              Getting familiar with how to formally describe a solution to a
              problem in a series of finite steps using both textual notation
              and graphic notation.
            </p>

            <h2>Suggested Experiments / Activities:</h2>
            <h3>Tutorial 2: Problem-solving using Algorithms and Flowcharts</h3>
            <h3>Lab 1: Converting Algorithms/Flowcharts into C Source Code</h3>
            <p>
              Developing the algorithms/flowcharts for the following sample
              programs:
            </p>

            <ol>
              <li>Sum and average of 3 numbers</li>
              <li>Conversion of Fahrenheit to Celsius and vice versa</li>
              <li>Simple interest calculation</li>
            </ol>
            <hr />
            <center>
              <h5>Answers</h5>
            </center>
            <hr />
            <h2>Objective</h2>
            <p>
              To get familiar with how to formally describe a solution to a
              problem in a series of finite steps using both textual and graphic
              notation.
            </p>

            <h2>Suggested Experiments/Activities</h2>

            <h3>Tutorial 2: Problem-Solving Using Algorithms and Flowcharts</h3>
            <ol>
              <li>
                <strong>Understanding Algorithms:</strong>
                <ul>
                  <li>
                    An algorithm is a step-by-step procedure to solve a problem.
                    It should be clear, unambiguous, and finite.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Understanding Flowcharts:</strong>
                <ul>
                  <li>
                    Flowcharts are graphical representations of algorithms. They
                    use various symbols to denote different types of operations
                    (e.g., processes, decisions).
                  </li>
                </ul>
              </li>
            </ol>

            <h3>Lab 1: Converting Algorithms/Flowcharts into C Source Code</h3>

            <h4>Sample Programs</h4>

            <h5 style={{ color: "red" }}>i) Sum and Average of 3 Numbers</h5>
            <strong>Algorithm:</strong>
            <ol>
              <li>Start</li>
              <li>Input three numbers: num1, num2, num3</li>
              <li>Calculate sum = num1 + num2 + num3</li>
              <li>Calculate average = sum / 3</li>
              <li>Output sum and average</li>
              <li>End</li>
            </ol>
            <strong>Flowchart:</strong>
            <p>
              Start -> Input Numbers -> Calculate Sum -> Calculate Average ->
              Output -> End
            </p>
            <strong>C Code:</strong>
            <pre>{`
#include <stdio.h>
void main() {
  float num1, num2, num3, sum, average;

  printf("Enter three numbers: ");
  scanf("%f%f%f", &num1, &num2, &num3);

  sum = num1 + num2 + num3;
  average = sum / 3;

  printf("Sum: %.2f\\n", sum);
  printf("Average: %.2f\\n", average);
}

`}</pre>
            <b>Program Link:</b>
            <a target="_blank" href="https://onlinegdb.com/YVP9-L_yL">
              click
            </a>
            <h5 style={{ color: "red" }}>
              ii) Conversion of Fahrenheit to Celsius and Vice Versa
            </h5>
            <strong>Algorithm:</strong>
            <ol>
              <li>Start</li>
              <li>
                Input temperature and conversion choice (F to C or C to F)
              </li>
              <li>If choice is F to C:</li>
              <ul>
                <li>Calculate C = (F - 32) * 5/9</li>
              </ul>
              <li>Else if choice is C to F:</li>
              <ul>
                <li>Calculate F = (C * 9/5) + 32</li>
              </ul>
              <li>Output the converted temperature</li>
              <li>End</li>
            </ol>
            <strong>Flowchart:</strong>
            <p>
              Start -> Input Temperature and Choice -> Decision (F to C or C to
              F) -> Calculate -> Output -> End
            </p>
            <strong>C Code:</strong>
            <pre>{`
#include <stdio.h>
void main() {
  float temperature, converted;
  char choice;

  printf("Enter temperature (C/F): ");
  scanf("%f%c", &temperature, &choice);

  if (choice == 'F' || choice == 'f') {
    converted = (temperature - 32) * 5 / 9;
    printf("Temperature in Celsius: %.2f\\n", converted);
  } else if (choice == 'C' || choice == 'c') {
    converted = (temperature * 9 / 5) + 32;
    printf("Temperature in Fahrenheit: %.2f\\n", converted);
  } else {
    printf("Invalid choice!\\n");
  }
}

`}</pre>
            <b>Program Link:</b>
            <a target="_blank" href="https://onlinegdb.com/kco_oplZm">
              click
            </a>
            <h5 style={{ color: "red" }}>iii) Simple Interest Calculation</h5>
            <strong>Algorithm:</strong>
            <ol>
              <li>Start</li>
              <li>Input principal amount, rate of interest, and time</li>
              <li>Calculate SI = (Principal * Rate * Time) / 100</li>
              <li>Output SI</li>
              <li>End</li>
            </ol>
            <strong>Flowchart:</strong>
            <p>
              Start -> Input Principal, Rate, Time -> Calculate SI -> Output SI
              -> End
            </p>
            <strong>C Code:</strong>
            <pre>{`
#include <stdio.h>
void main() {
  float principal, rate, time, simple_interest;

  printf("Enter principal, rate, and time: ");
  scanf("%f%f%f", &principal, &rate, &time);

  simple_interest = (principal * rate * time) / 100;

  printf("Simple Interest: %.2f\\n", simple_interest);
}

`}</pre>
            <b>Program Link:</b>
            <a target="_blank" href="https://onlinegdb.com/2mWjlk8mv">
              click
            </a>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h1>Unit-I - Week 3</h1>
          </Accordion.Header>
          <Accordion.Body>
            <h2>Objective</h2>
            <p>
              Learn how to define variables with the desired data type,
              initialize them with appropriate values, and understand how
              arithmetic operators can be used with variables and constants.
            </p>

            <h2>Suggested Experiments / Activities:</h2>
            <h3>
              <u>Tutorial 3:</u> ariable Types and Type Conversions
            </h3>
            <h3>
              <u>Lab 3:</u>Simple Computational Problems Using Arithmetic
              Expressions
            </h3>

            <p>
              Developing algorithms and flowcharts for the following problems:
            </p>

            <ol>
              <li>Finding the square root of a given number</li>
              <li>Finding compound interest</li>
              <li>Area of a triangle using Heron’s formula</li>
              <li>Distance travelled by an object</li>
            </ol>
            <hr />
            <center>
              <h5>Answers</h5>
            </center>
            <hr />
            <h1>Week 3</h1>
            <h2>Objective</h2>
            <p>
              Learn how to define variables with the desired data type,
              initialize them with appropriate values, and use arithmetic
              operators with variables and constants.
            </p>

            <h2>Suggested Experiments/Activities</h2>

            <h3>Tutorial 3: Variable Types and Type Conversions</h3>
            <ol>
              <li>
                <strong>Data Types in C:</strong>
                <ul>
                  <li>
                    <code>int</code>: Integer type (e.g.,{" "}
                    <code>int a = 5;</code>)
                  </li>
                  <li>
                    <code>float</code>: Single precision floating point (e.g.,{" "}
                    <code>float b = 5.5;</code>)
                  </li>
                  <li>
                    <code>double</code>: Double precision floating point (e.g.,{" "}
                    <code>double c = 10.1234;</code>)
                  </li>
                  <li>
                    <code>char</code>: Character type (e.g.,{" "}
                    <code>char d = 'A';</code>)
                  </li>
                </ul>
              </li>
              <li>
                <strong>Type Conversions:</strong>
                <ul>
                  <li>
                    Implicit conversion (automatic by C) and explicit conversion
                    (using casting).
                  </li>
                  <li>
                    Example of implicit conversion:
                    <pre>
                      <code>
                        int a = 5; float b = a; // a is automatically converted
                        to float
                      </code>
                    </pre>
                  </li>
                  <li>
                    Example of explicit conversion:
                    <pre>
                      <code>
                        float a = 5.5; int b = (int)a; // a is explicitly
                        converted to int
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
            </ol>

            <h3>
              Lab 3: Simple Computational Problems Using Arithmetic Expressions
            </h3>

            <h4 style={{ color: "red" }}>
              i) Finding the Square Root of a Given Number
            </h4>
            <pre>
              <code>
                {`
#include <stdio.h>
#include <math.h> // Include math.h for sqrt function
void main() {
    double number, square_root;

    printf("Enter a number: ");
    scanf("%lf", &number);

    square_root = sqrt(number); // Calculate square root
    printf("Square root of %.2f is %.2f\\n", number, square_root);
}
`}
              </code>
            </pre>
            <b>Program Link:</b>
            <a target="_blank" href="https://onlinegdb.com/WtGpSIaA9">
              click
            </a>
            <h4 style={{ color: "red" }}>ii) Finding Compound Interest</h4>
            <pre>
              <code>
                {`
#include <stdio.h>
#include <math.h>
void main() {
    double principal, rate, time, compound_interest;

    printf("Enter principal amount, rate of interest, and time (in years): ");
    scanf("%lf %lf %lf", &principal, &rate, &time);

    compound_interest = principal * pow((1 + rate / 100), time) - principal; // CI formula
    printf("Compound Interest: %.2f\\n", compound_interest);
}
`}
              </code>
            </pre>
            <b>Program Link:</b>
            <a target="_blank" href="https://onlinegdb.com/7e9_k61L4">
              click
            </a>
            <h4 style={{ color: "red" }}>
              iii) Area of a Triangle Using Heron's Formula
            </h4>
            <pre>
              <code>
                {`
#include <stdio.h>
#include <math.h>

void main() {
    double a, b, c, s, area;

    printf("Enter lengths of the three sides of the triangle: ");
    scanf("%lf %lf %lf", &a, &b, &c);

    s = (a + b + c) / 2; // Semi-perimeter
    area = sqrt(s * (s - a) * (s - b) * (s - c)); // Heron's formula

    printf("Area of the triangle: %.2f\\n", area);

}
`}
              </code>
            </pre>
            <b>Program Link:</b>
            <a target="_blank" href="https://onlinegdb.com/3KKA09sS7">
              click
            </a>
            <h4 style={{ color: "red" }}>
              iv) Distance Travelled by an Object
            </h4>
            <pre>
              <code>{`
#include <stdio.h>

void main() {
    double speed, time, distance;

    printf("Enter speed (in km/h) and time (in hours): ");
    scanf("%lf %lf", &speed, &time);

    distance = speed * time; // Distance = Speed × Time
    printf("Distance travelled: %.2f km\\n", distance);

}`}</code>
            </pre>
            <b>Program Link:</b>
            <a target="_blank" href="https://onlinegdb.com/12WQguZm3">
              click
            </a>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h1>UNIT II - Week 4</h1>
          </Accordion.Header>
          <Accordion.Body>
            <h3>Objective</h3>
            <p>
              Explore the full scope of expressions, type compatibility of
              variables and constants, operators used in expressions, and how
              operator precedence and associativity work.
            </p>

            <h3>Suggested Experiments/Activities</h3>

            <h4>Tutorial 4: Operators, Precedence, and Associativity</h4>
            <ol>
              <li>
                <strong>Operators in C:</strong>
                <ul>
                  <li>
                    Arithmetic Operators: <code>+</code>, <code>-</code>,{" "}
                    <code>*</code>, <code>/</code>, <code>%</code>
                  </li>
                  <li>
                    Relational Operators: <code>==</code>, <code>!=</code>,{" "}
                    <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>,{" "}
                    <code>&gt;=</code>
                  </li>
                  <li>
                    Logical Operators: <code>&&</code>, <code>||</code>,{" "}
                    <code>!</code>
                  </li>
                  <li>
                    Bitwise Operators: <code>&amp;</code>, <code>|</code>,{" "}
                    <code>^</code>, <code>~</code>, <code>&lt;&lt;</code>,{" "}
                    <code>&gt;&gt;</code>
                  </li>
                  <li>
                    Assignment Operators: <code>=</code>, <code>+=</code>,{" "}
                    <code>-=</code>, <code>*=</code>, <code>/=</code>,{" "}
                    <code>%=</code>
                  </li>
                  <li>
                    Increment/Decrement Operators: <code>++</code>,{" "}
                    <code>--</code>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Operator Precedence:</strong>
                <p>
                  Operators have different precedence levels that determine the
                  order of operations in expressions. For example,{" "}
                  <code>*</code> and <code>/</code> have higher precedence than{" "}
                  <code>+</code> and <code>-</code>.
                </p>
              </li>
              <li>
                <strong>Associativity:</strong>
                <p>
                  Determines the order in which operators of the same precedence
                  are evaluated. Most arithmetic operators associate
                  left-to-right, while assignment operators associate
                  right-to-left.
                </p>
              </li>
            </ol>

            <h4>
              Lab 4: Simple Computational Problems Using Operator Precedence and
              Associativity
            </h4>

            <h5 style={{ color: "red" }}>
              i) Evaluate the Following Expressions
            </h5>
            <p>
              To evaluate the expressions programmatically, create a C file
              named <code>expressions.c</code>:
            </p>
            <pre>
              <code>
                {`      
#include <stdio.h>
void main() {
    int A = 5, B = 10, C = 2, D = 3, E = 4, F = 6, G = 1;
    int result_a,result_b,result_c;
    int i = 2, J;

    // Expression a
    result_a = A + B * C + (D * E) + F * G;
    printf("Result of (a) A + B * C + (D * E) + F * G: %d\\n", result_a);

    // Expression b
    result_b = A / B * C - B + A * D / 3;
    printf("Result of (b) A / B * C - B + A * D / 3: %d\\n", result_b);

    // Expression c
    result_c = A++ + B-- - A;
    printf("Result of (c) A+++B---A: %d\\n", result_c); // Note: A and B will change after this

    // Expression d
    J = (i++) + (++i);
    printf("Result of (d) J = (i++) + (++i): %d\\n", J);
}
`}
              </code>
            </pre>
            <b>Program Link:</b>
            <a target="_blank" href="https://onlinegdb.com/FT1at-bAS">
              click
            </a>
            <h5 style={{ color: "red" }}>
              ii) Find the Maximum of Three Numbers Using the Conditional
              Operator
            </h5>
            <pre>
              <code>
                {`
#include <stdio.h>
void main() {
    int a, b, c, max;

    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    max = (a > b && a > c) ? a : (b > c ? b : c);

    printf("Maximum of the three numbers: %d\\n", max);
}
`}
              </code>
            </pre>
            <b>Program Link:</b>
            <a target="_blank" href="https://onlinegdb.com/HAtSoVYYL">
              click
            </a>
            <h5 style={{ color: "red" }}>
              iii) Take Marks of 5 Subjects in Integers, and Find the Total and
              Average in Float
            </h5>
            <pre>
              <code>
                {`
#include <stdio.h>

void main() {
    int marks[5]; // int for 5 subject marks
    float total=0, average; // float values for total & average
    int i; // i for loop 

    printf("Enter marks for 5 subjects:\\n");

    // Taking input for marks
    for (i = 0; i < 5; i++) {
        printf("Subject %d: ", i + 1);
        scanf("%d", &marks[i]);  // Reading marks
        total += marks[i];       // Adding marks to total
    }

    // Calculating average
    average = total / i;

    // Displaying the results
    printf("%d Subjects Total Marks: %.2f\\n",i,total);
    printf("%d Subjects Average Marks: %.2f\\n", i,average);
}

`}
              </code>
            </pre>
            <b>Program Link:</b>
            <a target="_blank" href="https://onlinegdb.com/G1rzsjeBx">
              click
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h1>Unit-II - Week 5</h1>
          </Accordion.Header>
          <Accordion.Body>
            <h2>Objective</h2>
            <p>
              Explore the full scope of different variants of “if construct”
              namely if-else, null-else, if-else if*-else, switch, and nested-if
              including in what scenario each one of them can be used and how to
              use them. Explore all relational and logical operators while
              writing conditionals for “if construct”.
            </p>

            <h2>Suggested Experiments/Activities</h2>
            <h3>Tutorial 5: Branching and logical expressions</h3>
            <h3>Lab 5: Problems involving if-then-else structures</h3>

            <h3 style={{ color: "red" }}>
              i) Find the Max and Min of Four Numbers Using If-Else
            </h3>
            <p>
              Source Code:{" "}
              <a href="https://onlinegdb.com/1zCGZdzVh" target="_blank">
                min_max.c
              </a>
            </p>
            <pre>
              <code>
                {` 
#include <stdio.h>

void main() {
    int a, b, c, d; // Four numbers
    int max, min;   // Variables to store maximum and minimum

    // Input four numbers
    printf("Enter four numbers:\\n");
    scanf("%d %d %d %d", &a, &b, &c, &d);

    // Finding the maximum
    if (a > b && a > c && a > d) {
        max = a;
    } else if (b > c && b > d) {
        max = b;
    } else if (c > d) {
        max = c;
    } else {
        max = d;
    }

    // Finding the minimum
    if (a < b && a < c && a < d) {
        min = a;
    } else if (b < c && b < d) {
        min = b;
    } else if (c < d) {
        min = c;
    } else {
        min = d;
    }

    // Display the results
    printf("Maximum: %d\\n", max);
    printf("Minimum: %d\\n", min);
}

`}
              </code>
            </pre>

            <h3 style={{ color: "red" }}>ii) Generate Electricity Bill</h3>
            <p>
              Source Code:{" "}
              <a href="https://onlinegdb.com/8jNsLLfyV" target="_blank">
                generate_electricity_bill.c
              </a>
            </p>
            <pre>
              <code>
                {` 
// C Program to Generate an Electricity Bill

/*
 Input: The user inputs the number of units consumed.
 Tariff System:
    -> 0-100 units: ₹1.5 per unit.
    -> 101-300 units: ₹2.0 per unit for units beyond 100.
    -> Above 300 units: ₹3.0 per unit for units beyond 300.
    -> Fixed surcharge of ₹50 is added to the bill.
*/
#include <stdio.h>

int main() {
    int units;
    float billAmount;

    // Input the number of units consumed
    printf("Enter the number of units consumed: ");
    scanf("%d", &units);

    // Calculate the bill based on the tariff
    if (units <= 100) {
        billAmount = units * 1.5; // First 100 units at 1.5 per unit
    } else if (units <= 300) {
        billAmount = (100 * 1.5) + (units - 100) * 2.0; // Next 200 units at 2.0 per unit
    } else {
        billAmount = (100 * 1.5) + (200 * 2.0) + (units - 300) * 3.0; // Beyond 300 units at 3.0 per unit
    }

    // Add a fixed surcharge of 50
    billAmount += 50;

    // Display the total bill
    printf("Electricity Bill: ₹%.2f\\n", billAmount);

    return 0;
}

`}
              </code>
            </pre>
            <p>Input & Output:</p>
            <pre>
              <code>
                {` 
Enter the number of units consumed: 80
Electricity Bill: ₹170.00
`}
              </code>
            </pre>

            <h3 style={{ color: "red" }}>
              iii) Find the Roots of the Quadratic Equation
            </h3>
            <p>
              Source Code:{" "}
              <a href="https://onlinegdb.com/TbmpdMD_g" target="_blank">
                roots_of_the_quadratic.c
              </a>
            </p>
            <pre>
              <code>
                {` 
#include <stdio.h>
#include <math.h> // Required for sqrt() function

int main() {
    float a, b, c, discriminant, root1, root2, realPart, imagPart;

    // Input coefficients of the quadratic equation
    printf("Enter coefficients a, b, and c: ");
    scanf("%f %f %f", &a, &b, &c);

    // Calculate the discriminant
    discriminant = b * b - 4 * a * c;

    if (a == 0) {
        printf("The value of 'a' must not be zero. Not a quadratic equation.\\n");
    } else if (discriminant > 0) {
        // Real and distinct roots
        root1 = (-b + sqrt(discriminant)) / (2 * a);
        root2 = (-b - sqrt(discriminant)) / (2 * a);
        printf("Roots are real and distinct:\\n");
        printf("Root 1 = %.2f\\n", root1);
        printf("Root 2 = %.2f\\n", root2);
    } else if (discriminant == 0) {
        // Real and equal roots
        root1 = root2 = -b / (2 * a);
        printf("Roots are real and equal:\\n");
        printf("Root 1 = Root 2 = %.2f\\n", root1);
    } else {
        // Complex roots
        realPart = -b / (2 * a);
        imagPart = sqrt(-discriminant) / (2 * a);
        printf("Roots are complex and distinct:\\n");
        printf("Root 1 = %.2f + %.2fi\\n", realPart, imagPart);
        printf("Root 2 = %.2f - %.2fi\\n", realPart, imagPart);
    }

    return 0;
}

`}
              </code>
            </pre>
            <p>Input & Output:</p>
            <pre>
              <code>
                {` 
1) Enter coefficients a, b, and c: 1 -3 2
Roots are real and distinct:
Root 1 = 2.00
Root 2 = 1.00

2) Enter coefficients a, b, and c: 1 -2 1
Roots are real and equal:
Root 1 = Root 2 = 1.00

3) Enter coefficients a, b, and c: 1 2 5
Roots are complex and distinct:
Root 1 = -1.00 + 2.00i
Root 2 = -1.00 - 2.00i

`}
              </code>
            </pre>

            <h3 style={{ color: "red" }}>
              iv) Simulate a Calculator Using Switch Case
            </h3>
            <p>
              Source Code:{" "}
              <a href="https://onlinegdb.com/dj91_clgg" target="_blank">
                calculator_switch_case.c
              </a>
            </p>
            <pre>
              <code>
                {` 
#include <stdio.h>
void main() {
    char operator;
    int num1, num2, result;

    printf("Enter two operands: ");
    scanf("%d %d", &num1, &num2);
    
    printf("Enter operator (+, -, *, /, %%): ");
    scanf(" %c", &operator);

    switch (operator) {
        case '+':
                    result = num1 + num2;
                    printf("%d+%d is %d\\n",num1,num2,result);
                    break;
        case '-':
                    result = num1 - num2;
                    printf("%d-%d  is %d\\n",num1,num2,result);
                    break;
        case '*':
                    result = num1 * num2;
                    printf("%d*%d is %d\\n",num1,num2,result);
                    break;
        case '/':
        case '%':
                    if (num2 == 0) {
                        printf("Error: Division by zero.\\n");
                    } else{
                        if (operator=='/') {
                            result = num1 / num2;
                            printf("%d/%d is %d\\n",num1,num2,result);
                        }
                        if (operator=='%') {
                            result = num1 % num2;
                            printf("%d%%%d is %d\\n",num1,num2,result);
                        }
                    }
                    break;
        default:
            printf("Error: Invalid operator.\\n");
    }
}
`}
              </code>
            </pre>

            <h3 style={{ color: "red" }}>
              v) Check if a Given Year is a Leap Year
            </h3>
            <p>
              Source Code:{" "}
              <a href="https://onlinegdb.com/EpxBp_V4kV" target="_blank">
                leap_year.c
              </a>
            </p>
            <pre>
              <code>
                {` 
#include <stdio.h>

void main() {
    int year;
    printf("Enter a year: ");
    scanf("%d", &year);
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        printf("%d is a leap year.\\n", year);
    } else {
        printf("%d is not a leap year.\\n", year);
    }
}
`}
              </code>
            </pre>
            <p>Input & Output:</p>
            <pre>
              <code>
                {` 
1) Enter a year: 2024
2024 is a leap year.
2) Enter a year: 2019
2019 is not a leap year.
`}
              </code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <h1>Unit-II - Week 6</h1>
          </Accordion.Header>
          <Accordion.Body>
            <h2>Objective</h2>
            <p>
              Explore the full scope of iterative constructs namely while loop,
              do-while loop and for loop in addition to structured jump
              constructs like break and continue including when each of these
              statements is more appropriate to use.
            </p>

            <h2>Suggested Experiments/Activities</h2>
            <ul>
              <li>Tutorial 6: Loops, while and for loops</li>
              <li>Lab 6: Iterative problems e.g., the sum of series</li>
            </ul>

            <h2>Programs</h2>

            <h3 style={{ color: "red" }}>
              i) Find the Factorial of a Given Number
            </h3>
            <p>
              Ans:{" "}
              <a href="https://onlinegdb.com/dpjXMvFqf" target="_blank">
                factorial_given_number.c
              </a>
            </p>
            <pre>
              <code>{`
#include <stdio.h>

void main() {
    long i,n,factorial = 1;

    printf("Enter a positive integer: ");
    scanf("%d", &n);

    if (n < 0) {
        printf("Factorial is not defined for negative numbers.\\n");
    } else {
        for (i = 1; i <= n; ++i) {
            factorial *= i;
        }
        printf("Factorial of %d is %ld\\n", n, factorial);
    }
}
`}</code>
            </pre>
            <h4>Input & Output Example:</h4>
            <pre>
              <code>{`
Enter a positive integer: 5
Factorial of 5 is 120
`}</code>
            </pre>

            <h3 style={{ color: "red" }}>
              ii) Check if a Given Number is Prime
            </h3>
            <p>
              Ans:{" "}
              <a href="https://onlinegdb.com/HmB_omhjt" target="_blank">
                prime_number_or_not.c
              </a>
            </p>
            <pre>
              <code>{`
#include <stdio.h>
void main() {
    int i,n,isPrime = 1;
    printf("Enter a positive integer: ");
    scanf("%d", &n);
    if (n <= 1) {
        isPrime = 0;
    } else {
        for (i = 2; i <= n / 2; i++) {
            if (n % i == 0) {
                isPrime = 0;
                break;
            }
        }
    }
    if (isPrime){
        printf("%d is a prime number.\\n", n);
    }else{
        printf("%d is not a prime number.\\n", n);
    }
}

`}</code>
            </pre>
            <h4>Input & Output Example:</h4>
            <pre>
              <code>{`
Enter a positive integer: 13
13 is a prime number.
`}</code>
            </pre>

            <h3 style={{ color: "red" }}>
              iii) Compute Sine and Cosine Series
            </h3>
            <p>
              Ans:{" "}
              <a href="https://onlinegdb.com/c7H-0oPHw" target="_blank">
                sine_cos_series.c
              </a>
            </p>
            <pre>
              <code>{`
#include <stdio.h>
#include <math.h>

void main() {
    double x, sine = 0, cosine = 0;
    int terms, i;
    printf("Enter the angle in radians: ");
    scanf("%lf", &x);
    printf("Enter the number of terms in the series: ");
    scanf("%d", &terms);
    for (i = 0; i < terms; i++) {
        sine += (pow(-1, i) * pow(x, 2 * i + 1)) / tgamma(2 * i + 2); // sin(x)
        cosine += (pow(-1, i) * pow(x, 2 * i)) / tgamma(2 * i + 1);    // cos(x)
    }
    printf("Approximate sine(%lf) = %lf\\n", x, sine);
    printf("Approximate cosine(%lf) = %lf\\n", x, cosine);
}
`}</code>
            </pre>
            <h4>Input & Output Example:</h4>
            <pre>
              <code>{`
Enter the angle in radians: 1.0
Enter the number of terms in the series: 10
Approximate sine(1.000000) = 0.841471
Approximate cosine(1.000000) = 0.540302
`}</code>
            </pre>

            <h3>iv) Check if a Number is a Palindrome</h3>
            <p>
              Ans:{" "}
              <a href="https://onlinegdb.com/sy1LpK8jy" target="_blank">
                check_palindrome_number.c
              </a>
            </p>
            <pre>
              <code>{`
#include <stdio.h>
void main() {
    int original,tempNum,reversed = 0,remainder;
    printf("Enter an integer: ");
    scanf("%d", &original); 
    tempNum = original; // Store original number for comparison
    while (tempNum != 0) {
        remainder = tempNum % 10;
        reversed = reversed * 10 + remainder;
        tempNum /= 10;
    }
    if (original == reversed) {
        printf("%d is a palindrome.\\n", original);
    } else {
        printf("%d is not a palindrome.\\n", original);
    }
}
`}</code>
            </pre>
            <h4>Input & Output Example:</h4>
            <pre>
              <code>{`
Enter an integer: 121
121 is a palindrome.
`}</code>
            </pre>

            <h3 style={{ color: "red" }}>v) Construct a Pyramid of Numbers</h3>
            <p>
              Ans:{" "}
              <a href="https://onlinegdb.com/Pd4oJiQjT" target="_blank">
                pyramid_of_numbers.c
              </a>
            </p>
            <pre>
              <code>{`
#include <stdio.h>

void main() {
    int r,c,s,rows;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    for (r = 1; r <= rows; r++) {
        // Print spaces
        for (s = r; s < rows; s++) {
            printf(" ");
        }
        // Print numbers
        for (c = 1; c <= r; c++) {
            printf("%d ", c);
        }
        printf("\\n");
    }
}

`}</code>
            </pre>
            <h4>Input & Output Example:</h4>
            <pre>
              <code>{`
Enter the number of rows: 5
    1 
   1 2 
  1 2 3 
 1 2 3 4 
1 2 3 4 5
`}</code>
            </pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <>
        <Mcqs />
      </>
    </div>
  );
}

export default CProgrammingConcepts;

// Contact.js
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useDocumentTitle from '../../hooks/useDocumentTitle';
const Python = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Python");
    return (<>
        <h3>Python:</h3>
        <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">    
            <p>
            Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.
            </p>
            <a target='_blank' href='https://www.python.org'> Python Website </a>
        </div>
        <Accordion eventKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><b>Python installation</b></Accordion.Header>
            <Accordion.Body>
            sudo apt-get install python3
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><b>Python Version</b></Accordion.Header>
            <Accordion.Body>
                <p>python -V</p>
                <p>python --version</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><b>Python Basics</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/A1)%20Python%20Basics.html">Python Basics</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><b>Python Casting</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/A2)%20Python%20Casting.html">Python Casting Examples</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header><b>Standard Data Types</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/A3)%20Standard%20Data%20Types.html">Standard Data Types</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header><b>Python Collections</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/A4)%20Python%20Collections.html">Python Collections</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header><b>1. %s and format() examples</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/1.%20%25s%20and%20format()%20examples.html">%s and format() examples</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header><b>2. String Type</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/2.%20String%20type.html">String type</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header><b>3.Some String Functions</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/3.Some%20String%20Functions.html">Some String Functions</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header><b>4. Operators</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/4.%20Operators.html">Operators</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header><b>5. Python List</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/5.%20Python%20List.html">Python List</a><br/>
              <a target='_blank' href="https://allurianilkumar.github.io/python/6.%20List%20Examples%20with%20functions.html">List Examples with functions</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header><b>6. Python Tuple</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/7.Tuple.html">Python Tuple.</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header><b>7. Python Set</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/8.%20Python%20Set_1.html">Python Set</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header><b>8. Python Dictionary</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/9.%20Python%20Dictionary.html">Python Dictionary</a><br/>
              <a target='_blank' href="https://allurianilkumar.github.io/python/9%20a).%20Python%20Dictionary%20with%20functions.html">Python Dictionary with functions</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="14">
            <Accordion.Header><b>9. Control statements</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/10%20Control%20statements.html">Control statements</a><br/>
              <a target='_blank' href="https://allurianilkumar.github.io/python/11.%20logics.html">logics</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="15">
            <Accordion.Header><b>10. Functions in Python</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/12.%20Functions%20in%20Python.html">Functions in Python</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="16">
            <Accordion.Header><b>11. Python Classes - Objects</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/13.%20Python%20Classes%20-%20Objects.html">13. Python Classes - Objects</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="17">
            <Accordion.Header><b>12. Python Inheritance</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/14.%20Python%20Inheritance.html">14. Python Inheritance</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="18">
            <Accordion.Header><b>13. Python Scope</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/15.%20Python%20Scope.html">Python Scope</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="19">
            <Accordion.Header><b>14. Exception Handling</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/16.%20Exception%20Handling.html">Exception Handling</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="20">
            <Accordion.Header><b>15. Python Modules</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/17.%20Python%20Modules.html">Python Modules</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="21">
            <Accordion.Header><b>16. File Handling</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/18.%20File%20Handling.html">File Handling</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="22">
            <Accordion.Header><b>17. Python Database</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/19.%20Python%20Database.html">Python Database</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="23">
            <Accordion.Header><b>18. Numpy Basics</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/Numpy%20Basics.html">Numpy Basics</a><br/>
              <a target='_blank' href="https://allurianilkumar.github.io/python/numpy.html">Numpy</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="24">
            <Accordion.Header><b>19. Pandas Basics</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/Pandas%20Basics.html">Pandas Basics</a><br/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="25">
            <Accordion.Header><b>20. Matplotlib</b></Accordion.Header>
            <Accordion.Body>
              <a target='_blank' href="https://allurianilkumar.github.io/python/Matplotlib.html">Matplotlib</a><br/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </>);
}

export default Python;
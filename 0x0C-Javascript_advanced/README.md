<h1 class="gap">0x0C. JavaScript advanced</h1>


<h2>Learning Objectives</h2>

<ul>
<li>What is lexical scoping in JavaScript</li>
<li>What is closure in JavaScript</li>
<li>How to use closure</li>
<li>How to chain different closures</li>
<li>How to simulate private methods with Closure</li>
<li>The execution stack order with JavaScript</li>
<li>How to use binding</li>
<li>How to use callbacks</li>
</ul>


<h2 class="gap">Tasks</h2>

<h3 class="panel-title">
      0. Lexical scoping and welcome message
    </h3>

<p>Create a function named <code>welcome</code>:</p>

<ul>
<li>It takes two arguments: <code>firstName</code> (string) and <code>lastName</code> (string)</li>
<li>It contains a variable named <code>fullName</code>, that will contains the <code>firstName</code> followed by a space and then the <code>lastName</code></li>
<li>Within the <code>welcome</code> function, write a function named <code>displayFullName</code>:

<ul>
<li>It should display an alert with the message <code>Welcome</code> + the variable <code>fullName</code> + and exclamation mark.</li>
</ul></li>
<li>Call the function <code>displayFullName</code> at the end of the function <code>welcome</code></li>
</ul>

<p><strong>How to test</strong></p>

<ul>
<li>Open your web inspector in the tab “Console”</li>
<li>Copy paste your code</li>
<li>Run <code>welcome('Holberton', 'School');</code> should prompt an alert with this content: <code>Welcome Holberton School!</code></li>
<li><code>alert(fullName)</code>, should return a reference error <code>fullName is not defined</code></li>
</ul>

  </div>

 <h3 class="panel-title">
      1. Closure Scope Chain
    </h3>

<ul>
<li>Create a variable named <code>globalVariable</code> with value <code>Welcome</code></li>
<li>Create a function <code>outer</code> that:

<ul>
<li>alerts the content of the variable <code>globalVariable</code></li>
<li>creates a variable named <code>course</code> with value <code>Holberton</code></li>
<li>creates a function <code>inner</code> that:

<ul>
<li>alerts the content of the variable <code>globalVariable</code> and <code>course</code> (concatenated)</li>
<li>creates a variable named <code>exclamation</code> with value <code>!</code></li>
<li>creates a function <code>inception</code> that alerts the content of the variable <code>globalVariable</code>, <code>course</code>, and <code>exclamation</code> (concatenated)</li>
<li>calls the function <code>inception</code></li>
</ul></li>
<li>calls the function <code>inner</code></li>
</ul></li>
<li>Call the function <code>outer</code></li>
</ul>

<p><strong>Compose the code:</strong></p>

<ul>
<li>Write the function <code>inception</code> within <code>inner</code></li>
<li>Write the function <code>inner</code> within <code>outer</code></li>
<li>Call the function <code>outer</code> in the main code (outside any function)</li>
<li>Call the function <code>inner</code> within <code>outer</code></li>
<li>Call the function <code>inception</code> within <code>inner</code></li>
</ul>

<h3 class="panel-title">
      2. Closure
    </h3>

 <p>Write a  function named <code>welcomeMessage</code>:</p>

<ul>
<li>It accepts one argument <code>fullName</code> (string)</li>
<li>It should be a closure for an alert displaying <code>Welcome &lt;fullName&gt;</code></li>
</ul>

<p>After this function definition, create three variables:</p>

<ul>
<li><code>guillaume</code> contains a call <code>welcomeMessage</code> with <code>Guillaume</code> as argument</li>
<li><code>alex</code> contains a call <code>welcomeMessage</code> with <code>Alex</code> as argument</li>
<li><code>fred</code> contains a call <code>welcomeMessage</code> with <code>Fred</code> as argument</li>
</ul>

<h3 class="panel-title">
      3. Closure and loops
    </h3>

 <p>Write a function named <code>createClassRoom</code>:</p>

<ul>
<li>It takes into argument <code>numbersOfStudents</code> (number)</li>
<li>Inside, it contains a function <code>studentSeat</code>, that takes into argument <code>seat</code> (number) and returns a function that returns the <code>seat</code> number </li>
<li>After the definition of <code>studentSeat</code>, create and populate a variable <code>students</code> (array)

<ul>
<li>Using a loop from 0 to <code>numbersOfStudents</code>, pass the number of iteration + 1 to <code>studentSeat</code> and add its return value to the <code>students</code> array</li>
</ul></li>
<li>Returns the <code>students</code> array</li>
</ul>

<p>Create a closure <code>classRoom</code>, calling <code>createClassRoom</code> with 10 students</p>


<h3 class="panel-title">
      4. Complex Closure
    </h3>

<p>Create a function <code>divideBy</code>:</p>

<ul>
<li>It takes into argument <code>firstNumber</code> (number)</li>
<li>It returns a function that takes into argument <code>secondNumber</code> (number)

<ul>
<li>It returns the second number divided by the first number</li>
</ul></li>
</ul>

<p>Create a function <code>addBy</code>:</p>

<ul>
<li>It takes into argument <code>firstNumber</code> (number)</li>
<li>It returns a function that takes into argument <code>secondNumber</code> (number)

<ul>
<li>It returns the sum of the two numbers</li>
</ul></li>
</ul>

<p>Create four closures:</p>

<ul>
<li><code>addBy100</code>, that uses the function <code>addBy</code> with the number 100</li>
<li><code>addBy1000</code>, that uses the function <code>addBy</code> with the number 1000</li>
<li><code>divideBy10</code>, that uses the function <code>divideBy</code> with the number 10</li>
<li><code>divideBy100</code>, that uses the function <code>divideBy</code> with the number 100</li>
</ul>

 <h3 class="panel-title">
      5. Changing DOM with closure
    </h3>

 <p>Create a function named <code>changeMode</code>:</p>

<ul>
<li>It accepts 5 arguments <code>size</code> (number), <code>weight</code> (string), <code>transform</code> (string), <code>background</code> (string), <code>color</code> (string)</li>
<li>Using closure, it changes the style of the entire page and set the <code>font-size</code>, <code>font-weight</code>, <code>text-transform</code>, <code>background-color</code>, and <code>color</code></li>
</ul>

<p>Write a function named <code>main</code>:</p>

<ul>
<li>Set a variable named <code>spooky</code> that passes the arguments <code>9</code>, <code>bold</code>, <code>uppercase</code>, <code>pink</code>, <code>green</code> to <code>changeMode</code></li>
<li>Set a variable named <code>darkMode</code> that passes the arguments <code>12</code>, <code>bold</code>, <code>capitalize</code>, <code>black</code>, <code>white</code> to <code>changeMode</code></li>
<li>Set a variable named <code>screamMode</code> that passes the arguments <code>12</code>, <code>normal</code>, <code>lowercase</code>, <code>white</code>, <code>black</code> to <code>changeMode</code></li>
<li>Add a paragraph to the body of the page with the text <code>Welcome Holberton!</code></li>
<li>Add a button to the body with the text <code>Spooky</code></li>
<li>Add a button to the body with the text <code>Dark mode</code></li>
<li>Add a button to the body with the text <code>Scream mode</code></li>
<li>When clicking on each button, the page CSS should change to the different themes you created previously</li>
</ul>


<h3 class="panel-title">
      6. Private methods with closure
    </h3>
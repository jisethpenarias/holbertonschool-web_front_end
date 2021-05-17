<h1 class="gap">0x06. Responsive design</h1>



<h2 class="gap">Tasks</h2>


<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Fix the hero banner
    </h3>
<p>Because we did some changes with the <code>article.html</code> page in the previous project, our hero banner background is no more visible. Let’s fix it!</p>

<p>But before that, to ensure we start on the same foot, you should use the starter HTML and CSS provided in the project description.</p>

<p>In your <code>01-styles.css</code> file</p>

<ul>
<li>Inside the <code>hero-homepage</code> class selector, update some values:

<ul>
<li>Property: <code>background-position</code>, Value: <code>65% 8rem</code></li>
<li>Property: <code>background-size</code>, Value: <code>90rem auto</code></li>
</ul></li>
<li>Inside the selector that targets <code>section-inner</code> class inside <code>section-hero</code> class

<ul>
<li>Update the <code>min-height</code> to <code>35vh</code></li>
</ul></li>
</ul>

  </div>

  <div class="list-group">


 <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Make the container flexible
    </h3>

<p>Using the previous file as the base, in your <code>02-styles.css</code> file update the <code>.container</code> selector by changing <code>width</code> to <code>max-width</code></p>

<p>If you resize your browser, you should see that the content is resizing.</p>

  <div class="list-group">

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Fix layout issues
    </h3>


<p>Whatever the browser you use, it’s a good idea from now on, to <a href="/rltoken/5lz32vRWqILHFjF32lyuxA" title="toggle the device view" target="_blank">toggle the device view</a>.</p>

<p>In a normal situation, you should start with “mobile first” in mind and write your CSS first for the mobile. But because we already have a desktop version, we will exceptionally add some media-queries for mobile and tablet.</p>

<ul>
<li>For extra large devices (no media queries)</li>
<li>For desktop / large devices (<code>max-width: 992px</code>)</li>
<li>For tablet / medium styles (<code>max-width: 767px</code>)</li>
<li>For mobile styles (<code>max-width: 480px</code>)</li>
</ul>

<p><strong>We will put media queries at the end of each section to facilitate the reading but for performance reasons, the best practice is to unifiy all similar breakpoints at the end of the CSS file.</strong></p>

<p><strong>In your <code>02-1-styles.css</code> file:</strong></p>

<ul>
<li><p>inside the <code>/* Helpers</code> section target all images inside the main section</p>

<ul>
<li>Property: <code>width</code>, Value: <code>100%</code></li>
<li>Property: <code>height</code>, Value: <code>auto</code></li>
</ul></li>
<li><p>inside the <code>/* Section Latest news</code> section, add a new media query (<code>max-width: 767px</code>)</p>

<ul>
<li>Target the <code>row</code> inside <code>section-latest-news</code>

<ul>
<li>Property: <code>flex-direction</code>, Value: <code>column</code></li>
</ul></li>
</ul></li>
<li><p>inside the <code>/* Grid</code> section, at the end, add a new media query (<code>max-width: 767px</code>)</p>

<ul>
<li>First, redefine the variable <code>section-padding</code> and give that value: <code>5rem 1.5rem</code>. And redefine the variable <code>section-body-padding</code> with <code>2rem 0 0</code></li>
<li>Target the <code>ul.row</code> and the <code>row</code> class

<ul>
<li>Property: <code>flex-direction</code>, Value: <code>column</code></li>
<li>Property: <code>margin</code>, Value: <code>0</code></li>
</ul></li>
<li>Target all the classes that started with <code>col-</code>

<ul>
<li>Property: <code>margin</code>, Value: <code>0 0 3rem 0</code></li>
</ul></li>
<li>Target the <code>col-1-3</code> and <code>col-1-2</code> classes

<ul>
<li>Property: <code>width</code>, Value: <code>100%</code></li>
</ul></li>
</ul></li>
</ul>

<p>The <code>navbar</code> is not allowing the website to fit the window. We will temporarily hide it and create a mobile navbar later.</p>

<ul>
<li>inside the <code>/* Navbar</code> section, at the end, add a new media query (<code>max-width: 767px</code>)

<ul>
<li>Target the <code>navbar-menu</code> class

<ul>
<li>Property: <code>display</code>, Value: <code>none</code></li>
</ul></li>
</ul></li>
</ul>

<p>You should now be able to easily view the website on a device of any screen/window size. I guess you are surprised that was so easy?!</p>


 <h3 class="panel-title">
      3. Generate images with responsive breakpoints
    </h3>

 <p>Go to <a href="/rltoken/W5EW7u35nwzX2qH3CIvf7Q" title="Responsive Breakpoints" target="_blank">Responsive Breakpoints</a></p>

<p>In Breakpoints generation settings:</p>

<ul>
<li>Resolution:  From <code>380</code> to <code>1200</code></li>
<li>Size step: <code>25</code></li>
<li>Maximum images: <code>3</code></li>
<li>Art-direction: <code>Desktops</code></li>
<li>Upload your images one at a time:


 <h3 class="panel-title">
      4. Create the mobile icon and hide the menu
    </h3>

<p>We want to have a clickable icon that shows and hide our navigation. We don’t want to use JavaScript but find a pure HTML / CSS way. We learned that input type checkbox have a checked - unchecked state. So we are going to use this for our menu.</p>

<p>Using the previous files as the base for this project</p>

<p><strong>Changes to the HTML</strong></p>

<p>Just before the <code>&lt;nav class="navbar-menu"&gt;</code></p>

<ul>
<li><p>Create an input (which will be not visible)</p>

<ul>
<li>Class: <code>menu-btn</code></li>
<li>Type: <code>checkbox</code></li>
<li>Id: <code>menu-btn</code></li>
</ul></li>
<li><p>Create a label</p>

<ul>
<li>Class: <code>menu-icon</code></li>
<li>For: <code>menu-btn</code></li>
<li>In the label create an empty <code>span</code> with the <code>navicon</code> class.</li>
</ul></li>
</ul>

<p><strong>Changes to the CSS</strong></p>

<p>Inside the <code>/* Navbar</code> section, and inside the <code>767px</code> media query</p>

<ul>
<li><p>Create the <code>root</code> global selector. We want to override a CSS variable:</p>

<ul>
<li>Variable name: <code>nav-item-margin</code>, Value: <code>0</code></li>
</ul></li>
<li><p>In the selector for the <code>navbar-menu</code> class</p>

<ul>
<li>Property: <code>flex</code>, Value: <code>1</code></li>
</ul></li>
<li><p>Target the <code>nav</code> class in <code>header</code> class</p>

<ul>
<li>Property: <code>flex-direction</code>, Value: <code>column</code> (for the element of the menu be below each other)</li>
<li>Property: <code>overflow</code>, Value: <code>hidden</code></li>
<li>Property: <code>max-height</code>, Value: <code>0</code> (the display property can’t be animated, so we use the height that can be animated)</li>
<li>Property: <code>transition</code>, Value: <code>max-height .2s ease-out</code></li>
</ul></li>
</ul>

<h3 class="panel-title">
      5. Hamburger!
    </h3>


<p>Let’s now, use a little bit of CSS magic to create an “hamburger” icon just with CSS.</p>

<p>Using the previous files as the base for this task:</p>

<ul>
<li><p>Target the <code>menu-icon</code> class inside the <code>header</code> class</p>

<ul>
<li>Property: <code>cursor</code>, Value: <code>pointer</code></li>
<li>Property: <code>padding</code>, Value: <code>2.5rem</code></li>
<li>Property: <code>position</code>, Value: <code>relative</code></li>
<li>Property: <code>user-select</code>, Value: <code>none</code></li>
</ul></li>
<li><p>Target the <code>navicon</code> class inside the<code>menu-icon</code> class which is inside the <code>header</code> class</p>

<ul>
<li>Property: <code>background</code>, Value: point to the <code>color-white</code> variable</li>
<li>Property: <code>display</code>, Value: <code>block</code></li>
<li>Property: <code>width</code>, Value: <code>2rem</code></li>
<li>Property: <code>height</code>, Value: <code>.2rem</code></li>
<li>Property: <code>position</code>, Value: <code>relative</code></li>
<li>Property: <code>transition</code>, Value: <code>background .2s ease-out</code></li>
</ul></li>
<li><p>Target the <code>before</code> and <code>after</code> pseudo elements of the <code>navicon</code> class inside the <code>menu-icon</code> class which is inside the <code>header</code> class</p>

<ul>
<li>Property: <code>content</code>, Value: empty string</li>
<li>Property: <code>display</code>, Value: <code>block</code></li>
<li>Property: <code>width</code>, Value: <code>100%</code></li>
<li>Property: <code>height</code>, Value: <code>100%</code></li>
<li>Property: <code>position</code>, Value: <code>absolute</code></li>
<li>Property: <code>background</code>, Value: point to the <code>color-white</code> variable</li>
<li>Property: <code>transition</code>, Value: <code>all .2s ease-out</code></li>
</ul></li>
<li><p>Target only the <code>before</code> pseudo element of the <code>navicon</code> class inside the <code>menu-icon</code> class which is inside the <code>header</code> class</p>

<ul>
<li>Property: <code>top</code>, Value: <code>.7rem</code></li>
</ul></li>
<li><p>Target only the <code>after</code> pseudo element of the <code>navicon</code> class inside the <code>menu-icon</code> class which is inside the <code>header</code> class</p>

<ul>
<li>Property: <code>top</code>, Value: <code>-.7rem</code></li>
</ul></li>
</ul>

 <h3 class="panel-title">
      6. Add the behavior based on menu-btn state
    </h3>

<p><strong>in your CSS file:</strong></p>

<ul>
<li>Create a new comment section <code>/* menu btn */</code></li>
<li>Target <code>menu-btn</code> class inside <code>header</code> class

<ul>
<li>Property: <code>display</code>, Value: <code>none</code></li>
</ul></li>
<li>Target <code>navbar-menu</code> class when the <code>menu-btn</code> class element is checked

<ul>
<li>Property: <code>display</code>, Value: <code>block</code></li>
</ul></li>
<li><p>Target <code>nav</code> class inside <code>navbar-menu</code> class when the <code>menu-btn</code> class element is checked</p>

<ul>
<li>Property: <code>max-height</code>, Value: <code>100%</code></li>
<li>Property: <code>overflow</code>, Value: <code>inherit</code></li>
</ul></li>
<li><p>At the end of the <code>/* Section HERO</code> section, create a new media query for <code>max-width: 767px</code></p>

<ul>
<li>Target the <code>section-hero</code> class

<ul>
<li>Property: <code>margin</code>, Value: <code>-0.1rem 0</code></li>
</ul></li>
<li>Target the <code>hero-homepage</code> class

<ul>
<li>Property: <code>background-position</code>, Value: <code>85% 0</code></li>
</ul></li>
<li>Target the <code>section-body</code> class inside <code>section-hero</code> class

<ul>
<li>Property: <code>padding</code>, Value: <code>2rem</code></li>
</ul></li>
</ul></li>
</ul>

<p>Going back to the <code>/* menu btn */</code> section</p>

<ul>
<li>Target the <code>navicon</code> class inside <code>menu-icon</code> class sibling to the <code>menu-btn</code> when it is checked and inside <code>header</code> class

<ul>
<li>Property: <code>background</code>, Value: <code>transparent</code></li>
</ul></li>
<li>Target the before state of <code>navicon</code> class inside <code>menu-icon</code> class sibling to the <code>menu-btn</code> when it is checked and inside <code>header</code> class element

<ul>
<li>Property: <code>transform</code>, Value: <code>rotate(-45deg)</code></li>
</ul></li>
<li>Target the after state of <code>navicon</code> class inside <code>menu-icon</code> class sibling to the <code>menu-btn</code> when it is checked and inside <code>header</code> class element

<ul>
<li>Property: <code>transform</code>, Value: <code>rotate(45deg)</code></li>
</ul></li>
<li><p>Target the before and after states of <code>navicon</code> class when inside <code>menu-icon</code> class sibling to the <code>menu-btn</code> class when it is checked and inside <code>header</code> class</p>

<ul>
<li>Property: <code>top</code>, Value: <code>0</code></li>
</ul></li>
<li><p>Create a new media query for <code>max-width: 767px</code></p>

<ul>
<li>Target the root and redefine the <code>header-padding</code> variable with <code>2rem 0 0</code></li>
<li>Target <code>header</code> class

<ul>
<li>Property: <code>background</code>, Value: point to the <code>color-black</code> variable</li>
</ul></li>
<li>Target the <code>header-container</code> class

<ul>
<li>Property: <code>flex-wrap</code>, Value: <code>wrap</code></li>
<li>Property: <code>padding</code>, Value: <code>0 1.5rem</code></li>
</ul></li>
<li>Target the <code>menu-icon</code> class inside the <code>header</code> class

<ul>
<li>Property: <code>display</code>, Value: <code>block</code></li>
</ul></li>
</ul></li>
<li><p>Create a new media query for <code>max-width: 480px</code></p>

<ul>
<li>Target the <code>header-logo</code> class

<ul>
<li>Property: <code>flex-basis</code>, Value: <code>70%</code></li>
</ul></li>
</ul></li>
<li><p>Create a new media query with <code>min-width: 481px</code> and <code>max-width: 767px</code></p>

<ul>
<li>Target the <code>header-logo</code> class

<ul>
<li>Property: <code>flex-basis</code>, Value: <code>79%</code></li>
</ul></li>
</ul></li>
<li><p>Find the <code>.header .menu-icon</code> selector and add <code>display: none;</code> to hide the menu icon when we are on desktop mode.</p></li>
</ul>


<h3 class="panel-title">
      7. Make the font size responsive
    </h3>

<p>We have multiple ways to make the typography responsive. The basic way would be to create multiple media queries and set a different font-size. But because we are using REM that are based on 62.5% (defined in the html selector). Changing that value would change proportionally all font sizes.</p>

<p>In your CSS file at the end of the <code>/* Base</code> section</p>

<ul>
<li>Create a new media query for <code>max-width: 480px</code>

<ul>
<li>Target the <code>html</code> element

<ul>
<li>Property: <code>font-size</code>, Value: <code>57%</code></li>
</ul></li>
</ul></li>
<li>Create a new media query for <code>min-width: 481px</code> and <code>max-width: 767px</code>

<ul>
<li>Target the <code>html</code> element

<ul>
<li>Property: <code>font-size</code>, Value <code>60%</code></li>
</ul></li>
</ul></li>
</ul>

<h1 class="gap">0x07. Accessibility</h1>


<h2 class="gap">Tasks</h2>
<h3 class="panel-title">
      0. make the "works" card focus visible
    </h3>

<p>Let’s start by the “Work” section:</p>

<p>We have an issue with the focus (moving from one link to another with the <code>TAB</code> key) in the Desktop version. With the DevTools, you can active the focus on the <code>&lt;a&gt;</code> inside <code>.card-title</code> and nothing happen.</p>

<p>To solve it, we need to update the way we are managing the hover state of <code>.card-title</code>:</p>

<ul>
<li>In your <code>keyboard/01-styles.css</code> file, in the <code>/* Card WORK</code> section

<ul>
<li>Remove <code>opacity: 0</code> inside <code>.card-work .card-title</code></li>
<li>Remove <code>.card-work:hover .card-inner</code></li>
<li>Remove <code>.card-work:hover .card-title</code></li>
<li>Target the selector <code>.card-work .card-title a</code> and add an opacity to 0.</li>
<li>For <code>.card-work .card-title a</code> with the <code>a</code> in state focus and <code>.card-work:hover .card-title a</code>:

<ul>
<li>Property: <code>opacity</code>, Value: <code>1</code></li>
<li>Property: <code>height</code>, Value: <code>100%</code></li>
<li>Property: <code>background-color</code>, Value: <code>rgba(0, 0, 0, 0.7)</code></li>
</ul></li>
</ul></li>
</ul>

<p>Now you use the keyboard to navigate, you should see the card with the title and the dark background like when you hover the card with your mouse.</p>

<p>All the other elements have a blue outline around.</p>

<h3> 1. add the skip-links
    </h3>

<p>Using the <code>00-index.html</code> provided in the previous task, in your <code>skip-links/01-index.html</code> file, just after the <code>&lt;body&gt;</code> HTML open tag</p>

<ul>
<li>Add the <code>&lt;!-- Skip links --&gt;</code> comment</li>
<li>Create a new <code>&lt;nav&gt;</code> tag with the <code>aria-label</code> attribute. Put the value <code>Skip links</code> inside it.

<ul>
<li>Create a non ordered list of class <code>off-screen</code>

<ul>
<li>Create a first <code>li</code> with a link inside

<ul>
<li>Href: <code>#a11y-primary-nav</code></li>
<li>Class: <code>skip-link</code></li>
<li>Text: <code>Skip to primary navigation</code></li>
</ul></li>
<li>Create a second <code>li</code> with a link inside

<ul>
<li>Href: <code>#a11y-main-content</code></li>
<li>Class: <code>skip-link</code></li>
<li>Text: <code>Skip to main content</code></li>
</ul></li>
</ul></li>
</ul></li>
<li>On the <code>&lt;nav class="navbar-menu"&gt;</code>, add an id with the text: <code>a11y-primary-nav</code> and a <code>tabindex="-1"</code></li>
<li>On the <code>&lt;main&gt;</code> tag, add an id with the text: <code>a11y-main-content</code>, and <code>tabindex="-1"</code></li>
</ul>

<p><code>00-article.html</code> is provided to you below to repeat the same changes in your <code>skip-links/01-article.html</code> file</p>


 <h3 class="panel-title">
      2. Elements must have sufficient color contrast
    </h3>

 <p>You are given this <code>fix-a11y/00-index.html</code> starter file:</p>
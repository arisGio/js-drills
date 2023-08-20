# js-drills

JavaScript exercises to sharpen my skills regarding aspects such as string manipulation, arrays, etc.

# useful tips

When coding instead of running <code>node someFile.js</code> after saving changes, do the following.

1 - Open terminal

2 - <code>node --watch somefile.js</code>

This way everytime you save changes in <code>someFile.js</code> node automatically runs the code. Check <a href="https://www.youtube.com/watch?v=QPSnFzj9eUw">HERE</a>.

# Creating npm project

To create a simple npm project you execute the following command.

<code>npm init -y</code>

# Testing using Jest

Jest is a <strong>test framework</strong> for JavaScript.

Execute <code>npm install --save-dev jest</code> to install Jest as a dev dependency to current npm project. Check <a href="https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/">HERE</a>. Another explanatory tutorial on unit testing using Jest is provided by BrowserStack <a href="https://www.browserstack.com/guide/unit-testing-in-javascript">HERE</a>

Jest is used for <strong>Unit Testing</strong> which is the exact opposite of <strong>E2E Testing</strong>. Latter link is very educative of that is testing in general and what purposes does Jest serve.

To test a specific file then what you do is the following:

1 - Assuming the file you want to test is called <code>someFile.js</code>. Then you create a new file name <code>someFile.test.js</code>.

2 - In the test file you add the tests you want to make. Do not forget to require the module from which you export the code to obe tested.

3 - Go <code>package.json</code> and add <code>jest</code> to <code>scripts.test</code>.

3 - Execute <code>npm test</code>.

Side note about exporting: <code>module.exports</code> is <code>CommonJS Syntax</code> while <code>export</code> keyword, e.g. export function .., is <code>ES6 module Syntax</code>. For more details check <a href="https://blog.logrocket.com/commonjs-vs-es-modules-node-js/">HERE</a>.

# Regex

Check <a href="https://code.tutsplus.com/a-simple-regex-cheat-sheet--cms-31278t">JavaScript Regex Cheat Sheet
</a>.

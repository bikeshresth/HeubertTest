# HeubertTest
Cypress for end to end testing

Installing
 npm install
Install Cypress via npm:

cd /your/project/path
npm install cypress --save-dev

Run tests specifying a single test file to run instead of all tests. The spec path should be an absolute path or can relative to the current working directory.

cypress run --spec "cypress/integration/examples/actions.spec.js"
Run tests within the folder matching the glob (Note: Using double quotes is strongly recommended).

cypress run --spec "cypress/integration/login/**/*"
Run tests specifying multiple test files to run.

cypress run --spec "cypress/integration/examples/actions.spec.js,cypress/int

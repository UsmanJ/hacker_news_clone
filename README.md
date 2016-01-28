# Hacker News Homepage Clone

## Synopsis

The task was to build a clone of the [Hacker News](news.ycombinator.com) homepage using their [API](https://github.com/HackerNews/API) to produce the top 30 stories along with their links, score, submitter, and number of comments.

## Technologies Used

This application was built using JavaScript and the AngularJS framework.

## Build & development

After cloning the repo, go into the root folder of the project and:

Run `npm install`<br>
Run `grunt`

Run `grunt serve` to view the application

## Testing

Running `grunt test` will run the unit tests with karma.

In order to run the protractor tests do the following:

Run `grunt serve`<br>
Run `webdriver-manager start` in a new tab <br>
Go to `http://127.0.0.1:4444/wd/hub` to create a session in either chrome or firefox<br>
Run `protractor test/e2e/conf.js` in another new tab and this will run the protractor tests

# ember-pdfjs-integration
This repo itself is working now. Following the instructions in 'Installation' and 'Running' sections for local test. 

## Why pdf.js integration failed to integrate with ember apps
`NPM install pdfjs-dist -D` is supposed be working without any configuration with the help of ember-auto-import. However, the app would explode with error complaining about **Unexpected character '#'**. 
After I updated ember-auto-import from v1.12 to v2.6.0 which has a newer version of babel preset-env including es2022 features like private method, app still wouldn't run as pdfjs couldn't be properly transpired and complaining that 'Class private methods are not enabled'. Therefore we have to mannually set the babel-loader to transpire the package in ember-cli-build and then it will be working. 

In summary, to make pdfjs working in your ember apps, do following steps:

1. install pdfjs-dist package (e.g. npm)
2. upgrade ember-auto-import to v2.6.0 (which is a breaking change)
3. set babel-loader to transpire the pdf.js using babel preset-env (see ember-cli-build.js in ember-pdfjs-integration)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-quickstart`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

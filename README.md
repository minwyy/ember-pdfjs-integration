# ember-pdfjs-integration

`NPM install pdfjs-dist -D` should be working without any configuration. However, it reported error "**Unexpected** character '#'" . After I updated ember-auto-import to v2.6.0, which has new version of babel preset-env  including private method, pdfjs still cannot be properly transpired. Therefore I mannually set the babel-loader to transpire the package in ember-cli-build and it is working then. 

So make pdfjs working we need:

1. install pdfjs-dist package (i.e. npm)
2. upgrade ember-auto-import to v2.6.0
3. set babel-loader to transpire the pdf.js from the package (see ember-cli-build.js in the app)

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

## Running / Development

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

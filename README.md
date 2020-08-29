# Gobble 🍔

Gobble is an opinionated boilerplate for starting projects quickly.

Credits to [cferdinandi's gulp-boilerplate](https://github.com/cferdinandi/gulp-boilerplate) for his documentation, as this README is heavily based on it (I have no clue how to write one! 🙈).

## Features

- Renders [Nunjucks](https://mozilla.github.io/nunjucks/) template files to HTML and plug data supplied from YAML front matter or JSON.
- Conducts static code analysis on and minifies HTML.
- Generates sourcemaps for [SASS](v) and compiles it to CSS.
- Minifies and autoprefixes CSS.
- Obfuscates, concatenates, minifies and generates sourcemaps for JavaScript.
- Optimises images, SVGs and fonts.
- Busts cache by using a unique file version identifier - solves browser caching issues.
- Watches for file changes, and automatically recompile build and reload webpages using BrowserSync.

## Getting Started

A guide to get up and running... 🏃‍♂️

### Dependencies

Please ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [Gulp CLI](https://www.npmjs.com/package/gulp-cli)

### Quick Start

1. Go to your project directory.

   ```
   $ cd project-root
   ```

2. Run npm install to install required files and dependencies - for a list see [package.json](https://github.com/ioalex/gobble/blob/master/package.json) & [package-lock.json](https://github.com/ioalex/gobble/blob/master/package-lock.json).
3. Once installation is complete, run `npm start` to quickly create your `src` folder structure.
4. Happy coding!

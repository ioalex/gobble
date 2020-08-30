# Gobble 🍔

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Uses](#uses)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About The Project

Gobble is an opinionated boilerplate for starting projects quickly.

Credits to [cferdinandi's gulp-boilerplate](https://github.com/cferdinandi/gulp-boilerplate) and [othneildrew's template](https://github.com/othneildrew/Best-README-Template) for their documentation, as this README is heavily based on theirs (I have no clue how to write one! 🙈).

## Features

- Renders [Nunjucks](https://mozilla.github.io/nunjucks/) template files to HTML and plug data supplied from YAML front matter or JSON.
- Conducts static code analysis on and minifies HTML.
- Generates sourcemaps for [SASS](https://sass-lang.com/) and compiles it to CSS.
- Minifies and autoprefixes CSS.
- Obfuscates, concatenates, minifies and generates sourcemaps for JavaScript.
- Optimises images, SVGs and fonts.
- Busts cache by using a unique file version identifier - solves browser caching issues.
- Watches for file changes, and automatically recompile build and reload webpages using BrowserSync.

## Uses

- Nunjucks - to modularise HTML allowing for reusability.
- SASS - to write clean, easy and less CSS.
- Gulp - to run tasks!
- Prettier - to quickly format files.
- ESLint - to find and fix JavaScript errors.
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) - to follow a mostly reasonable approach to JS.
- EditorConfig - to define coding styles for editors.
- .nvmrc - to lock down Node version to project.
- Lighthouse CI GitHub Actions Workflow - for automated web page audits.
- Dependabot - for automated dependency updates.

## Getting Started

A guide to get up and running... 🏃‍♂️

### Prerequisites

Please ensure that you have the following dependencies installed:

- [Node.js](https://nodejs.org/en/) for packages
- [Gulp CLI](https://www.npmjs.com/package/gulp-cli) for running tasks
- [Git](https://git-scm.com/) for cloning this repository

### Installation

Clone the repository in your project folder:

```
git clone https://github.com/ioalex/gobble.git
```

### Quick Start

1. Navigate to your project directory.

   ```
   $ cd project-root
   ```

2. Clone this repository.

   ```
   $ git clone https://github.com/ioalex/gobble.git
   ```

3. Run npm install to install required files and dependencies - for a list see [package.json](https://github.com/ioalex/gobble/blob/master/package.json) & [package-lock.json](https://github.com/ioalex/gobble/blob/master/package-lock.json).
4. Once installation is complete, run `npm start` to quickly create your `src` folder structure.
5. Happy coding!

The `gulp build` command will build projects from source.
The `gulp watch` command will fire up a local development server and watch your files, re-building your project in response to changes, while also reloading the server.

## Usage

### Commands

| Gulp Commands | NPM Commands     | Description                                                                                                     |
| ------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `gulp start`  | `npm start`      | Creates the src folder structure. Run before you begin writing your project.                                    |
| `gulp build`  | `npm run build`  | Builds your project from src.                                                                                   |
| `gulp clean`  | `npm run clean`  | Deletes your build.                                                                                             |
| `gulp watch`  | `npm run watch`  | Starts a local development server and compiles your files as you make changes to your source files.             |
| `gulp cache`  | `npm run cache`  | Busts the cache to prevent browser cache issues.                                                                |
| `gulp html`   | `npm run html`   | Renders Nunjucks template files to HTML before removing comments and minifying.                                 |
| `gulp style`  | `npm run style`  | Compiles your SASS files to CSS before generating a sourcemap, applying vendor specific prefixes and minifying. |
| `gulp script` | `npm run script` | Concatenates, obfuscates, minifies and generates sourcemap for JavaScript files.                                |
| `gulp image`  | `npm run image`  | Optimizes and compresses images.                                                                                |
| `gulp svg`    | `npm run svg`    | Optimizes and compresses SVG files.                                                                             |
| `gulp font`   | `npm run font`   | Optimizes and compresses font files.                                                                            |

## Roadmap

See the [open issues](https://github.com/ioalex/gobble/issues) for a list of proposed features (and known issues).

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact

Alex He - @alexheio - alex@alexhe.io

Project Link: https://github.com/ioalex/gobble

## Acknowledgements

- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [SASS](https://sass-lang.com/)
- [Gulp](https://gulpjs.com/)
- [HTMLHint](https://htmlhint.com/)
- [Terser](https://terser.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [PostCSS/Autoprefixer](https://github.com/postcss/autoprefixer)

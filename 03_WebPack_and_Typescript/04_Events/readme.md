# 02 Boilerplate Using Webpack and Typescript

In this sample we are going to setup a web project that can be easily managed by webpack.

We will setup an initial **npm** project and give support to TypeScript.

Summary steps:

- 

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.x.x or higher) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Create and navigate to the folder where you are going to create the empty project.

- Execute `npm init`, you will be prompted to answer some information about the project (e.g. set name to _sample-vue-js_ and description to _Sample working with TypeScript and Webpack_).
Once you have successfully fullfilled them a **package.json** file we will generated.

```bash
npm init
```

- Install **webpack** as a development dependency.

```bash
npm install webpack webpack-cli --save-dev
```
- Install **webpack-dev-server** locally, as a development dependency (the reason to install it locally instead of globally is for it to be easy to setup, e.g. It can be launched on a clean machine without having to install anything globally but nodejs).

```bash
npm install webpack-dev-server --save-dev
```

- Let's install a list of plugins and loaders that will add powers to our webpack configuration (handling <abbr title="Cascading Style Sheets">CSS</abbr>, TypeScript...).

```bash
npm install awesome-typescript-loader css-loader file-loader html-webpack-plugin mini-css-extract-plugin url-loader  --save-dev
```

- Let's add two commands to our **package.json** to build and start.

_[package.json](./package.json)_
```diff
  "scripts": {
+    "start": "webpack-dev-server",
+    "build": "webpack"
  },
```

- Let's install locally TypeScript:

```bash
npm install typescript --save-dev
```

- We need as well to drop a **tsconfig.json** file in the root folder of our project

_[tsconfig.json](./tsconfig.json)_
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "sourceMap": true,
    "noLib": false,
    "suppressImplicitAnyIndexErrors": true
  },
  "compileOnSave": false,
  "exclude": [
    "node_modules"
  ]
}
```

- Since we had configured TypeScript to work with ES6, we need to install `babel` to transpile to ES5:

```bash
TypeScript transpile to ES6 files and Babel transpile to ES5 files
      TypeScript            Babel
.ts ============> ES6 .js =========> ES5 .js
```

```bash
npm install babel-core babel-preset-env --save-dev
```

- Add `.babelrc`:


_[.babelrc](./.babelrc)_
```diff
{
  "presets": [
    "env"
  ]
}
```

- Let's install bootstrap:

```bash
npm install bootstrap@3 --save
```

- Now, our **package.json** file should look something like:

_[package.json](./package.json)_
```json
{
  "name": "02_boilerplate_using_webpack_and_typescript",
  "version": "1.0.0",
  "description": "Boilerplate Using Webpack and Typescript",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "awesome-typescript-loader": "^5.0.0",
    "babel-core": "^6.26.3",
    "babel-preset-env": "^1.7.0",
    "css-loader": "^0.28.11",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.4.0",
    "typescript": "^2.8.3",
    "url-loader": "^1.0.1",
    "webpack": "^4.8.3",
    "webpack-cli": "^2.1.3",
    "webpack-dev-server": "^3.1.4"
  },
  "dependencies": {
    "bootstrap": "^3.3.7"
  }
}
```

- Let's create a subfolder called **[/src/](./src/)**.

```sh
mkdir src
```

- Let's create a basic **main.ts** file (under **src** folder):

_[/src/main.ts](./src/main.ts)_
```javascript
document.write("Hello from main.ts !");
```

- Let's create a basic **index.html** file (under **src** folder):

_[/src/index.html](./src/index.html)_
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vue.js by sample</title>
  </head>
  <body>
    <div id="app">
      <h1>Sample app</h1>
    </div>
  </body>
</html>
```

- Now it's time to create a basic **webpack.config.js** file, this configuration will
 include plumbing for:
 - Launching a web dev server.
 - Transpiling from TypeScript to JavaScript.
 - Setting up Twitter Bootstrap (including fonts, etc...).
 - Generating the build under a **dist** folder.

_[webpack.config.js](./webpack.config.js)_
 ```javascript
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var { CheckerPlugin } = require('awesome-typescript-loader');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts'],
  },
  mode: 'development',
  entry: {
    app: './main.ts',
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
    ],
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            useCache: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
      // Using here url-loader and file-loader
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CheckerPlugin(),
  ],
};
```

- To get a better experience debugging `vue` we can install Vue devtools. It's a Chrome extension.

Install `vue` library as project dependency:

```bash
npm install vue --save
```

This library has its own TypeScript definition file, so we don't need install other typings.

Configure [webpack.config.js](./webpack.config.js) to set vue.js as vendor:

- Run webpack with:

_[webpack.config.js](./webpack.config.js)_
```diff
...
  entry: {
    app: './main.ts',
+   vendor: [
+     'vue',
+   ],
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
    ],
  },
...
```

- Recommended configuration for [tsconfig.json](./tsconfig.json):

_[tsconfig.json](./tsconfig.json)_
```diff
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "sourceMap": true,
    "noLib": false,
-   "suppressImplicitAnyIndexErrors": true
+   "suppressImplicitAnyIndexErrors": true,
+   "strict": true
  },
  "compileOnSave": false,
  "exclude": [
    "node_modules"
  ]
}
```

- There are [two builds available](https://vuejs.org/v2/guide/installation.html#Explanation-of-Different-Builds) to work with Vue.js.

  - `Runtime + Compiler`: needed to compile templates on the client side, e.g. passing a string to `template` property.

  - `Runtime-only`: when using a `pre-compiler` like `vue-loader`, `vueify`, etc.

- For now, we could start using first one to keep this sample as simple as possible. To configure it for webpack:

_[webpack.config.js](./webpack.config.js)_
 ```diff
...
resolve: {
    extensions: ['.js', '.ts'],
+   alias: {
+     vue: 'vue/dist/vue.js',
+   },
  },
...
```

```bash
npm start
```

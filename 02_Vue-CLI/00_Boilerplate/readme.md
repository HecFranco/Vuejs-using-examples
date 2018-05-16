# 01 Boilerplate Using Vue-CLI and ES6

In this sample we are going to setup a web project that can be easily managed by webpack.

We won't install anything related to Vue.js, just some basic plumbing.

We will setup an initial **Vue-CLI** project.

Summary steps:

- 

# Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.x.x or higher) if they are not already installed on your computer. 

You will also need to have **Vue-CLI** installed globally.

[Vue.js](https://vuex.vuejs.org/en/) provides an official CLI to quickly structure Single-page Applications (SPA). Provides **all-in-one** configurations for a modern frontend workflow. It only takes a few minutes, it's ready for development with: hot top-up, **lint-on-save** and ready-made versions:

```bash
`npm install -g @vue/cli`
```

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v`, `npm -v` and `vue -V` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Create and navigate to the folder where you are going to create the empty project.

- Execute `vue create webapp` to create a new **webapp** project, you will be prompted to answer some information about the project.Once you have completed this information successfully, the **package.json** file will be generated.

```bash
vue create webapp
```

```bash
cd webapp
npm run serve
```

- We will have a [/src/main.js](./src/main.js) like this

- Let's create a basic **main.ts** file (under **src** folder):

### ./src/main.ts
```javascript
document.write("Hello from main.ts !");

```

- Let's create a basic **index.html** file (under **src** folder):

### ./src/index.html
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
    <div class="well">
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

### ./webpack.config.js
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

- Run webpack with:

 ```
 npm start
 ```

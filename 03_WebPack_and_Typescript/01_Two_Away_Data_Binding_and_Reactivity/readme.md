# 01 Two Away Data Binding and Reactivity

In this sample, we will understand the use of **Two Away Data Binding** and **Reactivity** in Vue.

We will take a startup point sample [00_Boilerplate](../00_Boilerplate/):

Summary steps:

- 

# Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.x.x or higher) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

Copy the content from [00_Boilerplate](../00_Boilerplate/) and execute:

```bash
npm install
```

## Steps to build it

_[/src/index.html](./src/index.html)_
```diff
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
--    <h1>Sample app</h1>
    </div>
  </body>
</html>
```

_[/src/main.ts](./src/main.ts)_
```diff
-- document.write("Hello from main.ts !");
```

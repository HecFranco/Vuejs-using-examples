# 01 Boilerplate Using Vue-CLI and ES6

In this sample we are going to setup a web project that can be easily managed by **Vue-CLI**.

Summary steps:

- 

# Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.x.x or higher) if they are not already installed on your computer. 

You will also need to have **Vue-CLI** installed globally. [Vue.js](https://vuex.vuejs.org/en/) provides an official CLI to quickly structure Single-page Applications (SPA). Provides **all-in-one** configurations for a modern frontend workflow. It only takes a few minutes, it's ready for development with: hot top-up, **lint-on-save** and ready-made versions:

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

- Access to the project's folder.

```bash
cd webapp
```

> Run `npm install` if you do not have the folder [node_modules](./webapp/node_modules/) inside the project.

- Execute `npm run serve` to launch the project server.

```bash
npm run serve
```

- Now you can view the result of installation accessing to [http://localhost:8080/](http://localhost:8080/).
# Intro

This is an example of single-spa micro-frontends app with layout-app using vueJs.

It uses [single-spa](https://single-spa.js.org) to pull this off, which means that you can even add React, Angular, or other frameworks as
additional microfrontends.

## An important note
This github repository has six projects all in one repo. But when you do this yourself, **you'll want to have one git repo per
vue application**. The root-html-file project should also be in its own repo. This is what lets different teams and developers be in
charge of different microfrontends.


## Local development -- all at once
It is preferred to only run one app at a time. But if you need to run them all locally, you can do so with the following instructions

```sh
# First terminal tab
cd root-html-file
npm install
npm run serve
```
```sh
# Second terminal tab
cd app1
npm install
npm run serve
```

```sh
# Third terminal tab
cd app2
npm install
npm run serve
```

```sh
# Fourth terminal tab
cd app-derick
npm install
npm run serve
```

```sh
# Fourth terminal tab
cd single-spa-layout-app
npm install
npm run serve
```

Now go to http://localhost:5000 in a browser. Note that you can change any of the ports for the projects by modifying the Import Map inside of
root-html-file/index.html.


## More documentation
Go to https://single-spa.js.org/docs/ecosystem-vue.html to learn how all of this works.

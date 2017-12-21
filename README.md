# tensorcats

> A minimal markdown CMS with LaTeX support in Vue with a Firebase backend.

## Prereqs
- Install [NodeJS](https://nodejs.org/en/download/)
- Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- Install [Vue CLI](https://github.com/vuejs/vue-cli) with `yarn global add vue-cli`
- For better debugging, install the [Vue.js devtools for Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- Install [Firebase CLI](https://firebase.google.com/docs/cli/) with `yarn global add firebase-tools`

## Configuring Firebase
You'll need a [Firebase](https://firebase.google.com/) account. Make sure to enable Firestore as your database (which defaults to Firebase classic). You'll then need to create an /.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

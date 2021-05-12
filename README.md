# Librix — The Frontend

This project uses React Native with Expo.

## Libraries

1. [React Navigation](https://reactnavigation.org/)
2. redux and react-redux
3. axios
4. ...

## Running locally

After cloning the repo, don't forget to install the dependencies!

## Collaboration flow

1. Pull the latest changes from the main branch
2. To work on a task or feature, create a new branch.
3. Commit often ;)
4. When ready, push to a new remote branch. (Never push to main!)
5. Create a Pull Request and assign a person who will review the PR.
6. Switch to the main branch to pull the latest changes.
7. Create a new branch...
8. :infinity:

## A note on linters

Make sure you have ESLint installed and enabled in VSCode:

`Code => Preferences => Extentions => ESLint`

ESLint configuration from react-native-community:

`npm install eslint @react-native-community/eslint-config --save-dev`

Config files:

```javascript
// .eslintrc.js

module.exports = {
  root: true,
  extends: '@react-native-community',
};
```

```javascript
// .prettierrc.js

module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
};
```

A script in `package.json`:

`"lint": "eslint ."`

# cdl-cart

## Description
This is what I could do within 1:45 hours. 
To keep the stablished deadline, I opted for using VueJS Framework, since I have more proficiency in it.
After initializing the project, I started building all the logic around the cart. So, I created a composable called “useCart”. A composable “is used to encapsulate and reuse stateful logic" in Vue. With this I could share reactive data across components and reuse methods without the need of using Vuex (Redux equivalent) nor use just props creating which is called "props drilling".
Then I started to create the components and lastly I started to stylizing them. 
There is a list of things that I would’ve done if I had more time, such as: 

-	Finish stylizing components
-	Add a library called Dinero to format all currency values (I should’ve prioritize it before styling but I just figured out when it was too late, unfortunately) 
-	Add unit tests (I didn’t because I wasn’t so sure if I would make it within the deadline, so I opted for letting it out)
-	Add a library to use icons and make interface more friendly
-	Make the website responsive
-	Add WACG practices to make the website fully accessible 

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

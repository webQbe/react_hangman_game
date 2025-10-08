# React Hangman Game
This repo is an adaptation of [Build Hangman With React](https://www.youtube.com/watch?v=jj0W8tYX_q8&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=28&pp=iAQB) by CodeSTACKr. 

I followed the tutorial to learn followings:
- Using modern React with Hooks such as **`useState`** and **`useEffect`** hooks
- Using the hooks to control the app and dataflow
- Breaking code into components

## Getting Started

1. Download and Install **Node.js**
2. Open project folder in VSCode Integrated Terminal
3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter
4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` in `defineConfig()`
5. Install dependencies:
    - Open terminal and run `npm install`
6. Delete: `public/vite.svg`, `src/assets`, `src/index.css`
    1. Remove `import './index.css'` from `src/main.jsx`
    2. Modify `src/App.jsx` and Remove:
        - `import reactLogo from './assets/react.svg'`
        - `import viteLogo from '/vite.svg'`
        
    3. Clear contents in `src/App.css`

7. Start Development Server: 
    ```
    npm run dev 
    ``` 

## Credits
Original tutorial: [Build Hangman With React](https://www.youtube.com/watch?v=jj0W8tYX_q8&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=28&pp=iAQB) — Traversy Media.

## License
MIT License
To create vite react app with typescript -

npm create vite . --template react-ts

npm install

===================================================

Install and configire Tailwind CSS in react vite app -

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

===================================================

Inside taiwind.configue.js - 

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

===================================================

Inside index.css - 

@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

===================================================

Make Home, Search page and Watch page in page folder

Make routing for each page in App.tsx

![image](https://github.com/kiransalve/ytclone-typescript/assets/90862340/6b6032ab-19fa-4cc4-bf2b-e09240c24c1b)

Make Navabr component in component folder

Make logo left side of page 

![image](https://github.com/kiransalve/ytclone-typescript/assets/90862340/89cb20b7-6367-45cc-87fb-7c0a9e742662)

![image](https://github.com/kiransalve/ytclone-typescript/assets/90862340/eb1e039a-83f7-4a8c-bf91-3b78fc3e2c5b)

Make searchbar 

![image](https://github.com/kiransalve/ytclone-typescript/assets/90862340/551d9347-3c06-4b05-a4da-06f5a21fc8d1)

Render Navbar in Home.tsx

![image](https://github.com/kiransalve/ytclone-typescript/assets/90862340/6919dc03-8081-48e4-bd9f-a4f4d6171214)










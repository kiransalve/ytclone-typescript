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

![image](https://github.com/kiransalve/ytclone-typescript/assets/90862340/af3901f2-f2d4-4dd2-8a15-7798e4db6bc4)

Make Navabar component in component folder

![image](https://github.com/kiransalve/ytclone-typescript/assets/90862340/3f18ee42-b057-4d1b-a3bb-933c6eb8e9a5)

Make logo left side of page 

![image](https://github.com/kiransalve/ytclone-typescript/assets/90862340/0c480b10-f0b8-4c6a-a538-5e1bc709b2f1)

Make searchbar 

![image](https://github.com/kiransalve/ytclone-typescript/assets/90862340/0a6ff2a4-eea1-4aea-9c87-cf72cca5cd4c)

Render Navbar in Home.tsx

![image](https://github.com/kiransalve/ytclone-typescript/assets/90862340/df16b742-8d5e-4992-9ae1-b479ac6c0da5)











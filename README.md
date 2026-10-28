# Personal portfolio

A responsive portfolio built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd install` and `npm.cmd run dev` if script
execution policy blocks the `npm` command. Open the local URL printed by Vite
(usually `http://localhost:5173`) instead of double-clicking `index.html`.

Create a production build with `npm run build`, or preview it locally with
`npm run preview`.

## Personalize the content

Update the name, email, introduction, skills, projects, and education details in
`src/data/portfolioData.js`. The contact form uses the email address in that
file and opens the visitor's default email app with their message prefilled.
Replace the sample project links and project descriptions with your own work.

The site is organized by reusable UI components in `src/components/` and
page sections in `src/sections/`. Global styling and responsive layouts are in
`src/styles/global.css`.

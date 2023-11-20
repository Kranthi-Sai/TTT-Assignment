Terribly-tiny-tales-Assignment:

Develop a frontend in Reactjs or Nextjs, which does the following:
1. Renders a "profile screen" as follows: https://www.terriblytinytales.com/profile.jpeg (this is a sample screenshot taken from mobile view)
2.The profile data can be hardcoded in a local JSON and need not have a backend.
3.The screen when opened on different mobile types, should render consistently. This can be checked in Chrome Inspect in mobile view, by changing device types or on actual physical devices
Netlify:  https://ttt-kranthi.netlify.app/
index.js:
This code initializes a React app with strict mode enabled and sets up the application's root component using React Router within a Browser Router.
App.js:
defines the main structure of the app, rendering a layout that includes a header, footer, and a component handling all routes .
routes->AllRoutes:
this define a routing setup using React Router, directing specific paths to respective page components within the main app structure consisting of a header, footer, and the defined routes.
pages->Home:
defines a "Home" component rendering a profile header, a list of posts, and profile details, utilizing specific data sets and components for display .
hooks->useTitle:
creates a custom React hook named useTitle that dynamically updates the document title with the provided title string followed by " | TTT" (presumably an abbreviation for a website or application) whenever the title value changes
In component folder I defined all components and their respective css files.
Using props and destructing I took data and used in respective components .
Used icons:
npm i react-checkmark 
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
For Routing:
npm install react-router-dom@6

steps to run in ur local desktop:
npm install nodemodule
npm install react-router-dom@6
npm i react-checkmark 
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
npm start



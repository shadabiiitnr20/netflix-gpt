## NetflixGPT

- npm init
- install parcel as dev dependency
- configure index.html, index.css and App.js inside src folder
- install react, react-dom
- run the app by setting up everything
- configure TailwindCSS
- install react-router-dom and configure routing
- Build Header component
- Build Login/SignUp form
- Form Validation
- useRef hook
- Firebase Setup
- Deploying App to Production
- Create SignUp User Account
- Implement Sign In user API
- Created Redux Store with userSLice
- implemented SignOut
- Update Profile
- Fetch Movies from TMDB movies api
- Bug Fix: Sign Up Username
- Bug Fix: If the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardedCoded values to Constant files
- Registered for TMDB website, get access token
- go to documnetation, get Data from TMDB now playing movies API 
- create slice for Now Playing Movies and provide the movies list to the store
- create a Custom hook to fetch the movies list
- Planning for UI added CSS
- Fetch data for Trailer video, updated store, fetch the trailer
- Embedded the Youtube video and made it autoplay and mute
- Did the styling
- Build the secondary container
- Build Movie List Component
- Build Movie Card
- TMDB Image CDN URL
- Styled the browser page
- Making other list suggestions
- Making Trailer Page for all the movie cards (issue: route is not protected)
- Making error Route
- Username Dropdown
- Building GPT search feature, create a button on header
- GPT search page
- GPT search bar
- Multi Lingual Support
- Integrate GPT APIs/ get OpenAI keys (paid API key)
- Memoization feature in custom hooks
- Added .env file and secured our API keys


## Firebase Commands - 
- before rinning the command 'firebase login'. Please install firebase CLI using the command
"npm install -g firebase-tools"
- check with firbase login
- firebase init
- firebase deploy
- https://stackoverflow.com/questions/53718983/my-react-project-not-working-after-deploy-to-firebase-hosting



## Feature to be built

- Login/Signup

  - SignIn/SignUp form
  - redirect to Browse page

- BrowsePage (after authentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Movie Title and Description
  - Movie Suggestions
    - Movie List \* N

- Netflix + GPT Page
  - search bar
  - movies recommendation

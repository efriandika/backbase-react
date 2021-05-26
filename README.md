# Backbase Assignment

This is also available on [Live Demo](https://efriandika.github.io/backbase-react/) that I hosted on my GitHub Pages 

## Architecture

I call this architecture that I use in this project as `Component centric` architecture. What are the advantages?
* It is loosely coupled and reusable. 
* Scalable. 
* It uses lazy load when opening a page. So that, you only load the file you need on that page to reduce load time on the client side.
* Implement single responsibility principe

All of these are very useful especially when building react app that is always getting larger. It will help us to maintain thousands components easier.

PS:
In this sample project. I stored the API KEY at `.env` file (`REACT_APP_BACKEND_API_KEY`) which is not secure. It can be improved by creating proxy backend and store the API key on the backend side so that we don't need API KEY stored on client side anymore

> I am sure this architecture design is still not perfect yet. 
> But, I am always open and learning all time to make it great! :D

## Directory Structure

```
project
│   .editorconfig (to make sure we are using same style on every IDE)
│   .env
│   .gitignore
│   package.json
│   README.md
│   
└───public
│   │   ...
│   
└───src
│   │   App.js
│   │   App.test.js
│   │   index.js
│   │   routes.js (Router mapping)
│   │   setupTests.js
│   │
│   └───components (Reusable component will goes here)
│   └───libs (Hooks, application owned js libs: http, etc...)
│   └───pages (Container component / pages that is routed by react router)
│   └───redux (All of things about redux: actions, reducers, types)
│   └───resources
│       └───styles (Global SCSS File)
│       └───vendor (Styling file from 3rd party libs that we are going to override / change)
```

## How to Run?

```
yarn start
```

Since I use free service of **openweathermap.org**, it has rate limit = 60 request / minutes.
If you would like to change the api key, it can be configured at `.env` file:
```
REACT_APP_NAME="City Weather App"

REACT_APP_BACKEND_BASE_URL="https://api.openweathermap.org/data/2.5"
REACT_APP_BACKEND_API_KEY="d91fa5e792320c4bd3a18bb475e1c7ea"
```

## Author

* [Efriandika Pratama](https://www.linkedin.com/in/efriandika/)

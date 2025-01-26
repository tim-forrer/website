A personal website that I'm using to learn next.js and app deployment.

# Structure
This is a record for myself in case I forget where things are meant to go.

- `components`: Code recyling of things to be inserted on pages.
  - CSS stylesheets for each component also live here, as `.module.css` files.
- `lib`: Utility functions that get, process, and export data.
- `pages`: These `.js` files export the pages of the website.
  - `[ ].js` files allow for re-use of same page structure, just populated with different data.
- `projects`: Contain `.md` files detailing projects.
- `public`: Contains image files.
- `styles`: Contains CSS stylesheets.


# Tasks

## Backend
- Add project pages.
- Add a Chatbot that can answer questions about me.

## UI
- Add a minimum width for mobile


# Chatbot
I'm running a local version of IBM's `granite3-dense:8b`. I chose this because of it's advertised specialty of working with RAG - something that I'm taking advantage of to get the Chatbot to reply to questions about me without having to retrain an LLM on my data.

This will then be hosted on a webserver, and requests will be made to it via API requests.
The ChatUI on my website will send `POST` requests to the API, and what's returned will be displayed in the window to the website user.
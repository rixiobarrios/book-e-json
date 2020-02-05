# Book-e JSON API

Starter code + solution code for the book-e json api.

## Setup Instructions

1. Fork and clone this repository.
1. `cd` into the newly created folder called `book-e-json`.
1. `git checkout solution` to see the solution branch with comments!
1. Run `npm install`.
1. Run `brew services restart mongodb-community`, if mongo isn't already running.
1. Run `node db/seed`. This will run `seed.js` in the `db/` directory. 
1. Hit `ctrl + c` to exit the process and get back control of your terminal.
1. Run `nodemon`. If nodemon is not installed, `npm i -g nodemon` will install it globally.
1. Navigate to `localhost:8080` in your browser. You should see some bookmarks data.

## Solution Code

The solution branch has comments in various files describing what each part does.

Make sure you switch back to master (`git checkout master`) before working on it.

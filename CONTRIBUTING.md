# How To
1. Fork this repo
2. Clone your forked repo to your local machine
3. Open a terminal/cmd window and cd (change directory) into the `src/` folder
4. Type `npm install` to install all node.js packages (If you don't have node, dl it here: https://nodejs.org/en/)
5. Type `npm run dev` to run the "developer server." This will start your website up on `http://localhost:3000/` Every time you save or modify the website, the site will autoreload itself. If the site doesn't update, then just reload the page instead.
6. Open `http://localhost:3000/` in your browser so you can see the website change as you're editing.
7. Make necessary changes (see position specific procedure below to see how to update agendas, members, officers, etc.)
8. Once all changes are made cd (change directory) to the `/` folder
9. Type `git add .` in the terminal
10. Type `git commit -m "Message here, Example: added agenda for 3/17/22"
11. Type `git push`

# Secretary Procedure
The secretary is in charge of keeping the agenda up-to-date.<br>
`/src/data/agendas.js` is where all agenda data is stored

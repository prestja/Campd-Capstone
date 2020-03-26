# Campd-Capstone
Team Campd Capstone Project Repo

1. Download node.js includes npm
2. npm install create-react-app
3. npx create-react-app <appname>
4. locate "src" file
5. put github src files inside
6. in terminal: cd into folder <appname>
7. npm install react-router react-router-dom react-bootstrap bootstrap
8. yarn start
9. localhost:3000 should open in browser automatically

#To Deploy to Firebase
1. npm install -g firebase-tools
2. npm run build
3. firebase login (browser will open, login using group account)
4. select "hosting", press enter
5. select use an exisiting project
6. for "What do you want to use as your public directory?" Type in: "build"
7. "Configure as a single-page app?" Type in: Y
8. If it asks if you want to overwrite any files, choose "N"
9. (back in terminal) firebase deploy
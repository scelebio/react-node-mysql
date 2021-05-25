Sarper Celebioglu
May 2021,
celebioglusarper@gmail.com

CARNA TAKE-HOME PROJECT

This is a React-Node-MySQL based full stack web application.
The app has a registration page with the login option and the admin console if the user is authorized to log in.
A new user can be created through the registration part. the user name and passcode submitted are kept in the mySQL LoginSystem table with "id", "username" and "password" columns.
There is a login button that checks the username and the password combination is exist/correct.
If the username and/or password is incorrect, the admin console will not be visible to the user.
When the user login with the correct combination of username and password, profile link will be activated by using router.

Admin console has been designed as an English-German dictionary.
The user can Create, Read, Update and Delete the content.
Wtih the loading of the admin page, all the English-German word translation is listed for the user. (READ)
The user can create new translations. The new content is listed right away without refreshing the page.
On the same page, the user update and/or delete the translation. English words are selected as primary and have incremented IDs.
If a German translation needs to be updated, the update button can be used. When it comes to English words, the user needs to delete the English word first and create the update verrsion.
After update and delete functions, the page needs to be refreshed to see what has been done.
Comments can be found on the backend side. Variable names on front end have been set in accordance to their functions.

To start the app            :$ npm start
to start the server side    :$ npm run devStart

The functions/extras that are not included in this project:
-JWT authentication
-user roles
-filters for list of users
-end to end tests
-comments in code
-load test script for 100 concurrent requests.


To use the web app, please make sure react, node and mysql are install to your PC or Mac.

Some packages may or may not be required to run the app, depending on the user.
Below you can find the packages may need to be installed.

-express
-body-parser
-nodemon
-react-router-dom
-express-session
-cookie-parser
-cors
-axios

Below you can find the server side MySQL credientials:

    host: "localhost",
    user: "root",
    password: "Password!11",
    database: "new_schema",

Username and Password table:
Table Name: LoginSystem
1st column: id
2nd column: username
3rd colimn : password

English-German Translation Data table:
Table Name: new_table
1st column: idnew_table
2nd column: eng
3rd colimn : ger

Areas for improvements:
-JWT authentication
-user roles (admin,mod,user)
-UX. it is obvious that I couldn't focus on the design. I prioritized that the app is running properly as requested.

In case of any questions, please feel free to contact me through the contact information on header.
Thank you for your valuable time and consideration.
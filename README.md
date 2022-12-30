# Steps to spin up the server locally

1. Pull the repo to the local system.

2. Install needed packages.

   - Navigate to the repo on the local machine and open up a command-line interface (terminal) run command:`npm install`

3. Set up MySQL connection.

   - Download and install MySQL Work and Server.
   - Set up a new connection to MySQL.

4. In the project's, directory go to config/config.json. There make sure that the parameters for the `"development": {}` match the credential of your MySQL Connection.

5. In a terminal `cd` into the project's directory. Type and execute the following commands:

   - To create the DB: `npx sequelize-cli db:create`

   - To Migrate your JS definitions to MySQL: `npx sequelize-cli db:migrate`

   - To populate database from seed files located in the seeders folder: `npx sequelize-cli db:seed:all`

6. Start the server.

   - Use either one of these commands: `node server.js` or `nodemon server.js`

(Nodemon simple keeps your server up to date with code changes so you don't have to stop and start the server after each change)

# How to access server

Look into the server.js and routes folder to find out what routes are available and use a tool like Postman to interact with the API. Examples:


Examples:
![image](https://user-images.githubusercontent.com/55215013/163691915-54da9172-a9bb-4014-ab63-c915cd3703ce.png)
![image](https://user-images.githubusercontent.com/55215013/163691926-55c3ae69-570a-4c4b-99cd-fc901a766077.png)
![image](https://user-images.githubusercontent.com/55215013/163691934-07a3feff-289e-4677-9ca5-073aea00fe14.png)
![image](https://user-images.githubusercontent.com/55215013/163691947-cd1c9e02-3f05-433d-a2fe-53e1ab703c9a.png)
![image](https://user-images.githubusercontent.com/55215013/163691957-ad322a30-ee04-4aaf-be50-16c12cd2a08c.png)

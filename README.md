Installation and Running the Client
To install dependencies and run the client, follow these steps:

Install dependencies:

npm install

Install webpack-cli as a dev dependency:

npm install -D webpack-cli

Run the client:

npm run start

Installation and Running the Server

To install dependencies, run database migrations, and start the server, follow these steps:

Install dependencies:

npm install

Run database migrations:

npx sequelize-cli db:migrate

Run seeds

npx sequelize-cli db:seed:all

Start the server:

npm run start

// express, cors, bodyparser
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
// Look into cors options later
// var corsOptions = {
//   origin: "http://localhost:8081"
// };
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// get and sync db
const db = require('./models/index');
const { Role } = db;

// hange this for production
db.sequelize.sync({ logging: console.log }).then(() => {
  console.log('Resync DB');
  // initial();
});

// end of code to be changed

// simple route
app.get('/', (req, res) => {
  res.json({
    message: `Welcome to FoodPantry server application. ${process.env.NODE_ENV}`,
  });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/receiver.routes')(app);
require('./routes/package.routes')(app);
require('./routes/item.routes')(app);

//listen on port
const port = process.env.PORT;
let server = app.listen(port || 3000, function onListen() {
  var address = server.address();
  console.log('Listening on: %j', address.address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});

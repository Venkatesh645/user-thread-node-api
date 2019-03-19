var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
const usersHandler = require('./handlers/users.handler');
const sessionsHandler = require('./handlers/sessions.handler');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

app.use('/api', router);

router.get('/', (req, res) => {
  res.json({data: "Welcome"});
});
router.post('/signin', sessionsHandler.signin);
router.post('/register', usersHandler.create);

app.listen(port);
console.log('Server started at: localhost:' + port);

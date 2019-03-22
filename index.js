var express    = require('express');
var app        = express();
const cors = require('cors');
var bodyParser = require('body-parser');
require('dotenv').config();
const jwt = require('./helpers/jwt');
const usersHandler = require('./handlers/users.handler');
const sessionsHandler = require('./handlers/sessions.handler');
const threadsHandler = require('./handlers/threads.handler');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());
app.use(jwt());

var port = process.env.PORT || 8080;
var router = express.Router();

app.use('/api', router);


router.get('/', (req, res) => {
  res.json({data: "Welcome"});
});
router.post('/signin', sessionsHandler.signin);
router.post('/register', usersHandler.create);
router.get('/thread/list', threadsHandler.list);
router.post('/thread/create', threadsHandler.create);

app.listen(port);
console.log('Server started at: localhost:' + port);

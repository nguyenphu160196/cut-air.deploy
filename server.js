const express = require("express");
const path = require('path');
const history = require('connect-history-api-fallback');

const port = process.env.PORT || 8080;
const cors = require('cors');

const app = express();
const server = require('http').Server(app);

app.set('view engine', 'ejs');
app.set('views','./dist');

app.use(cors());
app.use(express.static(path.join(__dirname, '/dist')));

app.use(history({
    index: '/'
  }));

app.get("/", (req, res) => {
  res.render('index');
})

server.listen(port, () => console.log('Server is running on port ' + port));



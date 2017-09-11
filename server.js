const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/tml', require('./api/v1/tml'));

app.listen(PORT, () => {
  console.log('TML-Feeder listening on port ' + PORT);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const corsOptions = {
    origin: process.env.ALLOWED_ORIGIN || 'localhost'
}
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors(corsOptions));
app.use('/api/v1/tml', require('./api/v1/tml'));

app.listen(PORT, () => {
  console.log(process.env.ALLOWED_ORIGIN);
  console.log('TML-Feeder listening on port ' + PORT);
});

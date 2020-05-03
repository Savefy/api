require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();

app.get('/', (req, res) => res.status(200).send('Hello World!'));
app.use('/api', router);
app.use(cors({ credentials: true }));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server connected on port 3000');
});

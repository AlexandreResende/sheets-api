const { urlencoded } = require('express');
const express = require('express');

const { addRecordController } = require('./src/controllers/add-record-controller');

const app = express();

const PORT = 3000;

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.get('/health-check', (req, res, next) => {
  res.status(200).send({ message: 'OK' });
});
app.post('/add-record', addRecordController);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
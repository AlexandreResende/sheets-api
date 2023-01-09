const { GoogleSpreadsheet } = require('google-spreadsheet');
const { GoogleSheetsService } = require('../services/google-sheets-service');

const addRecordController = async (req, res, next) => {
  const { month, year, value, description } = req.body;
  const googleSheetsService = new GoogleSheetsService();

  await googleSheetsService.addRecord(month, year, value, description);

  res.status(201).json({ message: 'created' });
};

module.exports = { addRecordController };

require('dotenv').config();

module.exports = {
  SPREADSHEET_ID: process.env.SPREADSHEET_ID,
  SHEET_ID: process.env.SHEET_ID,
  CLIENT_EMAIL: process.env.CLIENT_EMAIL,
  CLIENT_PRIVATE_KEY: process.env.CLIENT_PRIVATE_KEY,
};
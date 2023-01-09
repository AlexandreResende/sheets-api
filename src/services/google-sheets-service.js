const { GoogleSpreadsheet } = require('google-spreadsheet');

const {
  SPREADSHEET_ID,
  SHEET_ID,
  CLIENT_EMAIL,
  CLIENT_PRIVATE_KEY,
} = require('../environment');

class GoogleSheetsService {
  constructor() {}

  async getDoc() {
    const document = new GoogleSpreadsheet(SPREADSHEET_ID);

    await document.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: CLIENT_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
    await document.loadInfo();

    return document;
  }

  async addRecord(month, year, value, description) {
    const document = await this.getDoc();

    try {
      await document.sheetsById[SHEET_ID].addRow({
        mes: month,
        ano: year,
        concatenacao: `${month}/${year}`,
        valor: value,
        descricao: description,
      });
    } catch (err) {
      console.log(err)
      throw new Error(err)
    }
  }
}

module.exports = { GoogleSheetsService };

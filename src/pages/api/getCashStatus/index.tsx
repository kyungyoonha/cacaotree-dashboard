import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";
const { GoogleSpreadsheet } = require("google-spreadsheet");

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
    });
    await doc.getInfo();
    let sheet = doc.sheetsByTitle["Booking"];
    await sheet.loadCells("B4:E4");

    const spaPeso = sheet.getCellByA1("B4")._rawData.effectiveValue.numberValue;
    const spaDollar =
      sheet.getCellByA1("C4")._rawData.effectiveValue.numberValue;
    const spaWon = sheet.getCellByA1("C4")._rawData.effectiveValue.numberValue;
    const managerPeso =
      sheet.getCellByA1("E4")._rawData.effectiveValue.numberValue;

    const result = {
      spaPeso,
      spaDollar,
      spaWon,
      managerPeso,
    };

    res.status(200).json({ ok: true, result });
  } catch (error) {
    // console.log(error);
    console.log("error");
    res.status(500).json({ ok: false, error });
  }
}

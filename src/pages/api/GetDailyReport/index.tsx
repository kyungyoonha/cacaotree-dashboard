import type { NextApiRequest, NextApiResponse } from "next";
const { GoogleSpreadsheet } = require("google-spreadsheet");

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

type Result = ResultTemp[];
type ResultTemp = string[];

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
    let sheet = doc.sheetsByTitle["Daily Report"];
    await sheet.loadCells("A4:J22");

    const totalGuest =
      sheet.getCellByA1("B4")._rawData.effectiveValue.numberValue;
    const incomePlus =
      sheet.getCellByA1("C4")._rawData.effectiveValue.numberValue;
    const imcomeMinus =
      sheet.getCellByA1("D4")._rawData.effectiveValue.numberValue;
    const totalIncome =
      sheet.getCellByA1("E4")._rawData.effectiveValue.numberValue;

    const topListPlus: Result = [];
    const columnIndex = ["B", "C", "D", "E", "E", "F", "G", "H", "I"];
    const rowStartIndex_plus = 8;
    new Array(5).fill(null).map((_, rowIdx) => {
      const rowTemp: ResultTemp = [];
      columnIndex.forEach((colIdx) => {
        const data =
          sheet.getCellByA1(`${colIdx}${rowStartIndex_plus + rowIdx}`)._rawData
            .formattedValue || "";
        rowTemp.push(data);
      });
      topListPlus.push(rowTemp);
    });

    const topListMius: Result = [];
    const rowStartIndex_minus = 16;
    new Array(5).fill(null).map((_, rowIdx) => {
      const rowTemp: ResultTemp = [];
      columnIndex.forEach((colIdx) => {
        const data =
          sheet.getCellByA1(`${colIdx}${rowStartIndex_minus + rowIdx}`)._rawData
            .formattedValue || "";
        rowTemp.push(data);
      });
      topListMius.push(rowTemp);
    });

    const result = {
      totalGuest,
      incomePlus,
      imcomeMinus,
      totalIncome,
      topListPlus,
      topListMius,
    };

    res.status(200).json({ ok: true, result });
  } catch (error) {
    console.log("error");
    res.status(500).json({ ok: false, error });
  }
}

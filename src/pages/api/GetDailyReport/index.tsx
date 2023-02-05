import type { NextApiRequest, NextApiResponse } from "next";
const { GoogleSpreadsheet } = require("google-spreadsheet");

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

type Result = ResultTemp[];
type ResultTemp = {
  [key: string]: string;
};

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

    const topListPlus: Result = [];
    const columnIndex = [
      { key: "rank", index: "B" },
      { key: "date", index: "C" },
      { key: "category", index: "D" },
      { key: "type", index: "E" },
      { key: "incharge", index: "F" },
      { key: "incomePlus", index: "G" },
      { key: "incomeMinus", index: "H" },
      { key: "detail", index: "I" },
    ];
    const rowStartIndex_plus = 8;
    new Array(5).fill(null).map((_, rowIdx) => {
      const rowTemp: ResultTemp = {};
      columnIndex.forEach(({ key, index }) => {
        const data =
          sheet.getCellByA1(`${index}${rowStartIndex_plus + rowIdx}`)._rawData
            .formattedValue || "";
        rowTemp[key] = data;
      });
      topListPlus.push(rowTemp);
    });

    const topListMius: Result = [];
    const rowStartIndex_minus = 16;
    new Array(5).fill(null).map((_, rowIdx) => {
      const rowTemp: ResultTemp = {};
      columnIndex.forEach(({ key, index }) => {
        const data =
          sheet.getCellByA1(`${index}${rowStartIndex_minus + rowIdx}`)._rawData
            .formattedValue || "";
        rowTemp[key] = data;
      });
      topListMius.push(rowTemp);
    });

    const result = {
      topListPlus,
      topListMius,
    };

    res.status(200).json({ ok: true, result });
  } catch (error) {
    console.log("error");
    res.status(500).json({ ok: false, error });
  }
}

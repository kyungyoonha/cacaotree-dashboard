import dayjs from "dayjs";
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
    let {
      body: { date },
    } = req;

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
    });
    await doc.getInfo();
    let sheet = doc.sheetsByTitle["Daily Report"];
    await sheet.loadCells("B2:B2");

    let prev = sheet.getCellByA1("B2");
    console.log(date);
    console.log(dayjs(date).format("YYYY-MM-DD"));
    prev.value = dayjs(date).format("YYYY-MM-DD");
    await sheet.saveUpdatedCells();

    res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error);
    console.log("error");
    res.status(500).json({ ok: false, error });
  }
}

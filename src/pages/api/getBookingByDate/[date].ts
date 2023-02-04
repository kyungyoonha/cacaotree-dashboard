import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";
const { GoogleSpreadsheet } = require("google-spreadsheet");

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

// https://thenewstack.io/how-to-use-google-sheets-as-a-database-with-react-and-ssr/
// https://theoephraim.github.io/node-google-spreadsheet/#/classes/google-spreadsheet-worksheet

type result = resultType[];

type resultType = {
  [key: string]: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      query: { date },
    } = req;
    const start = new Date().getTime();
    if (!date) return;

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
    });

    await doc.getInfo();
    let sheet = doc.sheetsByTitle["Booking"];
    // console.log("1. GET SHEET => ", new Date().getTime() - start);

    let rows = await sheet.getRows({ offset: 3000 });
    await sheet.loadHeaderRow(1); // 헤더 Row를 다른 걸로 설정할 수도 있음.

    let header = rows[0]._sheet.headerValues;
    let index_date = header.indexOf("date");

    // console.log("2. GET ROW => ", new Date().getTime() - start);

    const result: result = [];
    rows.forEach((row: any) => {
      const rowDate = dayjs(row[header[index_date]]).format("YYYY-MM-DD");
      const dateId = dayjs(date as string).format("YYYY-MM-DD");

      if (rowDate !== dateId) return;

      let result_temp: resultType = { rowNumber: row._rowNumber };
      header.forEach((key: string) => {
        result_temp[key] = row[key];
      });

      result.push(result_temp);
    });
    // console.log("3. GET RESULT => ", new Date().getTime() - start);

    let columns = header.map((item: string) => ({
      title: item,
      key: item,
      dataIndex: item,
    }));
    // console.log("4. Done => ", new Date().getTime() - start);

    res
      .status(200)
      .json({ ok: true, result: { columns, bookingList: result } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, error });
  }
}

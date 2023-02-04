import { renderCellWithColor, statusColorBackground } from "@/libs/function";

export const columns = [
  {
    title: "company",
    key: "company",
    dataIndex: "company",
    render: renderCellWithColor({ key: "company" }),
  },
  {
    title: "paid",
    key: "paid",
    dataIndex: "paid",
    render: renderCellWithColor({ key: "paid" }),
  },
  //   {
  //     title: "paymentDollar",
  //     key: "paymentDollar",
  //     dataIndex: "paymentDollar",
  //   },
  //   {
  //     title: "paymentPeso",
  //     key: "paymentPeso",
  //     dataIndex: "paymentPeso",
  //   },
  //   { title: "paymentWon", key: "paymentWon", dataIndex: "paymentWon" },

  {
    title: "discount",
    key: "discount",
    dataIndex: "discount",
    render: renderCellWithColor({ key: "discount", minWidth: "50px" }),
  },
  {
    title: "name",
    key: "name",
    dataIndex: "name",
    render: renderCellWithColor({ key: "name" }),
    // render: (text: string) => (
    //   <div
    //     style={{
    //       width: "200px",
    //     }}
    //   >
    //     {text}
    //   </div>
    // ),
  },
  {
    title: "pax",
    key: "pax",
    dataIndex: "pax",
    render: renderCellWithColor({ key: "pax", minWidth: "20px" }),
  },
  {
    title: "date",
    key: "date",
    dataIndex: "date",
    render: renderCellWithColor({ key: "date" }),
    // render: (text: string) => (
    //   <div
    //     style={{
    //       width: "100px",
    //     }}
    //   >
    //     {text}
    //   </div>
    // ),
  },
  {
    title: "arrivedDate",
    key: "arrivedDate",
    dataIndex: "arrivedDate",
    render: renderCellWithColor({ key: "arrivedDate", minWidth: "60px" }),
  },
  {
    title: "package",
    key: "package",
    dataIndex: "package",
    render: renderCellWithColor({ key: "package", minWidth: "60px" }),
    // render: (text: string) => (
    //   <div
    //     style={{
    //       width: "80px",
    //     }}
    //   >
    //     {text}
    //   </div>
    // ),
  },
  {
    title: "status",
    key: "status",
    dataIndex: "status",
    render: renderCellWithColor({ key: "status", minWidth: "50px" }),
  },
  {
    title: "pickTime",
    key: "pickTime",
    dataIndex: "pickTime",
    render: renderCellWithColor({ key: "pickTime", minWidth: "50px" }),
  },
  {
    title: "pickCar",
    key: "pickCar",
    dataIndex: "pickCar",
    render: renderCellWithColor({ key: "pickCar", minWidth: "50px" }),
  },
  {
    title: "pickFlight",
    key: "pickFlight",
    dataIndex: "pickFlight",
    render: renderCellWithColor({ key: "pickFlight", minWidth: "55px" }),
  },
  {
    title: "pickLocation",
    key: "pickLocation",
    dataIndex: "pickLocation",
    render: renderCellWithColor({ key: "pickLocation", minWidth: "70px" }),
  },
  {
    title: "massageTime",
    key: "massageTime",
    dataIndex: "massageTime",
    render: renderCellWithColor({ key: "massageTime", minWidth: "70px" }),
  },

  {
    title: "endTime",
    key: "endTime",
    dataIndex: "endTime",
    render: renderCellWithColor({ key: "endTime", minWidth: "50px" }),
  },
  {
    title: "massage",
    key: "massage",
    dataIndex: "massage",
    render: renderCellWithColor({ key: "massage", minWidth: "60px" }),
    // render: (text: string) => (
    //   <div
    //     style={{
    //       width: "130px",
    //     }}
    //   >
    //     {text}
    //   </div>
    // ),
  },
  {
    title: "dropTime",
    key: "dropTime",
    dataIndex: "dropTime",
    render: renderCellWithColor({ key: "dropTime" }),
    // render: (text: string) => (
    //   <div
    //     style={{
    //       width: "80px",
    //     }}
    //   >
    //     {text}
    //   </div>
    // ),
  },
  {
    title: "dropCar",
    key: "dropCar",
    dataIndex: "dropCar",
    render: renderCellWithColor({ key: "dropCar" }),
  },
  {
    title: "dropLocation",
    key: "dropLocation",
    dataIndex: "dropLocation",
    render: renderCellWithColor({ key: "dropLocation" }),
    // render: (text: string) => (
    //   <div
    //     style={{
    //       width: "120px",
    //     }}
    //   >
    //     {text}
    //   </div>
    // ),
  },
  //   { title: "dollar", key: "dollar", dataIndex: "dollar" },
  //   { title: "rate", key: "rate", dataIndex: "rate" },
  //   { title: "peso", key: "peso", dataIndex: "peso" },
  //   { title: "therapist1", key: "therapist1", dataIndex: "therapist1" },
  //   { title: "therapist2", key: "therapist2", dataIndex: "therapist2" },
  //   { title: "therapist3", key: "therapist3", dataIndex: "therapist3" },
  //   { title: "therapist4", key: "therapist4", dataIndex: "therapist4" },
  //   { title: "therapist5", key: "therapist5", dataIndex: "therapist5" },
  //   { title: "therapist6", key: "therapist6", dataIndex: "therapist6" },
  //   {
  //     title: "commission1",
  //     key: "commission1",
  //     dataIndex: "commission1",
  //   },
  //   {
  //     title: "commission2",
  //     key: "commission2",
  //     dataIndex: "commission2",
  //   },
  //   {
  //     title: "commission3",
  //     key: "commission3",
  //     dataIndex: "commission3",
  //   },
  //   {
  //     title: "commission4",
  //     key: "commission4",
  //     dataIndex: "commission4",
  //   },
  //   {
  //     title: "commission5",
  //     key: "commission5",
  //     dataIndex: "commission5",
  //   },
  //   {
  //     title: "commission6",
  //     key: "commission6",
  //     dataIndex: "commission6",
  //   },
  {
    title: "room1",
    key: "room1",
    dataIndex: "room1",
    render: renderCellWithColor({ key: "room1", minWidth: "50px" }),
  },
  {
    title: "room2",
    key: "room2",
    dataIndex: "room2",
    render: renderCellWithColor({ key: "room2", minWidth: "50px" }),
  },
  {
    title: "room3",
    key: "room3",
    dataIndex: "room3",
    render: renderCellWithColor({ key: "room3", minWidth: "50px" }),
  },
  {
    title: "phone",
    key: "phone",
    dataIndex: "phone",
    render: renderCellWithColor({ key: "phone" }),
  },
  {
    title: "memo",
    key: "memo",
    dataIndex: "memo",
    render: renderCellWithColor({ key: "memo" }),
    // render: (text: string) => (
    //   <div
    //     style={{
    //       width: "300px",
    //     }}
    //   >
    //     {text}
    //   </div>
    // ),
  },
  //   { title: "timestamp", key: "timestamp", dataIndex: "timestamp" },
  //   {
  //     title: "confirmDone",
  //     key: "confirmDone",
  //     dataIndex: "confirmDone",
  //   },
  //   {
  //     title: "confirmInfo",
  //     key: "confirmInfo",
  //     dataIndex: "confirmInfo",
  //   },
];

export const columnsShort = columns.filter((column) => {
  const exceptList = [
    "discount",
    "arrivedDate",
    "pickCar",
    "pickFlight",
    "dropCar",
    "room1",
    "room2",
    "room3",
    "phone",
    "massage",
  ];

  return !exceptList.includes(column.key);
});

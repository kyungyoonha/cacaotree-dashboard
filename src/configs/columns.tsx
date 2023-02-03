import { renderCellWithColor, statusColorBackground } from "@/libs/function";

const columns = [
  {
    title: "company",
    key: "company",
    dataIndex: "company",
    render: renderCellWithColor("company"),
  },
  {
    title: "paid",
    key: "paid",
    dataIndex: "paid",
    render: renderCellWithColor("paid"),
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
    render: renderCellWithColor("discount"),
  },
  {
    title: "name",
    key: "name",
    dataIndex: "name",
    render: renderCellWithColor("name"),
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
    render: renderCellWithColor("pax"),
  },
  {
    title: "date",
    key: "date",
    dataIndex: "date",
    render: renderCellWithColor("date"),
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
    render: renderCellWithColor("arrivedDate"),
  },
  {
    title: "package",
    key: "package",
    dataIndex: "package",
    render: renderCellWithColor("package"),
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
    render: renderCellWithColor("status"),
  },
  {
    title: "pickTime",
    key: "pickTime",
    dataIndex: "pickTime",
    render: renderCellWithColor("pickTime"),
  },
  {
    title: "pickCar",
    key: "pickCar",
    dataIndex: "pickCar",
    render: renderCellWithColor("pickCar"),
  },
  {
    title: "pickFlight",
    key: "pickFlight",
    dataIndex: "pickFlight",
    render: renderCellWithColor("pickFlight"),
  },
  {
    title: "pickLocation",
    key: "pickLocation",
    dataIndex: "pickLocation",
    render: renderCellWithColor("pickLocation"),
  },
  {
    title: "massageTime",
    key: "massageTime",
    dataIndex: "massageTime",
    render: renderCellWithColor("massageTime"),
  },
  {
    title: "startTime",
    key: "startTime",
    dataIndex: "startTime",
    render: renderCellWithColor("startTime"),
  },
  {
    title: "endTime",
    key: "endTime",
    dataIndex: "endTime",
    render: renderCellWithColor("endTime"),
  },
  {
    title: "massage",
    key: "massage",
    dataIndex: "massage",
    render: renderCellWithColor("massage"),
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
    render: renderCellWithColor("dropTime"),
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
    render: renderCellWithColor("dropCar"),
  },
  {
    title: "dropLocation",
    key: "dropLocation",
    dataIndex: "dropLocation",
    render: renderCellWithColor("dropLocation"),
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
    render: renderCellWithColor("room1"),
  },
  {
    title: "room2",
    key: "room2",
    dataIndex: "room2",
    render: renderCellWithColor("room2"),
  },
  {
    title: "room3",
    key: "room3",
    dataIndex: "room3",
    render: renderCellWithColor("room3"),
  },
  {
    title: "phone",
    key: "phone",
    dataIndex: "phone",
    render: renderCellWithColor("phone"),
  },
  {
    title: "memo",
    key: "memo",
    dataIndex: "memo",
    render: renderCellWithColor("memo"),
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

export default columns;

type Prop = {
  key: string;
  minWidth?: string;
};

export const renderCellWithColor =
  ({ key, minWidth }: Prop) =>
  (text: any, record: any) => {
    const { color, columns } = statusColorBackground(record.status);

    return {
      props: {
        style: { background: columns.includes(key) ? color : "#FFF" },
      },
      children: <div style={{ minWidth }}>{text}</div>,
    };
  };

export const statusColorBackground = (status: string) => {
  switch (status) {
    case "[0] Done":
      return {
        color: "#999999",
        columns: [
          "company",
          "paid",
          "discount",
          "name",
          "pax",
          "date",
          "arrivedDate",
          "package",
          "status",
          "pickTime",
          "pickCar",
          "pickFlight",
          "pickLocation",
          "massageTime",
          "startTime",
          "endTime",
          "massage",
          "dropTim",
          "dropCar",
          "dropTime",
          "dropLocation",
          "room1",
          "room2",
          "room3",
          "phone",
          "memo",
        ],
      };
    case "[01] Arrival Night":
      return {
        color: "#9CC283",
        columns: [
          "status",
          "pickTime",
          "pickCar",
          "pickFlight",
          "pickLocation",
        ],
      };
    case "[02] Arrival Morning":
      return {
        color: "#B2A8D3",
        columns: [
          "status",
          "pickTime",
          "pickCar",
          "pickFlight",
          "pickLocation",
        ],
      };
    case "[03] Sleeping":
      return {
        color: "#FBE5A2",
        columns: ["status", "dropTime", "dropCar", "dropLocation"],
      };
    case "[03] Sleeping":
      return {
        color: "#FBE5A2",
        columns: ["status", "dropTime", "dropCar", "dropLocation"],
      };
    case "[04] Wating Pickup":
      return {
        color: "#75FCFD",
        columns: [
          "status",
          "pickTime",
          "pickCar",
          "pickFlight",
          "pickLocation",
        ],
      };
    case "[05] Comming":
      return {
        color: "#EA33F6",
        columns: ["status", "massageTime", "massage"],
      };
    case "[06] Waiting Massage":
      return {
        color: "#F19E39",
        columns: ["status", "massageTime", "massage"],
      };
    case "[06] Waiting Massage":
      return {
        color: "#F19E39",
        columns: ["status", "massageTime", "massage"],
      };
    case "[07] Having Massage":
      return {
        color: "#FFFF55",
        columns: [
          "status",
          "massageTime",
          "startTime",
          "endTime",
          "dropTime",
          "dropCar",
          "dropLocation",
        ],
      };
    case "[08] Waiting Drop":
      return {
        color: "#69BBC4",
        columns: ["status", "dropTime", "dropCar", "dropLocation"],
      };

    default:
      return {
        color: "#fff",
        columns: [],
      };
  }
};

import { Alert } from "antd";

type Prop = {
  key: string;
  minWidth?: string;
};

export const renderCellWithColor =
  ({ key, minWidth }: Prop) =>
  (text: any, record: any) => {
    const { isStrong, color, columns } = statusColorBackground(record.status);

    return {
      props: {
        style: {
          background: !isStrong && columns.includes(key) ? color : "#FFF",
        },
      },
      children:
        isStrong && columns.includes(key) ? (
          <Alert
            message={text ? text : "-"}
            type="success"
            style={{
              minWidth,
              background: columns.includes(key) ? color : "#FFF",
              padding: "5px",
              fontSize: "8px",
              display: "inline-block",
            }}
          />
        ) : (
          <div style={{ minWidth }}>{text}</div>
        ),
    };
  };

type Result = (status: string) => {
  isStrong: boolean;
  color: string;
  columns: string[];
};

export const statusColorBackground: Result = (status) => {
  switch (status) {
    case "[0] Done":
      return {
        isStrong: false,
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
        isStrong: true,
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
        isStrong: true,
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
        isStrong: true,
        color: "#FBE5A2",
        columns: ["status", "dropTime", "dropCar", "dropLocation"],
      };
    case "[03] Sleeping":
      return {
        isStrong: true,
        color: "#FBE5A2",
        columns: ["status", "dropTime", "dropCar", "dropLocation"],
      };
    case "[04] Wating Pickup":
      return {
        isStrong: true,
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
        isStrong: true,
        color: "#EA33F6",
        columns: ["status", "massageTime", "massage"],
      };
    case "[06] Waiting Massage":
      return {
        isStrong: true,
        color: "#F19E39",
        columns: ["status", "massageTime", "massage"],
      };
    case "[06] Waiting Massage":
      return {
        isStrong: true,
        color: "#F19E39",
        columns: ["status", "massageTime", "massage"],
      };
    case "[07] Having Massage":
      return {
        isStrong: true,
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
        isStrong: true,
        color: "#69BBC4",
        columns: ["status", "dropTime", "dropCar", "dropLocation"],
      };

    default:
      return {
        isStrong: false,
        color: "#fff",
        columns: [],
      };
  }
};

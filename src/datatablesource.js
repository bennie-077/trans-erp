export const truckColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "truck",
    headerName: "Truck",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="truckCell">
          {params.row.reg_no} | {params.row.trailer_no}
        </div>
      );
    },
  },
  {
    field: "model",
    headerName: "Model",
    width: 100,
  },
  {
    field: "chasis",
    headerName: "Chasis",
    width: 230,
  },
  {
    field: "type",
    headerName: "Type",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`truckCellStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const truckRows = [
  {
    id: "1",
    reg_no: "KDB 822K",
    trailer_no: "ZC1234",
    model: "MP4",
    chasis: "NCJAHDSHIUAHIU",
    type: "Owned",
    status: "active",
  },
  {
    id: "2",
    reg_no: "KDB 822L",
    trailer_no: "ZC1244",
    model: "MP4",
    chasis: "NCJAHDSHIUAHIU",
    type: "Sub Contract",
    status: "inactive",
  },
  {
    id: "3",
    reg_no: "KDB 822M",
    trailer_no: "ZC1233",
    model: "MP4",
    chasis: "NCJAHDSHIUAHIU",
    type: "Owned",
    status: "active",
  },
  {
    id: "4",
    reg_no: "KDB 822N",
    trailer_no: "ZC1232",
    model: "MP4",
    chasis: "NCJAHDSHIUAHIU",
    type: "Owned",
    status: "inactive",
  },
  {
    id: "5",
    reg_no: "KDB 822P",
    trailer_no: "ZC1231",
    model: "MP4",
    chasis: "NCJAHDSHIUAHIU",
    type: "Owned",
    status: "active",
  },
  {
    id: "6",
    reg_no: "KDB 822Q",
    trailer_no: "ZC1239",
    model: "MP4",
    chasis: "NCJAHDSHIUAHIU",
    type: "Owned",
    status: "inactive",
  },
  {
    id: "7",
    reg_no: "KDB 822R",
    trailer_no: "ZC1238",
    model: "MP4",
    chasis: "NCJAHDSHIUAHIU",
    type: "Owned",
    status: "inactive",
  },
  {
    id: "8",
    reg_no: "KDB 822S",
    trailer_no: "ZC1237",
    model: "MP4",
    chasis: "NCJAHDSHIUAHIU",
    type: "Owned",
    status: "active",
  },
  {
    id: "9",
    reg_no: "KDB 822T",
    trailer_no: "ZC1236",
    model: "MP4",
    chasis: "NCJAHDSHIUAHIU",
    type: "Owned",
    status: "active",
  },
  {
    id: "10",
    reg_no: "KDB 822U",
    trailer_no: "ZC1235",
    model: "MP4",
    chasis: "NCJAHDSHIUAHIU",
    type: "Owned",
    status: "active",
  },
];

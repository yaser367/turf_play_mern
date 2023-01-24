import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../styles/admin/DataTable.scss";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },

  {
    field: "PaymentType",
    headerName: "Payment Type",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`paymentType ${params.row.PaymentType}`}>
          {params.row.PaymentType}{" "}
        </div>
      );
    },
  },

  {
    field: "Status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`userStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 120,
    type: "Number",
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    PaymentType: "Full amount",
    status: "pending",
    amount: 73993,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    PaymentType: "Advance",
    status: "success",
    amount: 73993,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    PaymentType: "Advance",
    status: "success",
    amount: 73993,
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    PaymentType: "Full amount",
    status: "success",
    amount: 73993,
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    PaymentType: "Full amount",
    status: "success",
    amount: 73993,
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    age: 150,
    PaymentType: "Advance",
    status: "pending",
    amount: 73993,
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    PaymentType: "Full amount",
    status: "success",
    amount: 73993,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    PaymentType: "Advance",
    status: "pending",
    amount: 73993,
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    PaymentType: "Advance",
    status: "success",
    amount: 73993,
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    PaymentType: "Advance",
    status: "success",
    amount: 73993,
  },
  {
    id: 11,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    PaymentType: "Full amount",
    status: "success",
    amount: 73993,
  },
];

const DataTable = () => {
  // const actionColum = [
  //     {field:'action', headerName:'Action', width:200, renderCell:()=>{
  //         return(
  //             <div className='cellAction flex items-center '>
  //                 <button type="button" class="inline-block px-2 py-1 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-2xl hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Delete</button>

  //             </div>
  //         )
  //     }}
  // ]
  return (
    <div className="h-[600px] p-4 w-[80%]   mx-auto mt-10">
      <DataGrid
        rows={rows}
        columns={columns.concat()}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;

import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import '../../styles/admin/DataTable.scss'
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field:'status',
    headerName:'Status',
    width:120,
    renderCell:(params)=>{
        return(
            <div className={`userStatus ${params.row.status}`} >{params.row.status}</div>
        )
    }
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 , status:'Active'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 , status:'Active'},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status:'Block' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , status:'Active'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null , status:'Active'},
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status:'Active' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status:'Active' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status:'Active' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , status:'Active'},
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 , status:'Active'},
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 , status:'Active'},
];


const DataTable = () => {
    const actionColum = [
        {field:'action', headerName:'Action', width:200, renderCell:()=>{
            return(
                <div className='cellAction flex items-center'>
                    {/* <div> View</div> */}
                    <button type="button" class="inline-block px-2 py-1 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-2xl hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Delete</button>

                    {/* <div className='-2 border-r-2 text-blue-800 border-blue-800'> Delete</div> */}
                </div>
            )
        }}
    ]
  return (
    <div className='h-[600px] p-4'>
         <DataGrid
        rows={rows}
        columns={columns.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Base_url } from "../utils/constant";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';



const columns  = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'name',
    headerName: 'First name',
    width: 200,
    editable: true,
  },
  {
    field: 'surname',
    headerName: 'Last name',
    width: 200,
    editable: true,
  },
  {
    field: 'userName',
    headerName: 'UserName',
    width: 200,
    editable: true,
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 200,
    editable: true,

  },
];


export const Table = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${Base_url}/get-data`).then((resp) => {
      const data  = resp.data.data;
      var count = 1;
      var result = [];
      for(var i = 0; i < data.length; i++) {
        data[i].id = count;
        result.push(data[i])
        count++;
      }
      setData(result);
    })
  },[])

  // field elave etmeyin qisa yolunu sorusmaq
  

  return (
    <div className='table'>
      <Box sx={{ height: 400, width: '90%',marginLeft:"50px",marginTop:"50px",border:"1px solid blue" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  )
}
export default Table


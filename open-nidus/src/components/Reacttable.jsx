
 
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SectionHead from './SectionHead';
import {BiTable} from 'react-icons/bi';
import axios from 'axios'

const Reacttable = () => {

    const[data,setData]=useState([]); 

    const getData= async() =>{
      try{
        const data = await axios.get("http://smartavatar.opennidus.com/s3/smartavatar/api/device")
        console.log(data.data);
        setData(data.data)
      }
      catch(e){
        console.log(e)
      }
    }
    useEffect(()=>{      
      getData()
    },[]) 

  return (
    
    <div className='container programs__container reacttable'>
       <SectionHead icon={<BiTable/>} title="React-Table" className="table__head"/>        
        <TableContainer className='table__container' component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Socket one</TableCell>
                <TableCell align="right">Socket two</TableCell>
                <TableCell align="right">Socket three</TableCell>
                <TableCell align="right">Socket four</TableCell>
                <TableCell align="right">Created At</TableCell>
                <TableCell align="right">Updated At</TableCell>
                <TableCell align="right">App User Id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((resp) => (
                <TableRow   key={resp.id}>                
                  <TableCell component="th" scope="row">{resp.id}</TableCell>
                  <TableCell align="right">{resp.name}</TableCell>
                  <TableCell align="right">{String(resp.socket_one)}</TableCell>
                  <TableCell align="right">{String(resp.socket_two)}</TableCell>
                  <TableCell align="right">{String(resp.socket_three)}</TableCell>
                  <TableCell align="right">{String(resp.socket_four)}</TableCell>
                  <TableCell align="right">{resp.createdAt}</TableCell>
                  <TableCell align="right">{resp.updatedAt}</TableCell>
                  <TableCell align="right">{resp.appUserId}</TableCell>
                </TableRow>
              ))}
              
            </TableBody>
          </Table>
        </TableContainer>

    </div>
  )
}

export default Reacttable
import React, {useEffect, useState} from 'react'
import { TableContainer, Paper, Table, TableRow, TableHead, TableCell, TableBody} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { createApiEndpoint, ENDPOITS } from '../api';


export function EmployeeTable() {

    const[employee, setEmployee] = useState()
    
    useEffect(() => {
        createApiEndpoint(ENDPOITS.employee)
        .fetch()
        .then(res =>{
            setEmployee(res.data)
        
        })
        .catch(err=>{console.log(err)})
    },[])

    console.log(employee)
    return (
    <TableContainer component={Paper} sx={{'& .MuiTable-root':{
        bgcolor: '#515151',
        mt: 3,
    }}}>
    <Table align="center" sx={{ width: 800, borderRadius: '7px' }} aria-label="simple table">

    <TableHead>
        <TableRow >
            <TableCell align="center" sx={{color: 'white'}}>First Name</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Last Name</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Age</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Gender</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Department</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Actions</TableCell>
        </TableRow>
    </TableHead>
    
    <TableBody>
        <TableRow >
            
            <TableCell align="center" sx={{color: 'white'}}>tEST</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Test</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>22</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Male</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>CCS</TableCell>
            <TableCell align="center" sx={{color: 'white'}}> <ModeEditIcon></ModeEditIcon>  <DeleteIcon></DeleteIcon> </TableCell>
        </TableRow>
        
        
    </TableBody>
    </Table>
    </TableContainer>
    )
}

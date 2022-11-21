import React, {useEffect, useState} from 'react'
import { TableContainer, Paper, Table, TableRow, Box, TableHead, Button, TableCell, TableBody, Typography} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { createApiEndpoint, ENDPOITS } from '../api';


export default function Tables() {

    const[employee, setEmployee] = useState<any[]>([])
    
    useEffect(() => {
        createApiEndpoint(ENDPOITS.employee)
        .fetch()
        .then(res =>{
            setEmployee(res.data)
        })
        .catch(err=>{console.log(err)})
    },[])

    return (
        <React.Fragment>
    <Box component="div" sx={{display: 'flex', alignItems:'center', gap:73}}>
    <Typography variant="h5" component="h2" sx={{mt: 3, pl:40}}>
        Employee List
    </Typography>
    <Button variant="contained" sx={{height:'40px', mt:3}}>Add</Button>
    </Box>
    <TableContainer component={Paper} sx={{'& .MuiTable-root':{
        bgcolor: '#515151',
        mt: 1,
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
    {employee.map(emp => 
        <TableRow key={emp.employeeId}>
            <TableCell align="center" sx={{color: 'white'}}>{emp.firstname}</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>{emp.lastname}</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>{emp.age}</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>{emp.gender}</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>{emp.department}</TableCell>
            <TableCell align="center" sx={{color: 'white'}}> <ModeEditIcon></ModeEditIcon>  <DeleteIcon></DeleteIcon> </TableCell>
        </TableRow>
        )}
    </TableBody>
    </Table>
    </TableContainer>
    </React.Fragment>
    )
}

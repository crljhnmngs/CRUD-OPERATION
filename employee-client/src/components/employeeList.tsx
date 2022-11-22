import React from 'react'
import { TableContainer, Paper, Table, TableRow, Box, TableHead, Button, TableCell, TableBody, Typography} from '@mui/material';
import useEmployee from '../hooks/useEmployee';
import { EmployeeRowMemo } from './employeeRow';

interface Employees {
    employeeId: number,
    firstname: string,
    lastname: string,
    age: number,
    gender: string,
    department: string,
}

export default function EmployeeList() {

    const {employees} = useEmployee();

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
    {employees.map(emp => 
        <EmployeeRowMemo key={emp.employeeId} props={emp} />
        )}
    </TableBody>
    </Table>
    </TableContainer>
    </React.Fragment>
    )
}

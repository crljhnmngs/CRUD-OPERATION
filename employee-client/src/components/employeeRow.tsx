import React from 'react'
import { TableRow, TableCell } from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

// interface Employees {
//     employeeId: number,
//     firstname: string,
//     lastname: string,
//     age: number,
//     gender: string,
//     department: string,
// }


 const employeeRow = ({props}: any) => {
  return (
    <TableRow key={props.employeeId}>
            <TableCell align="center" sx={{color: 'white'}}>{props.employeeId}</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>{props.lastname}</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>{props.age}</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>{props.gender}</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>{props.department}</TableCell>
            <TableCell align="center" sx={{color: 'white'}}> <ModeEditIcon></ModeEditIcon>  <DeleteIcon></DeleteIcon> </TableCell>
    </TableRow>
  )
}

const EmployeeRowMemo = React.memo(employeeRow);

export { EmployeeRowMemo }
export default employeeRow;
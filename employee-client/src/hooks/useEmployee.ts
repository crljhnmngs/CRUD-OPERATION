
import { createApiEndpoint, ENDPOITS } from '../api';
import {useEffect, useState} from 'react'

// interface Employee {
//   employeeId: number | undefined,
//   firstname: string  | undefined,
//   lastname: string  | undefined,
//   age: number  | undefined,
//   gender: string  | undefined,
//   department: string  | undefined,
//  }

export default function useEmployee() {
 
    const[employees, setEmployee] = useState<any[]>([])
    
    useEffect(() => {
        createApiEndpoint(ENDPOITS.employee)
        .fetch()
        .then(res =>{
            setEmployee(res.data)
        })
        .catch(err=>{console.log(err)})
    },[])
    
    return{employees}
}

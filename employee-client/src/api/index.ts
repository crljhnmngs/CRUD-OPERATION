import axios from 'axios';

export const BASE_URL = 'https://localhost:7219/';

export const ENDPOITS = {
    employee: 'employee'
}
export const createApiEndpoint = (endpoint: any) => {

    let url = BASE_URL + 'api/' + endpoint + '/';

    return{
        fetch: () => axios.get(url),
        fetchById: (id: any) => axios.get(url+id),
        post: (newRecord: any) => axios.post(url, newRecord),
        put: (id:any, updatedRecord:any) => axios.put(url+id, updatedRecord),
        delete: (id:any) => axios.delete(url+id),
    }
}
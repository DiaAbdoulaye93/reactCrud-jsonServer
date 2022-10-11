import axios from 'axios';

export const environment = {
    production: false,
    BaseUrl : 'http://127.0.0.1:3001/Students'
  
  };  
  
export const addStudent = async (student) => {

    return await axios.post(environment.BaseUrl,student);
};
export const deleteUser = async (id) => {
    return await axios.delete(`${environment.BaseUrl+ '/' +  id}`);
} 
export const getStudent= async (id) => {
    id = id || '';
    return await axios.get(`${environment.BaseUrl}/${id}`);
}
export function getStudents(){
   
    return  axios.get(`${environment.BaseUrl}`);
}
export const editData = async (id, student) => {
    return await axios.put(`${environment.BaseUrl}/${id}`,student);
}


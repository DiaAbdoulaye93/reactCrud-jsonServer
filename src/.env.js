import axios from 'axios';

export const environment = {
    production: false,
    BaseUrl : 'http://127.0.0.1:3001/Students/'
  
  };  
  
export const addStudent = async (student) => {
    console.log(student);
    return await axios.post(environment.BaseUrl,student);
};
export const deleteUser = async (id) => {
    return await axios.delete(`${environment.BaseUrl+ id}`);
} 

import axios from 'axios';

export const environment = {
    production: false,
    BaseUrl : 'http://127.0.0.1:3001/Students/'
  
  };  
  
export const addUser = async (user) => {
    return await axios.post(environment.BaseUrl,user);
};
export const deleteUser = async (id) => {
    return await axios.delete(`${environment.BaseUrl+ id}`);
} 

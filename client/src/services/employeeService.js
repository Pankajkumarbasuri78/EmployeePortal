
import httpClient from '../httpCommon'

//fetching data from backend through api axios
const getAll = () => {
  return httpClient.get('/getEmployees');
}

const create = (data) => {
  return httpClient.post("/addEmployee",data);
}

const get = id => {
  return httpClient.get(`/getEmployee/${id}`);
}

const update = (data) => {
  return httpClient.put('/putEmployee',data);
}

const remove = id => {
  return httpClient.delete(`/deleteEmployee/${id}`)
}

export default {getAll,create,get,update,remove};
import axios from 'axios';
//axios instance
export default axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        "Content-Type":'application/json'
    }
});


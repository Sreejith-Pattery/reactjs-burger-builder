import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2328c.firebaseio.com/'
});

export default instance;
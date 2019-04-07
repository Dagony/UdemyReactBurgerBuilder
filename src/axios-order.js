import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-df075.firebaseio.com/'
});

export default instance;

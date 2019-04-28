import axios from 'axios';
import Constant from '../Constant';

export default {
    fetchContacts : () => {
        return axios.get(Constant.BASE_URL + '/contacts');
    }
}

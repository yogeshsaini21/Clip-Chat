import axios from 'axios';

export const Base_Url = `http://localhost:5000`

export const MyAxios =axios.create({
    baseurl:Base_Url,
});


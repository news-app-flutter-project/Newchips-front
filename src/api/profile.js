import axios from 'axios';
const baseUrl = 'https://newsapp-cf64.onrender.com';

// Passing configuration object to axios
const fetchUser = async () => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/api/profile/get_profile`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};

// Invoking get method to perform a GET request
const a = async () => {
  const url = `${baseUrl}/api/profile/get_profile`;
  const response = await axios.get(url);
  console.log(response.data);
};

export {a, fetchUser};

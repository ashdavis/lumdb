let API_URL;

if (process.env.NODE_ENV === 'production') {
  API_URL = process.env.REACT_APP_API_URL;
} else {
  API_URL = 'http://localhost:8080';
}

export default API_URL;
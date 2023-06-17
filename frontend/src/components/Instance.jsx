import axios from "axios"; 

const Instance = axios.create({
  baseURL : import.meta.env.VITE_API_SERVER_DOMAIN,
  headers: {
    // Content-Type: "application/json"
   
  }, 
});

export default Instance;
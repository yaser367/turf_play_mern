import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

export async function getAllUsers() {
  try {
    const {
      data: { users },
    } = await axios.get("/api/admin/users");
    return users;
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function updateUserStatus(id) {
  try {
    await axios.put(`/api/admin/blockUser/${id}`)
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function getAllTurfAdmin(){
    try {
        const {data:{turfAdmin}} = await axios.get('/api/admin/turfAdmin')
        return turfAdmin;
    } catch (error) {
    return Promise.reject({ error });   
    }
}
export async function updateAdminStatus(id) {
    try {
      await axios.put(`/api/admin/blockTurfAdmin/${id}`)
    } catch (error) {
      return Promise.reject({ error });
    }
  }

export async function adminLogin (credentials){
  try {
    const {data:{token}} = await axios.post('/api/admin/login',credentials)
    return token
  } catch (error) {
    return Promise.reject({ error });
  }
}
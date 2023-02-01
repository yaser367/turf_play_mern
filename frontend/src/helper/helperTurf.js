import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

export async function RegisterAdmin(credentials) {
  try {
    await axios.post("/api/turfAdmin/register", credentials);
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function AddTurf({
  TurfName,
  mobile,
  gameTypes,
  groundType,
  price,
  Description,
  _id,
}) {
  try {
    const {
      data: { result },
    } = await axios.post("/api/turfAdmin/addTurf", {
      TurfName,
      mobile,
      gameTypes,
      groundType,
      price,
      Description,
      _id,
    });
    return result;
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function verifyOtp(email, otp) {
  try {
    await axios.post("/api/turfAdmin/otpVerify", { email, otp });
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function resent(email) {
  try {
    await axios.post("/api/turfAdmin/resentOtp", { email });
  } catch (error) {
    console.log(error);
  }
}

export async function forgotpsw(credentials) {
  try {
    await axios.post("/api/turfAdmin/forgotPassword", credentials);
  } catch (error) {
    console.log(error);
  }
}

export async function changePassword(email, password) {
  try {
    console.log(email, password);
    await axios.post("/api/turfAdmin/resetPassword", { email, password });
  } catch (error) {
    console.log(error);
  }
}

export async function getAllturf(admin) {
  try {
    const {
      data: { turfs },
    } = await axios.get("/api/turfAdmin/getAllturf", {
      headers: { id: admin._id },
    });
  
    return turfs;
  } catch (error) {
    console.log(error);
  }
}

export async function getOneTurf(id) {
  try {
    const {
      data: { turfs },
    } = await axios.get(`/api/turfAdmin/getoneTurf/${id}`);
    return turfs;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTurf(id){
  try {
    await axios.put(`/api/turfAdmin/deleteTurf/${id}`)
  } catch (error) {
    console.log(error);
    
  }
}

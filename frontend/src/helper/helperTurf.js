import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080'

export async function RegisterAdmin(credentials){
    try {
        
        await axios.post('/api/turfAdmin/register',credentials)
        
     
    } catch (error) {
        return Promise.reject({error})
    }
}
 
export async function AddTurf(credentials,user){
    try {
        await axios.post('/api/turfAdmin/addTurf',{credentials,user})
    } catch (error) {
        return Promise.reject({error})
    }
}

export async function verifyOtp(email,otp){
    try {
        await axios.post('/api/turfAdmin/otpVerify',{email,otp})
        
    } catch (error) {
        return Promise.reject({error})
        
    }
}
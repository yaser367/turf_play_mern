import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrectAdmin } from "../features/auth/authSlice";
axios.defaults.baseURL = 'http://localhost:8080'

export async function RegisterAdmin (credentials){
    try {
        let {data:{message},status} = await axios.post('/api/turfAdmin/register',credentials)

        let {email} = credentials;
        if(status === 201) {
            console.log("Second")
             await axios.get('/api/turfAdmin/generateOtp')
            // console.log(email)
            console.log("first")
            //     if(status === 201) {
            //         let text = `Your verification OTP is ${code}. Please verify your account.`
            //         await axios.post('/api/turfAdmin/registerMail',{userEmail:email,text,subject:"verify your mail"})
            //     }
            //     return Promise.resolve(code)
        
        }
        // return Promise.resolve(message)
       
    } catch (error) {
        return Promise.reject({error})
    }
}
 
export async function AddTurf(){
    const user = useSelector(selectCurrectAdmin)
    try {
        
        await axios.post('/api/turfAdmin/AddTurf',{user:user})
    } catch (error) {
        return Promise.reject({error})
    }
}
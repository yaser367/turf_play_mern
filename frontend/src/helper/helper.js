import axios from 'axios'

/** make api request */



/** authenticate function */
export async function authenticate(username){
    try {
        return await axios.post('/api/authenticate',{username})
    } catch (error) {
        return {error: "username does't exist"}
    }
}


/** get user details  */

export async function getUser({username}){
    try {
        const {data} = await axios.get(`/api/user/${username}`)
        return {data};
    } catch (error) {
        return {error: "username does't exist"}
    }
}

/** register user */

export async function registerUser(credentials){
    try {
        const {data:{message}, status}= await axios.post(`/api/register`,credentials)

        let {username, email} = credentials;

        if(status === 201){
            await axios.post('/api/registerMail',{username,userEmail:email,Text:message})
        }
        return Promise.resolve(message)
    } catch (error) {
        return Promise.reject({error})
    }
}

/** login */

export async function verifyUser({username, password}){
    try {
        if(username){
            await axios.post('/api/login',{username, password})
            return Promise.resolve({data})
        }
    } catch (error) {
        return Promise.reject({error:"Password doesn't macth"})
    }
}

/** update user */

export async function updateUser(response){
    try {
        const token = await localStorage.getItem('token')
        const data = await axios.put('/api/updateUser',response, {headers:{"Authorization":`Bearer ${token}`}})
        return Promise.resolve({data})
        
    } catch (error) {
        return Promise.reject({error:"couldn't update profile"})
    }
}
/** Generate OTP */

export async function updateUser(username){
    try {
        const {data :{code},status} = await axios.get('/api/generateOtp',{params:{username}})
        
        // send mail with the OTP
        if(status === 201){
            let {data:{email}} = await getUser({username})
            let text = `Your Password Recovery OTP is ${code}. Verify and recover your password`
            await axios.post('/api/registerMail',{username,userEmail:email,text,subject:"password recovery otp"})
        }
        return Promise.resolve(code)
    } catch (error) {
        return Promise.reject({error})
    }
}

export async function verifyOtp({username, code}){
    try {
        const {data, status} = await axios.get('/api/verifyOtp',{params:{username, code}})
        return {data, status}
    } catch (error) {
        return Promise.reject({error})
        
    }
}

export async function resetPassword({username, password}){
    try {
        const {data, status} = await axios.put('/api/resetPassword',{username, password})

        return Promise.resolve({data, status})
    } catch (error) {
        return Promise.reject({error})
        
    }
}
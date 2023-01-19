import { apiSlice } from "../../features/auth/authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints:builder =>({
        login:builder.mutation({
            query:Credentials =>({
                url:'/auth',
                method:'POST',
                body:{...Credentials}
            })
        })
    })
})

export const {
    useLoginMutation
} = authApiSlice
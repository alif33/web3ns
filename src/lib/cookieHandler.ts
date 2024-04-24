import Cookies from "universal-cookie"
const cookies = new Cookies()

interface User {
    uid: string
    email: string | null
    displayName: string | null
    accessToken: string
}

const setCookie = (key: string, value: {})=>{
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 1);
    cookies.set(key, value, { path: "/", expires: expiry })
}

const getCookie = (key: string) =>{
    return cookies.get(key)
}

const getUser = ()=>{
    return getCookie("__iSUsraCTv__") || false 
}

const setIsUser = async (a: boolean)=>{
    if (a) {
        setCookie("__iSUsraCTv__", a)
    }
}

const setAuthCredentials = async (user: User)=>{
    setCookie("__iSATHTv__", user)
}

const getAuth = ()=>{
    return getCookie("__iSATHTv__") || false 
}

export { 
    getUser, 
    setIsUser,
    getAuth, 
    setAuthCredentials
}
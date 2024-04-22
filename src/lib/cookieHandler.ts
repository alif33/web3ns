import Cookies from "universal-cookie"
const cookies = new Cookies()

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

const setUser = async (a: boolean)=>{
    setCookie("__iSUsraCTv__", {isU: a})
}

export { 
    getUser, 
    setUser 
}
const ErrorCode = (message: string) => {
    const regex = /\((.+?)\)/
    const match = message.match(regex)
    if (match && match.length > 1) {
        return match[1]
    }
    return null
}

export const getErrorMessage = (message: string)=>{
    const code = ErrorCode(message)
    console.log(code, "CD")
    
    switch (code) {
        case "auth/email-already-in-use":
            return "The email is already in use."
        default:
            return "An unknown error occurred."
    }
}

import { toast } from "react-toastify"

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

    switch (code) {
        case "auth/email-already-in-use":
            return "The email is already in use."
        case "auth/invalid-credential":
            return "Invalid credential."
        case "auth/too-many-requests":
            return "Please try again later"
        default:
            return "An unknown error occurred."
    }
}

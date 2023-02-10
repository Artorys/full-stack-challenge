export function checkTokenStorage(token : string){
    const tokenStorage = window.localStorage.getItem("$TOKEN")
    if(tokenStorage == token){
        return true
    }
    return false
}
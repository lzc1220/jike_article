//存token

const TOKENKEY = 'token_key'
function setToken(token) {
    localStorage.setItem(TOKENKEY, token)
}
//取token
function getToken() {
    return localStorage.getItem('token_key')
}
//删token
function removeToken() {
    localStorage.removeItem(TOKENKEY)
}

export {
    setToken,
    getToken,
    removeToken
}
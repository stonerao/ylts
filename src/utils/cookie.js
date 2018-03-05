import Cookies from 'js-cookie'
/* cookie方法全部写这里 */
const TokenKey = 'LOGINKEY'
export function getToken() {
    return Cookies.get(TokenKey)
}
export function setToken(token) {
    return Cookies.set(TokenKey, token, { expires: 7 })
}
export function removeToken() {
    return Cookies.remove(TokenKey)
}
export function encodeUnicode(str) {
    //转为unicode 编码
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
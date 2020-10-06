
let token = window.localStorage.getItem("gmailtoken");

const BACKEND_API = "https://github.com/dilanSuraj/gmail-app-api/";
const DEFAULT_HEADER_INFO = {
    "Content-Type":"application/json"
}
const API_HEADER_INFO = {
    "token": token,
    "Content-Type":"application/json"
}
const FILE_ENDPOINT = "files";
const URL_ENDPOINT = "url";
const TOKEN_ENDPOINT = "token";
const MAIL_ENDPOINT = "mails";
export default  {
    BACKEND_API,
    API_HEADER_INFO,
    FILE_ENDPOINT,
    URL_ENDPOINT,
    TOKEN_ENDPOINT,
    MAIL_ENDPOINT,
    DEFAULT_HEADER_INFO
}
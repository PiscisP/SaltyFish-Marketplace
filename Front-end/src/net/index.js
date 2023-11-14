import axios from "axios";
import { ElMessage } from "element-plus";

const defaultError = () => ElMessage.error("Error enountered, please contact Administrator")
const defaultFailure = (message) => ElMessage.warning(message)

function get(url,data,success, failure = defaultFailure, error = defaultError){
    axios.post(url,data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
    }).then(({data})=>{
        if(data.success)
            success(data.message,data.status)
        else
            failure(data.message,data.status)
    }).catch(error)
}

function get(url,success, failure = defaultFailure, error = defaultError){
    axios.get(url,data, {
        withCredentials: true
    }).then(({data})=>{
        if(data.success)
            success(data.message,data.status)
        else
            failure(data.message,data.status)
    }).catch(error)
}

export {get,post}
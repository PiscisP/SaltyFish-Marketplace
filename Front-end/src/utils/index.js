import {ElMessage} from 'element-plus'

// router loading
export const LazyRouter = path =>  () => import(`../pages${path}.vue`);
// use img
export const getImageUrl = (path) =>
    new URL(`../assets/images${path}`, import.meta.url).href
// copy number
export const copy = val => {
    ElMessage.success("Phone Number Cpoied")
    return navigator.clipboard.writeText(val);
}
// deepclone
export const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    let result;

    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result;
}
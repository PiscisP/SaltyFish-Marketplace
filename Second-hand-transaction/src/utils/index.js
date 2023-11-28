import {ElMessage} from 'element-plus'

// 路由懒加载
export const LazyRouter = path =>  () => import(`../pages${path}.vue`);
// 引用图片
export const getImageUrl = (path) =>
    new URL(`../assets/images${path}`, import.meta.url).href
// 复制
export const copy = val => {
    ElMessage.success("电话号码复制成功")
    return navigator.clipboard.writeText(val);
}
// 深拷贝
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
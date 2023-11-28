/* 错误处理控制件 */
const errorTypes = require('../constans/error-constans.js');
const errorHandle = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case errorTypes.MYSQL_ERROR:
      status = 400;
      message = '您在执行数据库操作时出错啦！！！';
      break;
    case errorTypes.ADMIN_ALREADY_EXISIT:
      status = 409;
      message = '您的账号已经存在啦！！！';
      break;
    case errorTypes.USERNAME_ALREADY_EXISIT:
      status = 409;
      message = '您的用户名已经存在啦！！！';
      break;
    case errorTypes.PASSWORD_ERROR:
      status = 401;
      message = '您的密码输入错误啦！！！';
      break;
    case errorTypes.ACCOUNT_NOT_EXISIT:
      status = 401;
      message = '您的用户名不存在哦！！！';
      break;
    case errorTypes.UNABLE_TOKEN_KEY:
      status = 401;
      message = '您的Token是无效的哟！！！';
      break;
    case errorTypes.ROLE_NAME_ALERY_EXISIT:
      status = 409;
      message = '这个角色名已经存在啦！！！';
      break;
    case errorTypes.USERNAME_OR_ACCOUNT_PASSWORD_NOT_NULL:
      status = 400;
      message = '亲，用户名或者账号密码不能为空哦！！！';
      break;
    case errorTypes.ROLENAME_OR_ROLEDESCRIPTION_NOT_NULL:
      status = 400;
      message = '亲，角色名或者角色描述不能为空哟！！！';
      break;
    case errorTypes.PASSWORD_TOO_LONG_OR_NOT_VALID:
      status = 400;
      message =
        '亲，用户密码必须同时包括数字跟英文字符，并在6-18位以内哟！！！';
      break;
    case errorTypes.ACCOUNT_TOO_LONG_OR_TOO_SHORT:
      status = 400;
      message = '亲，用户账号必须在5-16位以内哟！！！';
      break;
    case errorTypes.LINKS_ALERY_EXISITS:
      status = 409;
      message = '亲，您的友情链接已经申请过啦！！！';
      break;
    case errorTypes.ARTICLE_NOT_EXISIT:
      status = 404;
      message = '您的文章不存在哟！！！';
      break;
    case errorTypes.LINKS_NOT_EXISITS:
      status = 404;
      message = '这个友情链接不存在呢！！！';
      break;
    case errorTypes.MENUS_NOT_EXISITS:
      status = 404;
      message = '这个菜单的类型不存在哟！！！';
      break;
    case errorTypes.MENUS_TYPE_ERROR:
      status = 400;
      message = '这个菜单是不允许有按钮控制权限的呢！！！';
      break;
    case errorTypes.MENUS_PERMISSION_ERROR:
      status = 400;
      message = '您要传入正确的按钮控制代码或者父级菜单ID哟！！！';
      break;
    case errorTypes.MENUS_URL_NOT_EXISIT:
      status = 400;
      message = '这个菜单URL是必传的哟！！！';
      break;
    case errorTypes.MENUS_NAME_ALREADY_EXISITS:
      status = 409;
      message = '菜单名称已经存在啦！！！';
      break;
    case errorTypes.MENUS_PARENT_NOT_EXISITS:
      status = 404;
      message = '这个父级菜单不存在哟！！！';
      break;
    case errorTypes.MENUS_ID_NOT_EXISITS:
      status = 404;
      message = '这个菜单ID不存在哟！！！';
      break;
    case errorTypes.ACCOUNT_IS_LOCKED:
      status = 403;
      message = '您的账号已经被锁定了，请联系超级管理员！！！';
      break;
    case errorTypes.STATE_CODE_ERROR:
      status = 400;
      message = '状态码错误！！';
      break;
    default:
      status = 404;
      message = '找不到对应页面';
      break;
  }
  ctx.status = status;
  ctx.body = {
    code: status,
    success: false,
    message
  };
};

module.exports = errorHandle;

/* error submission function */
const errorFunction = function (errorType, ctx) {
  const error = new Error(errorType);
  ctx.app.emit('error', error, ctx);
};

module.exports = errorFunction;

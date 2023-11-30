const app = require('./app');
const { APP_PORT } = require('./app/config');
require('./app/database');

app.listen(APP_PORT, () => {
  console.log(`koa serve initialized successfully，port number is：${APP_PORT}`);
});

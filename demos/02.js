const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = '这是真的不错的docker 啊ele Hello World';
};

app.use(main);
app.listen(3000);

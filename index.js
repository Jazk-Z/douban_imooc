const Koa = require('koa');
const app = new Koa();
const ejs = require('ejs');
const pug = require('pug');
const {ejsTmp, normal, pugTmp} = require('./server/tpl')
app.use(async (ctx, next) => {
    ctx.type='text/html; charset=utf-8';
    ctx.body = ejs.render(ejsTmp, {
        you: '百岁山',
        me: '王聪聪'
    })
    ctx.body = pug.render(ejsTmp, {
        you: '百岁山',
        me: '王聪聪'
    })
});

app.listen(4455, () => {
    console.log(`server is running localhost:4455`)
});

const Koa = require('koa');
const app = new Koa();
const ejs = require('ejs');
const pug = require('pug');
const views = require('koa-views');
const { resolve } = require('path');

app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}));

app.use(async (ctx, next) => {
    await ctx.render('index', {
        you: 'Luck',
        me: 'scoot'
    })
})

app.listen(4455, () => {
    console.log(`server is running localhost:4455`)
});

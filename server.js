const {createServer} = require('http')
const next = require('next')

const app = next({
    dev: process.env.NODE_ENV !== 'production'
})

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(handler).listen(3000, (e) => {
        if (e) throw e
        console.log('up on localhost:3000')
    })
})
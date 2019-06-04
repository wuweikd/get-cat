const mongoose = require('mongoose')
require('./user')

const mongodbConfig = {
    host: '127.0.0.1',
    database: 'getCat',
    port: 27017,
    user: '',
    pass: '',
}

const User = mongoose.model('User')
const mongoUrl = `mongodb://${mongodbConfig.host}:${mongodbConfig.port}/${mongodbConfig.database}`

mongoose.connection.openUri(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    user: mongodbConfig.user,
    pass: mongodbConfig.pass,
}).on('error', e => {
    console.warn('数据连接失败', e)
})

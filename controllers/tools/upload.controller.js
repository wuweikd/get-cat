const globalConfig = require('../../public/javascripts/config/global.config')
const mongoose = require('mongoose')
const Medium = mongoose.model('Medium')
const formidable = require('formidable')
const path = require('path')
const fs = require('fs')

exports.img = async (req, res, next) => {
    const form = new formidable.IncomingForm()
    function getImgUrl(request) {
        return new Promise((resolve, reject)=>{
            form.parse(request,  async (err, fields, files) => {
                if (err) {
                    reject(err)
                }
                const file = Object.keys(files)[0]
                const lastItem = files[file]
                // 获取路径
                const fileName = Date.now() + lastItem.name
                const oldUrl = lastItem.path
                const newUrl = path.join(path.resolve(__dirname, '../../public/picture/'), fileName)
                // 上传
                const readStream = fs.createReadStream(oldUrl)
                const writeStream = fs.createWriteStream(newUrl)
                readStream.pipe(writeStream)
                const imgUrl = `${globalConfig.app.domain}/public/picture/${fileName}`
                const size = lastItem.size
                const type = lastItem.type
                try {
                    const data = await new Medium({
                        size,
                        type,
                        filename: fileName,
                        url: imgUrl,
                        description: ''
                    })
                    res.json({
                        success: true,
                        data: data
                    })
                } catch (e) {
                    res.json({
                        message: '保存失败',
                        e
                    })
                }
            })
        })
    }

    await getImgUrl(req).then(url => {
        res.locals.imgUrl = url
    })

}

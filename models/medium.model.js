const mongoose = require('mongoose')
const  { Schema } = mongoose
const MediumSchema = new Schema({
    type: {
        type:  String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    filename: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    size: {
        type: Number,
        default: 0
    }
}, {
    timestamp: {
        createAt:  'createAt',
        updateAt: 'updateAt'
    }
})
mongoose.model('Medium', MediumSchema)

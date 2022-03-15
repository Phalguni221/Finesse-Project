const mongoose = require('mongoose')

var DressSchema = new mongoose.Schema({
    id: {type: Number, default: 'Anonymous' },
    img: {ype: String, default:''},
    title: { type: String, default: 'Anonymous' },
    content: { type: String, default: '' },
    stars: { type: Number, required: true },
})

DressSchema.methods.showEstablished = function() {}
  
module.exports = mongoose.model('Dress', DressSchema)


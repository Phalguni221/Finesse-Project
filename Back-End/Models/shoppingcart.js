const mongoose = require('mongoose')

let descriptionSchema = new mongoose.Schema({
    title: { type: String, default: 'Anonymous' },
    content: { type: String, default: '' },
    stars: { type: Number, required: true },
})

descriptionSchema.methods.showEstablished = function() {}
  
module.exports = mongoose.model('Description', descriptionSchema)
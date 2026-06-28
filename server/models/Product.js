const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  price:       { type: Number, required: true, min: 0 },
  category:    { type: String, enum: ['pre-workout','protein','recovery','vitamins','clothing'], required: true },
  description: { type: String, default: '' },
  image:       { type: String, default: 'https://via.placeholder.com/300' },
  stock:       { type: Number, default: 0, min: 0 },
  featured:    { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)

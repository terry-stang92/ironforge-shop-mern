const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const auth = require('../middleware/auth')

// Show all products — customers see this
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Show products by category — for the filter buttons
router.get('/category/:cat', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.cat })
    res.json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Add a new product — admin only
router.post('/', auth, async (req, res) => {
  try {
    const product = new Product(req.body)
    const saved = await product.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Update a product — admin only
router.put('/:id', auth,  async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    )
    res.json(updated)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Remove a product — admin only
router.delete('/:id', auth,  async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: 'Product removed from IronForge' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router

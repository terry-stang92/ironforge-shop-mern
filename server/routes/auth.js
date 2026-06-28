const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Admin = require('../models/Admin')

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const admin = await Admin.findOne({ email })
    if (!admin) return res.status(400).json({ message: 'Admin not found' })
    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) return res.status(400).json({ message: 'Wrong password' })
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
    res.json({ token })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body
    const admin = new Admin({ email, password })
    await admin.save()
    res.status(201).json({ message: 'Admin created' })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router

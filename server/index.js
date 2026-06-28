const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const productsRouter = require('./routes/products')
app.use('/api/products', productsRouter)

const authRouter = require('./routes/auth')
app.use('/api/auth', authRouter)


app.get('/', (req,res) => {
    res.json({ message: 'IronForge API running'})

})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to IronForge warehouse')
    app.listen(PORT, () => console.log(`Store open on port ${PORT}`))
  })
  .catch(err => console.log(err))
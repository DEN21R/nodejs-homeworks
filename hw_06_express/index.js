import express from 'express'
import pool from './db.js'

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())

app.get('/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: 'Database error' })
  }
})

app.post('/products', async (req, res) => {
  try {
    const { name, price } = req.body

    if (!name || !price) {
      return res.status(400).json({
        error: 'Name and price are required',
      })
    }

    await pool.query('INSERT INTO products (name, price) VALUES (?, ?)', [
      name,
      price,
    ])

    res.json({ message: 'Product added successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Database error' })
  }
})

app.use((req, res) => {
  res.status(404).send('Route not found')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

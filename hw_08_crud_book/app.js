import express from 'express'
import Book from './models/book.js'
import sequelize from './config/db.js'

const app = express()
app.use(express.json()) // register JSON body parser
const port = process.env.PORT || 3000

app.get('/books', async (req, res) => {
  const books = await Book.findAll()
  res.json(books)
})

app.post('/books', async (req, res) => {
  const { title, author, year } = req.body

  const book = await Book.create({ title, author, year })
  res.json(book)
})

app.put('/books/:id', async (req, res) => {
  const { id } = req.params

  await Book.update(req.body, {
    where: { id },
  })
  res.json('Book update')
})
app.delete('/books/:id', async (req, res) => {
  const { id } = req.params

  await Book.destroy({
    where: { id },
  })
  res.json('Book delete')
})

app.listen(port, async () => {
  try {
    await sequelize.authenticate()
  } catch (error) {
    console.log(error)
  }

  console.log(`Server running on http://localhost:${port}`)
})

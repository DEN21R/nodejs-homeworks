import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

const data =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n'.repeat(10)

const file = process.env.FILENAME
fs.writeFile(file, data, 'utf-8', (err) => {
  if (err) {
    console.log('Error writing: ', err)
  }
  console.log('File writing!')
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.log('Error reading: ', err)
    } else {
      console.log('File reading!', file, data)
    }
  })
  console.log('File reading!', file)
})

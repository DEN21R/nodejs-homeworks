import pool from './db.js'

function createTable() {
  pool
    .query(
      `
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL
      )
    `,
    )
    .then(() => {
      console.log('Table products created successfully')
      process.exit()
    })
    .catch((error) => {
      console.error('Error creating table:', error)
      process.exit(1)
    })
}

createTable()

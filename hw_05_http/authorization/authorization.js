// Работа с заголовком Authorization

// Создание сервера:

// Импортируйте модуль `http`.

// Создайте сервер с использованием метода `http.createServer()`.

// Проверка заголовка Authorization:

// В функции обратного вызова для сервера проверяйте наличие заголовка `Authorization` в объекте `req.headers`.
// Если заголовок отсутствует, возвращайте статус ответа `401` и сообщение "Unauthorized".
// Если заголовок присутствует, возвращайте статус ответа `200` и сообщение "Authorization header received".

// Формирование ответа:

// Установите соответствующий статус ответа и заголовок `Content-Type` в `text/plain`.
// Отправьте текстовый ответ в зависимости от наличия заголовка `Authorization`.

// Запуск сервера:

// Настройте сервер на прослушивание порта `3000`.
// Добавьте сообщение в консоль, которое будет выводиться при успешном запуске сервера.

import http from 'http'

const PORT = 3333

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')

  if (req.headers.authorization) {
    res.statusCode = 200
    res.end('Authorization header received')
    return
  }
  res.statusCode = 401
  res.end('Unauthorized')
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

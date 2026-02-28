// Обработка PUT и DELETE запросов

// Создание сервера:

// Импортируйте модуль `http`.

// Создайте сервер с использованием метода `http.createServer()`.

// Обработка PUT и DELETE запросов:

// В функции обратного вызова для сервера проверяйте метод запроса (`req.method`).
// Если метод запроса `PUT`, возвращайте статус ответа `200` и сообщение "PUT-запрос обработан".
// Если метод запроса `DELETE`, возвращайте статус ответа `200` и сообщение "DELETE-запрос обработан".

// Формирование ответа:

// Установите соответствующий статус ответа и заголовок `Content-Type` в `text/plain`.
// Отправьте текстовый ответ в зависимости от метода запроса.

// Запуск сервера:

// Настройте сервер на прослушивание порта `3000`.
// Добавьте сообщение в консоль, которое будет выводиться при успешном запуске сервера.

import http from 'http'

const port = 3333

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  if (req.method === 'PUT') {
    res.statusCode = 200
    res.end('PUT-запрос обработан')
  } else if (req.method === 'DELETE') {
    res.statusCode = 200
    res.end('DELETE-запрос обработан')
  } else {
    res.statusCode = 405
    res.end('Метод не поддерживается')
  }
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

import axios from 'axios'

console.log('lesson 3')

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU

// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

// instance.get(`posts`).then(res => console.log(res.data))

// instance.post('posts', { userId: 1000, title: 'hey', body: 'b' }).then(
//   res => console.log(res.data),
//   err => console.log(err)
// )

// instance.put(`posts/100`, { userId: 100, title: 'hey', body: 'b' }).then(
//   res => console.log(res.data),
//   err => console.log(err)
// )

// instance.delete(`posts/2`).then(res => console.log(res))

// just a plug
export default () => {}

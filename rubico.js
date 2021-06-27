const rubico = require('rubico')
const fetch = require('node-fetch');
// const defaultsDeep = require('rubico/x/defaultsDeep')

const {
  pipe, tap,
  switchCase, tryCatch,
  fork, assign, get, pick, omit,
  map, filter, reduce, transform, flatMap,
  and, or, not, any, all,
  eq, gt, lt, gte, lte,
  thunkify, always,
  curry, __,
} = rubico

;(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const responseData = await response.json()
    tap(console.log(pick(['id', 'name', 'username', 'email'])({...responseData[0]})))
})()

const square = (a) => a*a

const add = (b) => b + 3

const five = always(5)

const multiplyFunction = pipe([
  tap(console.log),
  square,
  tap(console.log),
  add,
  console.log
])(five())

console.log(assign({
    fullName: ({ name }) => `${name} Smith`,
    age: ({ age }) => age + 1, 
    location: () => 'San Francisco'
})({ name: 'Steven', age: 30 }))




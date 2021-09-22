/*
import, export, default
import getType from './getType' // u can name it as whatever you want. ex) checkType or whatType, ...
// import { random, user  } from './getRandom'
import * as R from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(getType([1, 2, 3]))
// console.log(random(), random())
console.log(R)


lodash
import _ from 'lodash'  // From `node_modules`
const userA = [  
  { userId: 1, name: 'sangjun', hobby: 'workout'},
  { userId: 2, name: 'seonhoa', hobby: 'musical'}
]
const userB = [
  { userId: 1, name: 'sangjun', hobby: 'listening'},
  { userId: 3, name: 'rooney', hobby: 'walking'}
]
const userC = userA.concat(userB)
console.log('concat', userC)
console.log('uniqBy', _.uniqBy(userC, 'userId'))
const userD = _.unionBy(userA, userB, 'userId')
console.log('unionBy', userD)

const users = [
  { userId:'1', name: 'sangjun' },
  { userId:'2', name: 'sangmin' },
  { userId:'3', name: 'seonhoa' },
  { userId:'4', name: 'rooney' },
  { userId:'5', name: 'java' }
]
const foundUser = _.find(users, { name: 'rooney' })
const foundUserIndex = _.findIndex(users, { name: 'rooney' })
console.log(foundUser)
console.log(foundUserIndex)
_.remove(users, { name: 'java' })
console.log(users)


JSON, Storage *lowdb axios
console.log('apple', apple)
const str = JSON.stringify(apple)  // JSON file as string
console.log('str', str)
console.log(typeof str)
const obj = JSON.parse(str)  // string to JSON
console.log('obj', obj)

import myData from './myData.json'
console.log(myData)
const apple = {
  ticker: "APPL",
  price: 120.92,
  industry: [
    'IT', "Phone"
  ]
}
localStorage.setItem('apple', JSON.stringify(apple)) // if you store in local storage, it will stay half permanently 
console.log(JSON.parse(localStorage.getItem('apple')))
// localStorage.removeItem('apple')
const str = localStorage.getItem('apple')
const obj = JSON.parse(str)
obj.price = 121.92
localStorage.setItem('apple', JSON.stringify(obj))
console.log(JSON.parse(localStorage.getItem('apple')))

*/
import axios from 'axios'
function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}
fetchMovies()






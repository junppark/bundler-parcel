// JS Data
/* 
String: "", '', ``
const result = 'hello world'.indexOf('world')
console.log(result)
const str = 'hello world'
console.log(str.length)
console.log(str.slice(6))
console.log(str.replace('world', 'sangjun'))
console.log(str.replace(' world', ''))
const str1 = 'junppark@gmail.com'
console.log(str1.match(/.+(?=@)/)[0])
const str2 = '    hello world   '
console.log(str2.trim())


Number
const pi = 3.14159265358979
console.log(pi)
const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)
const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer, float)
console.log(typeof integer, typeof float)
console.log('abs: ', Math.abs(-12))  // 절대값
console.log('min: ', Math.min(2, 8))  // 최소
console.log('max: ', Math.max(2, 8))  // 최대
console.log('ceil: ', Math.ceil(3.14)) // 올림 4
console.log('floor: ', Math.floor(3.14)) // 내림 3
console.log('round: ', Math.round(3.14)) // 반올림
console.log('random: ', Math.random())


Boolean: true, false


undefined


null


Array: []
const numbers = [1,2,3,4]  // ex
const fruits = ['apple', 'banana', 'cherry']  // ex

console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)
fruits.forEach(function (element, index, array) {
  console.log(element, index, array)
})

const a = fruits.forEach((fruit, i) => {
  console.log(`${fruit}-${i}`)
})
console.log(a)
const b = fruits.map((fruit, i) => `${fruit}-${i}`)
console.log(b)
const c = fruits.map((fruit, i) => ({
  id: i,
  name: fruit
}))
console.log(c)

const a = numbers.map(number => number < 3)
console.log(a)
const b = numbers.filter(number => number < 3)
console.log(b)

const a = fruits.find(fruit => /^C/.test(fruit))  // if you find the element, the logic breaks
console.log(a)
const b = fruits.findIndex(fruit => /^C/.test(fruit))  // if you find the element, the logic breaks
console.log(b)

const a = numbers.includes(3)
console.log(a) // true
const b = fruits.includes('sangjun')
console.log(b) // false

numbers.push(5)  // 원본 수정됨
console.log(numbers)
numbers.unshift(0)  // 원본 수정됨
console.log(numbers)

numbers.reverse()  // 원본 수정됨
fruits.reverse()  // 원본 수정됨
console.log(numbers)
console.log(fruits)

numbers.splice(2, 0, 999)  // .splice(index, howManyToRemove, (whatNumToPut))  원본 수정됨 
console.log(numbers)
fruits.splice(2, 0, 'sangjun')
console.log(fruits)

Object: {}
const userAge = {
  // key: value
  name: 'sangjun',
  age: 22
}
const userEmail = {
  name: 'sangjun',
  email: 'junppark0612@gmail.com'
}
const target = Object.assign({}, userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)  // memory locations are different. so false

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b)  // memory locations are different. so false

const user = {
  name: 'sangjun',
  age: 22,
  email: 'junppark0612@gmail.com'
}
const keys = Object.keys(user)
console.log(keys)  // ['name', 'age', 'email']
const values = keys.map(key => user[key])
console.log(values)  // ['sangjun', 22, 'junppark0612@gmail.com']

const user = {
  name: 'sangjun',
  age: 22,
  email: 'junppark0612@gmail.com',
  address: 'USA'
}
const { name: sangjun, age, email, address = 'Korea' } = user
console.log(`사용자의 이름은 ${sangjun}입니다.`)
console.log(`${sangjun}의 나이는 ${age}세입니다.`)
console.log(`${sangjun}의 이메일 주소는 ${email}입니다.`)
console.log(address)
const fruits = ['apple', 'banana', 'cherry']
const [, ,b] = fruits
console.log(b)

// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당
const fruits = ['apple', 'banana', 'cherry', 'orange']
console.log(fruits)
console.log(...fruits) /// apple banana cherry
const toObject = (a, b, ...c) => ({ a ,b ,c })  // ... => rest parameter
console.log(toObject(...fruits))

// 데이터 불변성(Immutability)
// 원시 데이터: String Number Boolean undefined null  
// ------------------------------------------------------
// |1:            |2:          |3:          |4:  
// ------------------------------------------------------
// ==> 한번 만들어지면 불변. 그 메모리에 계속 남아있음
// ==> let a = 1, let b = 1. a와 b의 메모리 위치가 같음
let a = 1  // goes to memory 1
let b = 4  // goes to memory 2
console.log(a, b, a===b) // a and b memories are different so a===b false
b = a  // b goes to memeory a(1)
console.log(a, b, a===b)  // a and b memories are same so a===b true
a = 7  // goes to memory 3
console.log(a, b, a===b)  // 
let c = 1  // goes to memory 1
console.log(b, c, b===c)  // a and b memories are same so b===c true

// 참조 데이터: Object Array Function
// ------------------------------------------------------
// |1: {       } |2: {       } |3:  {       } |4: {      } 
// ------------------------------------------------------
let a = { k: 1 }  // goes to memory 1
let b = { k: 1 }  // goes to memory 2
console.log(a, b, a===b)  // false
a.k = 7  // memory 1
b = a  // b goes to memory 1, b = { k: 7 }
console.log(a, b, a===b) // true
a.k = 2  // memory1, b also changes its value since b is in memory 1, b = { k: 2 }
console.log(a, b, a===b)  // true, 
let c = b  // c goes to memory 1, since b is in memory 1. c = { k: 2 }
console.log(a, b, c, a===c) // true
a.k = 9  // a = { k: 9 }, b = { k: 9 },  c = { k: 9 } since they are in memory 1
console.log(a, b, c, a===c)

// 얕은 복사(shallow copy), 깊은 복사(deep copy)
const user = {
  name: 'sangjun',
  age: 22,
  emails: ['junppark0612@gmail.com']
}
const copyUser = user  // stored in same memory
console.log(copyUser === user)  // true
user.age = 23  // since they are stored in same memory, their ages are all changed to 23
console.log('user', user)
console.log('copyUser', copyUser)
console.log('------')
console.log('------')
const copyUser2 = Object.assign({}, user)  // copyUser2 stored in different memory than user(shallow copy)
const copyUser3 = {...user}  // different memory(shallow copy)
console.log(copyUser2 === user)  // false
user.age = 22 
console.log('user', user)
console.log('copyUser2', copyUser2)
console.log('------')
console.log('------')
user.emails.push('junppark@gmail.com')  // email data also 참조형. so stored in same memory
console.log(user.emails === copyUser3.emails)  // true,,, ㅜㅜ
console.log('---deep copy---')
import _ from 'lodash'
const copyUser4 = _.cloneDeep(user)  // deep copy
console.log(user === copyUser4)
user.age = 24
console.log('user', user)
console.log('copyUser4', copyUser4)
user.emails.push('junppark0612@gmail.com')
console.log(user.emails === copyUser4.emails)  // false
*/










import random from './getRandom'

// // 삼항 연산자 (ternary operator)
// const a = 1 < 2 // true
// if (a) {
//   console.log('true')
// } else {
//   console.log('false')
// }

// // a 가 true 면 왼쪽, false면 오른쪽
// console.log(a ? 'true' : 'false');

// console.log(random())

// const a = random()
// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   default:
//     console.log('rest..')

// }

// const ulEl = document.querySelector('ul')
// for (let i = 0; i < 10; i++) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if ((i + 1) % 2 == 0) {
//     li.addEventListener('click', function() {
//     console.log(li.textContent)
//   })
//   }
//   ulEl.appendChild(li)
// }

// 변수 유효범위(variable scope)
// let, const는 block level안에서만 작동. {}
// var 는 function level. 메모리많이먹엉 --> 쓰지마

// 형변환(type conversion)
// truthy
// true, {}, [], 1, 2, 'false', -12, '3.14', ...
// falsy
// false, '', null, undefined, 0, -0, NaN

// function arguments
// const sum = function() {
//   console.log(arguments)   
//   return
// }
// console.log(sum(11,2))        arguments = { 0 : 11, 1 : 2 }

// const dbArrow = x => ({ name: 'Heropy' }) // object return시 () 붙여야함 나머지는 () 필요없음
// console.log(dbArrow(7))

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression
// const a = 7
// function double() {
//   console.log(a * 2)
// }
// double();
// (function() {
//   console.log(a * 2)
// })();

// (function() {
//   console.log(a * 2)
// }());

// timer function
// setTimeout(함수, 시간(m/s)): 일정 시간 후 함수 실행
// setInterval(함수, 시간(m/s)): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 timeout 함수를 종료
// clearInterval(): 설정된 interval 함수를 종료
// const timer = setInterval(() => {
//   console.log('hello')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearInterval(timer)
// })

// callback
// 함수의 인수로 사용되는 함수
// 실행위치 보장용도
// function timeout(callback) {
//   setTimeout(() => {
//     console.log('rooney')
//     callback()
//   }, 3000)
// }
// timeout(() => {
//   console.log('done')
// })

// 생성자 함수 prototype PascalCase (new라는 생성자와 쓸때)
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// } 
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }
// const sangjun = new User('sangjun', 'park')
// const seonhoa = new User('seonhoa', 'choi')
// const rooney = new User('rooney', 'choi')

// console.log(sangjun.getFullName())
// console.log(seonhoa.getFullName())
// console.log(rooney.getFullName())

// this
// 일반(normal) 함수는 "호출 위치"에 따라 this 정의
// 화살표(arrow) 함수는 자신이 선언된 "함수 범위"에서 this 정의
// const sangjun = {
//   name: 'Sangjun',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// sangjun.normal()

// const rooney = {
//   name: "rooney",
//   normal: sangjun.normal,
//   arrow: sangjun.normal
// }
// rooney.normal()

// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }
// const sangmin = new User('sangmin')
// sangmin.normal()

// const timer = {
//   name: 'sangjun',
//   timeout: function () {
//     setTimeout(() => {
//       console.log(this.name)
//     }, 2000)
//   }
// }
// timer.timeout()

// ES6 Classes
// class User {
//   constructor(first, last) {  // constructor: function(first, last)
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// const sangjun = new User('sangjun', 'park')
// console.log(sangjun.getFullName())

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const momBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(momBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('benz', 4, true)
console.log(myCar)

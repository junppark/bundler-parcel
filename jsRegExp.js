const str = `
010-1234-5678
junppark0612@gmail.com
https://heropy.blog/2018/10/28/regexp/
Today was not bad and the guy gave me money. The guy is funny.
tabbcccdddd
http://localhost:1234
`

// const regexp = new RegExp('the', 'g')
// const regexp = /the/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str.match(/the/gi))
// console.log(str.match(/\.$/gim))  // find . => \. $=>end of line
// console.log(str.match(/d$/gm))
// console.log(str.match(/^t/gim))
// console.log(str.match(/./g))
// console.log(str.match(/http/g))
// console.log(str.match(/h../g))
// console.log(str.match(/h..p/g))
// console.log(str.match(/h..p/g))
// console.log(str.match(/was|me/g))
// console.log(str.match(/https?/g))
// console.log(str.match(/d{2,3}/g))
// console.log(str.match(/\b\w{2,3}\b/g))
// console.log(str.match(/[0-9]{1,}/g))
// console.log(str.match(/\w/g))
// console.log(str.match(/\bm\w{1,}\b/g))
// const h = `  the hello world   !
// `
// console.log(h.replace(/\s/g, ''))
// console.log(str.match(/.{1,}(?=@)/g))
// console.log(str.match(/(?<=@).{1,}/g))
console.log(str.match(/(?<=@).{1,}/g))








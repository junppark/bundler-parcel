export default function /*getType*/(data) {  // since it is default, the function name does not necessrary
  return Object.prototype.toString.call(data).slice(8, -1)
}
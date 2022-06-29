 module.exports = function reverse (n) {
 let result = '';
 if (typeof n === 'number') {
    n = Math.abs(n)
 }
 n = n.toString();

 for (let i = n.length - 1; i !== -1; i--) {
    result = result + n[i]

 }

  return result
}

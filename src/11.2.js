function countDown(n) {
  let result = []; 
  for(let counter = n; counter > 0; counter = counter - 1) 
  {result.push(counter)
  }
  return result
}

module.exports = countDown
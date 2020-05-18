var text = require('./test-replace.txt')
console.log('text', text);

function add(a, b){
    console.log('Hello, World');
    return a + b;
}

module.exports = {
    add
}

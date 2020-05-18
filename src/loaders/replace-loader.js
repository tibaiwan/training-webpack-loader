module.exports = function(src) {
    //src是原文件内容（abcde），下面对内容进行处理，这里是反转
    console.log('src', src);
    var result = src.split('').reverse().join(''); //edcba
    //返回JavaScript源码，必须是String或者Buffer
    return `module.exports = '${result}'`;
}
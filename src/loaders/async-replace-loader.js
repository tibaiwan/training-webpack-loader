const loaderUtils = require('loader-utils');

// 异步
module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();

  setTimeout(() => {
    const reg = new RegExp(options.targetWord, 'g');
    const result = source.replace(reg, options.replaceWord);
    callback(null, result);
  }, 1000);
}

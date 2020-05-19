const loaderUtils = require('loader-utils');

// return 版本
module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  // this.query 等同于 options
  console.log('options', options);
  console.log('this.query', this.query);
  const reg = new RegExp(options.targetWord, 'g');
  const result = source.replace(reg, options.replaceWord);
  // this.callback 等同于 return
  // return result;
  this.callback(null, result);
}

/*
callback API:

this.callback(
  err: Error | null,
  content: string | Buffer,
  sourceMap?: SourceMap, // 可选参数，返回source-map
  meta?: any // 可选参数，返回meta
);
*/

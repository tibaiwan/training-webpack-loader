## Webpack loader

> 概念

loader 是导出为一个函数的 node 模块。该函数在 loader 转换资源的时候调用。

> 运行

```bash
yarn
yarn build
```

> 功能：实现了字符串的全局同步替换和异步替换。

replace-loader 核心代码:

同步：

```js
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
```

异步：

```js
module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();

  setTimeout(() => {
    const reg = new RegExp(options.targetWord, 'g');
    const result = source.replace(reg, options.replaceWord);
    callback(null, result);
  }, 1000);
}
```

webpack 相关配置：
```js
resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, './src/loaders')]
},
module: {
    rules: [
        {
            test: /\.js$/,
            use: [
                {
                    loader: 'async-replace-loader',
                    options: {
                        targetWord: '你好',
                        replaceWord: '大家都好',
                    }
                },
                {
                    loader: 'replace-loader',
                    options: {
                        targetWord: 'Hello',
                        replaceWord: '你好',
                    }
                },
            ]
        }
    ]
}
```
#### SEE ALSO

- [Webpack 编写一个 loader](https://webpack.docschina.org/contribute/writing-a-loader/)
- [Webpack loader API](https://www.webpackjs.com/api/loaders/)
- [Webpack loader-utils](https://github.com/webpack/loader-utils)

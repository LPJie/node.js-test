/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs')
var data = fs.readFileSync('./test.txt');
console.log('行数为：' + data.toString().split('\n').length);
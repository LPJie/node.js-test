/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs')

fs.readFile('./test.txt',function (err,data) {
    if (err) return console.error(err);
    console.log('行数为：' + data.toString().split('\n').length);
})
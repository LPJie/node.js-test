/**
 * Created by Administrator on 2017/8/11.
 */
var filterFn = require('./file.js')
var dir = process.argv[2]//文件夹的名称
var filterStr = process.argv[3]//需要筛选的文件类型
filterFn(dir, filterStr, function (err, list) {
    if (err)return console.error('error:', err)
    list.forEach(function (file) {
        console.log(file)
    })
})